"use client";

import * as React from "react";
import { useEffect, useRef, useState, useCallback } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { ArrowRight, Mail, Github, Linkedin, FileText, MessageCircle, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import * as SeparatorPrimitive from "@radix-ui/react-separator";
import * as d3 from "d3";
import type { GeoPermissibleObjects } from "d3";

// The sandbox cannot install topojson-client / topojson-specification, so the world map ships as plain GeoJSON
// (same-origin, because the site CSP does not allow a CDN fetch) and the one type we need is declared here.
type GeometryObject = { type: string; coordinates?: unknown; geometries?: unknown };

const smoothEase = [0.25, 0.1, 0.25, 1] as const;
const WORLD_URL = "assets/trace/world-110.json";

const EMAIL = "teldigi5@gmail.com";

const CONTACT_LINKS = [
  { icon: Mail, label: EMAIL, href: `mailto:${EMAIL}` },
  {
    icon: Github,
    label: "github.com/teldigi5-wq",
    href: "https://github.com/teldigi5-wq",
    external: true,
  },
  {
    icon: Linkedin,
    label: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/poojana-kaveesh-sellahewa-3048b8387/",
    external: true,
  },
  {
    icon: MessageCircle,
    label: "Message me on WhatsApp",
    href: "https://wa.me/94761297530",
    external: true,
  },
  {
    icon: Instagram,
    label: "Follow on Instagram",
    href: "https://www.instagram.com/kxveeshjay/",
    external: true,
  },
  {
    icon: FileText,
    label: "Download CV (PDF)",
    href: "assets/Poojana_Kaveesh_ATS_2026.pdf",
    external: true,
  },
];

interface GlobeWireframeProps {
  width?: number;
  height?: number;
  className?: string;
  strokeColor?: string;
  strokeWidth?: number;
  graticuleColor?: string;
  graticuleOpacity?: number;
  sphereOutlineColor?: string;
  sphereOutlineWidth?: number;
  autoRotate?: boolean;
  autoRotateSpeed?: number;
  rotateToLocation?: string | [number, number];
  rotateCities?: string[];
  rotationSpeed?: number;
  initialRotation?: [number, number];
  enableInteraction?: boolean;
  showGraticule?: boolean;
  animationDuration?: number;
  startAsGlobe?: boolean;
  countryFillColor?: string;
  countryHoverColor?: string;
  variant?: "wireframe" | "wireframesolid" | "solid";
  scale?: number;
  backgroundColor?: string;
}

interface GeoFeature {
  type: string;
  geometry: GeometryObject;
  properties: Record<string, unknown>;
}

interface CustomProjection extends d3.GeoProjection {
  alpha(value: number): CustomProjection;
  alpha(): number;
}

const cityCoordinates: Record<string, [number, number]> = {
  "san francisco": [37.7749, -122.4194],
  "new york": [40.7128, -74.006],
  london: [51.5074, -0.1278],
  tokyo: [35.6762, 139.6503],
  paris: [48.8566, 2.3522],
  moscow: [55.7558, 37.6176],
  dubai: [25.2048, 55.2708],
  singapore: [1.3521, 103.8198],
  sydney: [-33.8688, 151.2093],
  mumbai: [19.076, 72.8777],
  "los angeles": [34.0522, -118.2437],
  chicago: [41.8781, -87.6298],
};

function orthographicRaw(x: number, y: number): [number, number] {
  const cosy = Math.cos(y);
  return [cosy * Math.sin(x), Math.sin(y)];
}

function equirectangularRaw(lambda: number, phi: number): [number, number] {
  return [lambda, phi];
}

function interpolateProjection(
  raw0: (lambda: number, phi: number) => [number, number],
  raw1: (lambda: number, phi: number) => [number, number],
): CustomProjection {
  let t = 0;

  const createRawProjection = (
    alpha: number,
  ): ((lambda: number, phi: number) => [number, number]) => {
    return (lambda: number, phi: number): [number, number] => {
      const [x0, y0] = raw0(lambda, phi);
      const [x1, y1] = raw1(lambda, phi);
      return [x0 + alpha * (x1 - x0), y0 + alpha * (y1 - y0)];
    };
  };

  const projection = d3.geoProjection(
    createRawProjection(t),
  ) as unknown as CustomProjection;

  const alphaMethod = ((value?: number): CustomProjection | number => {
    if (value !== undefined) {
      t = +value;
      const newProjection = d3.geoProjection(
        createRawProjection(t),
      ) as unknown as CustomProjection;

      if (projection.scale()) newProjection.scale(projection.scale());
      if (projection.translate())
        newProjection.translate(projection.translate());
      if (projection.rotate()) newProjection.rotate(projection.rotate());
      if (projection.precision())
        newProjection.precision(projection.precision());

      newProjection.alpha = alphaMethod as CustomProjection["alpha"];

      return newProjection;
    }
    return t;
  }) as CustomProjection["alpha"];

  projection.alpha = alphaMethod;

  return projection;
}

function GlobeWireframe({
  width,
  height,
  className = "aspect-square w-full max-w-150",
  strokeColor = "currentColor",
  strokeWidth = 1.0,
  graticuleColor = "currentColor",
  graticuleOpacity = 0.2,
  sphereOutlineColor = "currentColor",
  sphereOutlineWidth = 1,
  autoRotate = true,
  autoRotateSpeed = 0.5,
  rotateToLocation,
  rotateCities = [],
  rotationSpeed = 3000,
  initialRotation = [0, 0],
  enableInteraction = true,
  showGraticule = true,
  animationDuration = 2000,
  startAsGlobe = true,
  countryFillColor,
  countryHoverColor,
  variant = "wireframe",
  scale = 1,
  backgroundColor,
}: GlobeWireframeProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [progress, setProgress] = useState(startAsGlobe ? 0 : 100);
  const [worldData, setWorldData] = useState<GeoFeature[]>([]);
  const [rotation, setRotation] = useState<[number, number]>(initialRotation);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouse, setLastMouse] = useState([0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const rotationInterval = useRef<ReturnType<typeof setInterval> | null>(null);
  const rotationAnimFrame = useRef<number | null>(null);
  const rotationStartTime = useRef<number | null>(null);
  const rotationFrom = useRef<[number, number]>([0, 0]);
  const rotationTo = useRef<[number, number]>([0, 0]);
  const animationFrame = useRef<number | null>(null);
  const [currentCityIndex, setCurrentCityIndex] = useState(0);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const resizeObserver = useRef<ResizeObserver | null>(null);
  const rotationRef = useRef(rotation);

  useEffect(() => {
    rotationRef.current = rotation;
  }, [rotation]);

  const useResponsive = !width && !height;
  const finalWidth = useResponsive ? dimensions.width : width || 800;
  const finalHeight = useResponsive ? dimensions.height : height || 500;

  const defaultStrokeColor = strokeColor || "currentColor";
  const defaultGraticuleColor = graticuleColor || "currentColor";
  const defaultSphereOutlineColor = sphereOutlineColor || "currentColor";
  const defaultCountryFillColor =
    countryFillColor || (variant === "solid" ? "currentColor" : "none");
  const defaultBackgroundColor = backgroundColor || "transparent";

  useEffect(() => {
    if (!containerRef.current) return;

    const container = containerRef.current;

    const updateDimensions = () => {
      if (container && useResponsive) {
        const width = container.offsetWidth || 300;
        setDimensions({ width, height: width });
      }
    };

    updateDimensions();

    if (useResponsive) {
      resizeObserver.current = new ResizeObserver(updateDimensions);
      resizeObserver.current.observe(container);
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(container);

    return () => {
      if (resizeObserver.current) {
        resizeObserver.current.disconnect();
      }
      observer.unobserve(container);
    };
  }, [useResponsive]);

  useEffect(() => {
    const loadWorldData = async () => {
      try {
        const response = await fetch(WORLD_URL);
        const world = (await response.json()) as { features: GeoFeature[] };
        setWorldData(world.features);
      } catch (error) {
        console.error("Error loading world data:", error);
        const fallbackData: GeoFeature[] = [
          {
            type: "Feature",
            geometry: {
              type: "Polygon",
              coordinates: [
                [
                  [-180, -90],
                  [180, -90],
                  [180, 90],
                  [-180, 90],
                  [-180, -90],
                ],
              ],
            } as unknown as GeometryObject,
            properties: {},
          },
        ];
        setWorldData(fallbackData);
      }
    };
    loadWorldData();
  }, []);

  useEffect(() => {
    if (!autoRotate || !isVisible || isDragging || rotateCities.length > 0) {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
        animationFrame.current = null;
      }
      return;
    }

    const rotate = () => {
      setRotation((prev) => [(prev[0] + autoRotateSpeed) % 360, prev[1]]);
      animationFrame.current = requestAnimationFrame(rotate);
    };

    animationFrame.current = requestAnimationFrame(rotate);

    return () => {
      if (animationFrame.current) {
        cancelAnimationFrame(animationFrame.current);
      }
    };
  }, [autoRotate, autoRotateSpeed, isVisible, isDragging, rotateCities.length]);

  const animateRotationTo = useCallback(
    (target: [number, number], duration = 1200) => {
      if (rotationAnimFrame.current) {
        cancelAnimationFrame(rotationAnimFrame.current);
      }

      rotationFrom.current = rotationRef.current;
      rotationTo.current = target;
      rotationStartTime.current = performance.now();

      const animate = (time: number) => {
        const elapsed = time - (rotationStartTime.current || 0);
        const t = Math.min(elapsed / duration, 1);

        const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;

        const lon =
          rotationFrom.current[0] +
          (rotationTo.current[0] - rotationFrom.current[0]) * eased;

        const lat =
          rotationFrom.current[1] +
          (rotationTo.current[1] - rotationFrom.current[1]) * eased;

        setRotation([lon, lat]);

        if (t < 1) {
          rotationAnimFrame.current = requestAnimationFrame(animate);
        }
      };

      rotationAnimFrame.current = requestAnimationFrame(animate);
    },
    [],
  );

  useEffect(() => {
    if (rotateCities.length === 0 || !isVisible) return;

    const rotateToNextCity = () => {
      const nextIndex = (currentCityIndex + 1) % rotateCities.length;
      const city = rotateCities[nextIndex].toLowerCase();
      const coordinates = cityCoordinates[city];

      if (coordinates) {
        animateRotationTo(
          [-coordinates[1], -coordinates[0]],
          rotationSpeed * 0.6,
        );
        setCurrentCityIndex(nextIndex);
      }
    };

    const city = rotateCities[currentCityIndex].toLowerCase();
    const coordinates = cityCoordinates[city];

    if (coordinates) {
      animateRotationTo(
        [-coordinates[1], -coordinates[0]],
        rotationSpeed * 0.6,
      );
    }

    rotationInterval.current = setInterval(rotateToNextCity, rotationSpeed);

    return () => {
      if (rotationInterval.current) clearInterval(rotationInterval.current);
    };
  }, [
    rotateCities,
    currentCityIndex,
    rotationSpeed,
    isVisible,
    animateRotationTo,
  ]);

  useEffect(() => {
    if (!rotateToLocation) return;

    let coordinates: [number, number];
    if (typeof rotateToLocation === "string") {
      const city = rotateToLocation.toLowerCase();
      coordinates = cityCoordinates[city] || [0, 0];
    } else {
      coordinates = rotateToLocation;
    }

    setRotation([-coordinates[1], -coordinates[0]]);
  }, [rotateToLocation]);

  const handleMouseDown = (event: React.MouseEvent) => {
    if (!enableInteraction) return;
    setIsDragging(true);
    const rect = svgRef.current?.getBoundingClientRect();
    if (rect) {
      setLastMouse([event.clientX - rect.left, event.clientY - rect.top]);
    }
  };

  const handleMouseMove = (event: React.MouseEvent) => {
    if (!isDragging || !enableInteraction) return;
    const rect = svgRef.current?.getBoundingClientRect();
    if (!rect) return;

    const currentMouse = [event.clientX - rect.left, event.clientY - rect.top];
    const dx = currentMouse[0] - lastMouse[0];
    const dy = currentMouse[1] - lastMouse[1];

    const t = progress / 100;
    let sensitivity: number;

    if (variant === "wireframe") {
      sensitivity = t < 0.5 ? 0.5 : 0.25;
    } else {
      sensitivity = 0.5;
    }

    setRotation((prev) => [
      prev[0] + dx * sensitivity,
      Math.max(-90, Math.min(90, prev[1] - dy * sensitivity)),
    ]);

    setLastMouse(currentMouse);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (!svgRef.current || worldData.length === 0 || !isVisible) return;
    if (useResponsive && dimensions.width === 0) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll("*").remove();

    let finalCountryFill = "none";
    let finalStrokeWidth = strokeWidth;
    let finalOpacity = 1.0;
    let renderGraticule = showGraticule;
    let finalGraticuleOpacity = graticuleOpacity;
    let finalSphereOutlineWidth = sphereOutlineWidth;

    if (variant === "wireframe") {
      finalCountryFill = "none";
      finalStrokeWidth = strokeWidth;
      finalOpacity = 1.0;
      renderGraticule = showGraticule;
      finalGraticuleOpacity = graticuleOpacity;
      finalSphereOutlineWidth = sphereOutlineWidth;
    } else if (variant === "wireframesolid") {
      finalCountryFill = "none";
      finalStrokeWidth = strokeWidth;
      finalOpacity = 1.0;
      renderGraticule = false;
      finalGraticuleOpacity = 0;
      finalSphereOutlineWidth = 1.5;
    } else if (variant === "solid") {
      finalCountryFill = defaultCountryFillColor;
      finalStrokeWidth = strokeWidth * 0.5;
      finalOpacity = 0.3;
      renderGraticule = false;
      finalGraticuleOpacity = 0;
      finalSphereOutlineWidth = 1.5;
    }

    if (defaultBackgroundColor !== "transparent") {
      const radius = (Math.min(finalWidth, finalHeight) / 2) * scale * 0.9;
      svg
        .append("circle")
        .attr("cx", finalWidth / 2)
        .attr("cy", finalHeight / 2)
        .attr("r", radius)
        .attr("fill", defaultBackgroundColor);
    }

    let projection: d3.GeoProjection | CustomProjection;
    const path = d3.geoPath();

    if (variant === "wireframe") {
      const t = progress / 100;
      const alpha = Math.pow(t, 0.5);

      const baseScale = Math.min(finalWidth, finalHeight) / 2;
      const scaleRange = d3
        .scaleLinear()
        .domain([0, 1])
        .range([baseScale * 0.9 * scale, baseScale * 0.54 * scale]);
      const baseRotate = d3.scaleLinear().domain([0, 1]).range([0, 0]);

      projection = interpolateProjection(orthographicRaw, equirectangularRaw)
        .scale(scaleRange(alpha))
        .translate([finalWidth / 2, finalHeight / 2])
        .rotate([baseRotate(alpha) + rotation[0], rotation[1]])
        .precision(0.1);

      (projection as CustomProjection).alpha(alpha);
      path.projection(projection);
    } else {
      projection = d3
        .geoOrthographic()
        .scale((Math.min(finalWidth, finalHeight) / 2) * scale * 0.9)
        .translate([finalWidth / 2, finalHeight / 2])
        .rotate([rotation[0], rotation[1]])
        .precision(0.1);

      path.projection(projection);
    }

    if (renderGraticule && finalGraticuleOpacity > 0) {
      try {
        const graticule = d3.geoGraticule();
        const graticulePath = path(graticule());
        if (graticulePath) {
          svg
            .append("path")
            .datum(graticule())
            .attr("d", graticulePath)
            .attr("fill", "none")
            .attr("stroke", defaultGraticuleColor)
            .attr("stroke-width", 1)
            .attr("opacity", finalGraticuleOpacity);
        }
      } catch (error) {
        console.error("Error creating graticule:", error);
      }
    }

    svg
      .selectAll(".country")
      .data(worldData)
      .enter()
      .append("path")
      .attr("class", "country")
      .attr("d", (d: GeoFeature) => {
        try {
          const pathString = path(d as unknown as GeoPermissibleObjects);
          if (!pathString) return "";
          if (
            typeof pathString === "string" &&
            (pathString.includes("NaN") || pathString.includes("Infinity"))
          ) {
            return "";
          }
          return pathString;
        } catch (error) {
          return "";
        }
      })
      .attr("fill", finalCountryFill)
      .attr("stroke", defaultStrokeColor)
      .attr("stroke-width", finalStrokeWidth)
      .attr("opacity", finalOpacity)
      .style("visibility", function (this: SVGPathElement) {
        const pathData = d3.select(this).attr("d");
        return pathData && pathData.length > 0 && !pathData.includes("NaN")
          ? "visible"
          : "hidden";
      })
      .on("mouseenter", function (this: SVGPathElement) {
        if (countryHoverColor && variant === "solid") {
          d3.select(this).attr("fill", countryHoverColor);
        }
      })
      .on("mouseleave", function (this: SVGPathElement) {
        if (variant === "solid") {
          d3.select(this).attr("fill", finalCountryFill);
        }
      });

    try {
      const sphereOutline = path({ type: "Sphere" });
      if (sphereOutline) {
        svg
          .append("path")
          .datum({ type: "Sphere" })
          .attr("d", sphereOutline)
          .attr("fill", "none")
          .attr("stroke", defaultSphereOutlineColor)
          .attr("stroke-width", finalSphereOutlineWidth)
          .attr("opacity", variant === "wireframe" ? 1.0 : 0.8);
      }
    } catch (error) {
      console.error("Error creating sphere outline:", error);
    }
  }, [
    worldData,
    progress,
    rotation,
    isVisible,
    finalWidth,
    finalHeight,
    defaultStrokeColor,
    strokeWidth,
    defaultGraticuleColor,
    graticuleOpacity,
    defaultSphereOutlineColor,
    sphereOutlineWidth,
    showGraticule,
    defaultCountryFillColor,
    countryHoverColor,
    variant,
    scale,
    defaultBackgroundColor,
    useResponsive,
    dimensions.width,
  ]);

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <svg
        ref={svgRef}
        width={finalWidth}
        height={finalHeight}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseLeave}
        className={
          useResponsive
            ? "w-full h-full opacity-0 transition-opacity duration-1000"
            : ""
        }
        style={{
          cursor: enableInteraction
            ? isDragging
              ? "grabbing"
              : "grab"
            : "default",
          opacity: useResponsive ? (dimensions.width > 0 ? 1 : 0) : 1,
        }}
      />
    </div>
  );
}

const FormDots = React.forwardRef<
  React.ComponentRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref,
  ) => {
    const isHorizontal = orientation === "horizontal";
    return (
      <SeparatorPrimitive.Root
        ref={ref}
        decorative={decorative}
        orientation={orientation}
        className={cn(
          "shrink-0 flex items-center justify-center overflow-hidden",
          isHorizontal ? "w-full" : "h-full",
          className,
        )}
        {...props}
      >
        <div
          className={cn("relative", isHorizontal ? "w-full h-4" : "h-full w-4")}
        >
          <div
            className={cn(
              "absolute inset-0 bg-repeat",
              "text-neutral-400 dark:text-white/20",
            )}
            style={{
              backgroundImage:
                "radial-gradient(circle, currentColor 0.8px, transparent 0.8px)",
              backgroundSize: isHorizontal ? "6px 100%" : "100% 6px",
              maskImage: isHorizontal
                ? "linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%)"
                : "linear-gradient(to bottom, transparent 0%, black 10%, black 90%, transparent 100%)",
            }}
          />
        </div>
      </SeparatorPrimitive.Root>
    );
  },
);
FormDots.displayName = "FormDots";


interface ContactWithGlobeProps {
  title?: string;
  subtitle?: string;
  description?: string;
  className?: string;
}

const FIELD =
  "[font-family:inherit] [&:-webkit-autofill]:shadow-[inset_0_0_0_1000px_#f8fafc] [&:-webkit-autofill]:[-webkit-text-fill-color:#1e293b] w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-2.5 text-sm text-slate-800 placeholder:text-slate-400 outline-none focus:border-[#2b4bff] focus:ring-2 focus:ring-[#2b4bff]/15 transition-all duration-200";
const LABEL = "text-xs font-semibold tracking-widest uppercase text-slate-500";

export default function ContactWithGlobe({
  title = "Let's talk about an internship",
  subtitle = "Contact",
  description = "I am looking for a backend engineering internship. Tell me about the team and the role, or ask anything about my projects.",
  className,
}: ContactWithGlobeProps) {
  const [status, setStatus] = useState<{ ok: boolean; text: string }>({ ok: false, text: "" });
  const reduceMotion =
    typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

  const [sending, setSending] = useState(false);

  // Free delivery: FormSubmit (no account, no key) emails the message to my inbox. If it cannot send (offline, or the
  // address is not activated yet), the form falls back to opening the visitor's own mail app with the message filled in.
  const sendDirect = async (data: Record<string, string>) => {
    const ctl = new AbortController();
    const t = setTimeout(() => ctl.abort(), 9000);
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...data, _template: "table", _captcha: "false" }),
        signal: ctl.signal,
      });
      const json = (await res.json().catch(() => ({}))) as { success?: boolean | string };
      return res.ok && (json.success === true || json.success === "true");
    } catch {
      return false;
    } finally {
      clearTimeout(t);
    }
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    const v = (k: string) => String(f.get(k) ?? "").trim();
    if (v("website")) return;
    const name = v("name"), company = v("company"), email = v("email"), message = v("message");
    const el = (n: string) => form.elements.namedItem(n) as HTMLElement | null;
    if (!name) { setStatus({ ok: false, text: "Add your name." }); el("name")?.focus(); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { setStatus({ ok: false, text: "Add a valid email so I can reply." }); el("email")?.focus(); return; }
    if (!message) { setStatus({ ok: false, text: "Add a short message." }); el("message")?.focus(); return; }
    if (message.length > 4000) { setStatus({ ok: false, text: "Please keep the message under 4000 characters." }); el("message")?.focus(); return; }

    const subject = `Portfolio message from ${name}${company ? ` (${company})` : ""}`;
    setSending(true);
    setStatus({ ok: false, text: "Sending…" });
    const sent = await sendDirect({ name, company, email, message, _subject: subject, _replyto: email });
    setSending(false);
    if (sent) {
      form.reset();
      setStatus({ ok: true, text: "Sent. Thank you, I will reply to the email you gave." });
      return;
    }
    const lines = ["Hi Poojana,", "", message, "", "—", `Name: ${name}`, ...(company ? [`Company: ${company}`] : []), `Reply to: ${email}`];
    window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus({ ok: true, text: `Could not send directly, so your mail app should open with the message ready. Or write to ${EMAIL}.` });
  };

  return (
    <section
      aria-labelledby="cn-h"
      className={cn(
        "relative w-full bg-[#f4f7ff] overflow-hidden pt-32 pb-20 border-t border-slate-200/80 [font-family:var(--sans)]",
        className,
      )}
    >
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, y: -12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: smoothEase }}
            className="inline-flex items-center px-4 py-1.5 rounded-full bg-[#2b4bff]/10 border border-[#2b4bff]/25"
          >
            <span className="text-sm text-[#2b4bff] font-medium">{subtitle}</span>
          </motion.div>

          <motion.h2
            id="cn-h"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: smoothEase }}
            className="m-0 max-w-3xl text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#0b1020]"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.3, ease: smoothEase }}
            className="m-0 text-base text-slate-600 max-w-md"
          >
            {description}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto items-start">
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.2, ease: smoothEase }}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-1">
              <h3 className="m-0 text-xl font-semibold text-[#0b1020]">Get in touch</h3>
              <p className="m-0 text-sm text-slate-600 leading-relaxed max-w-xs">
                Reach out through any channel below. Open to internships · Sri Lanka, UTC+05:30.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {CONTACT_LINKS.map(({ icon: Icon, label, href, external }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener" } : {})}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: smoothEase }}
                  className="group flex items-center gap-3 w-fit text-sm text-slate-600 no-underline hover:text-[#0b1020] transition-colors duration-200"
                >
                  <div className="w-8 h-8 rounded-lg bg-white border border-slate-200 group-hover:border-[#2b4bff]/50 group-hover:bg-[#2b4bff]/5 flex items-center justify-center shrink-0 transition-all duration-200">
                    <Icon className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#2b4bff] transition-colors duration-200" />
                  </div>
                  {label}
                </motion.a>
              ))}
            </div>

            <div className="relative overflow-hidden h-52 text-slate-500" aria-hidden="true">
              <GlobeWireframe
                className="w-full aspect-square max-w-full absolute top-0 left-0"
                variant="wireframesolid"
                autoRotate={!reduceMotion}
                autoRotateSpeed={0.45}
                rotateToLocation={[6.9271, 79.8612]}
                strokeWidth={0.6}
                graticuleOpacity={0.12}
              />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/2 bg-linear-to-t from-[#f4f7ff] to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0, delay: 0.35, ease: smoothEase }}
            className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 shadow-[0_30px_70px_-40px_rgba(20,32,80,0.35)]"
          >
            <form onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
              <div>
                <h3 className="m-0 text-lg font-semibold text-[#0b1020] mb-0.5">Send a message</h3>
                <p className="m-0 text-sm text-slate-600">
                  Your message is emailed to me through FormSubmit, a free form service. Nothing is stored on this site.
                </p>
              </div>

              <FormDots />

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex flex-col gap-2">
                  <label htmlFor="cg-name" className={LABEL}>Full Name</label>
                  <input id="cg-name" name="name" type="text" autoComplete="name" placeholder="Your name" required className={FIELD} />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="cg-company" className={LABEL}>Company <span className="normal-case tracking-normal font-normal">(optional)</span></label>
                  <input id="cg-company" name="company" type="text" autoComplete="organization" placeholder="Your company" className={FIELD} />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cg-email" className={LABEL}>Email Address</label>
                <input id="cg-email" name="email" type="email" autoComplete="email" placeholder="you@company.com" required className={FIELD} />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="cg-message" className={LABEL}>Message</label>
                <textarea id="cg-message" name="message" rows={4} placeholder="Type your message here" required className={cn(FIELD, "resize-none py-3")} />
              </div>

              <input name="website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  type="submit"
                  disabled={sending}
                  className="w-fit h-11 px-8 rounded-xl font-semibold text-sm bg-[#0b1020] hover:bg-[#1b2550] text-white group"
                >
                  {sending ? "Sending…" : "Send message"}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </Button>
                <p role="status" aria-live="polite" className={cn("m-0 text-sm", status.ok ? "text-emerald-700" : "text-slate-600")}>
                  {status.text}
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

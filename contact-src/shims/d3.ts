// Only the d3 pieces the globe uses (the full `d3` bundle is ~250 KB larger). Same names, so the component code is unchanged.
export { select } from "d3-selection";
export { scaleLinear } from "d3-scale";
export { geoProjection, geoOrthographic, geoPath, geoGraticule } from "d3-geo";
export type { GeoProjection } from "d3-geo";

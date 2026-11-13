import * as React from "react";
import { createRoot } from "react-dom/client";
import ContactWithGlobe from "@/components/ui/contact-with-globe";

export function mountContact(el: HTMLElement) {
  createRoot(el).render(<ContactWithGlobe />);
}

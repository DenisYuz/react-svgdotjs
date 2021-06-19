import React, { useEffect, useRef } from "react";
import { SVG } from "@svgdotjs/svg.js";

export const SvgAnnotations = ({ width = 1000, height = 800 }) => {
  const elementRef = useRef();
  useEffect(() => {
    const divElement = elementRef.current;
    const svg = SVG()
      .addTo(divElement)
      .size(width, height)
      .viewbox(0, 0, 1920, 700)
      .scale(1);
    const polygon = svg.polygon(
      `${width / 2},0 ${width},${height / 2} 0,${height / 2} `
    );
    polygon.fill("#F1501061");
  }, []);

  return (
    <div style={{ border: "1px solid red", width, height }}>
      <div ref={elementRef}></div>
    </div>
  );
};

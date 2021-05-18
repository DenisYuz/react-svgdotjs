import React, { useEffect, useRef } from "react";
import { SVG } from "@svgdotjs/svg.js";

export const ReactSvg = ({
  width = 100,
  height = 100,
  scale = 1,
  fill = "#A1A1A1AA",
}) => {
  const elementRef = useRef();
  useEffect(() => {
    const divElement = elementRef.current;
    const svg = SVG().addTo(divElement).size(width, height).scale(scale);
    const rect = svg.rect(100, 100).fill(fill).move(1000, 50);
    const polygon = svg.polygon("400,1000, 500,600 550,365 650,365 820,1000 ");
    polygon.fill("#F1501061");
  }, [elementRef.current]);

  return (
    <div style={{ border: "1px solid red", width, height }}>
      <div ref={elementRef}></div>
    </div>
  );
};

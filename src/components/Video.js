import React from "react";

export default function Video({ src }) {
  return (
    <video
      controls
      autoPlay
      style={{
        position: "absolute",
        top: "0",
        left: "0",
        width: "100vw",
      }}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}

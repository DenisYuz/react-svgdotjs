import React from "react";

export const RTCVideo = React.forwardRef((props, ref) => {
  const { src, onLoadedVideoMetaData } = props;
  return (
    <video
      ref={ref}
      style={{
        position: "absolute",
        left: "0",
        top: "0",
        minWidth: "100%",
        minHeight: "100%",
        width: "auto",
        height: "auto",
        zIndex: "1",
        backgroundSize: "cover",
        overflow: "hidden",
        border: "3px solid green",
      }}
      controls
      autoPlay
      preload={"auto"}
      onLoadedMetadata={onLoadedVideoMetaData}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
});

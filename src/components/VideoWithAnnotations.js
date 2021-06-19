import React, { useCallback, useEffect, useRef } from "react";
import { SvgAnnotations } from "./SvgAnnotations";
import droneVideo from "../assets//DJI Drone Sample Video.mp4";
import { useResizeDetector } from "react-resize-detector";
import { SVG } from "@svgdotjs/svg.js";

let svgAnnotations = null;
window.svgAnnotations = svgAnnotations;

export default function VideoWithAnnotations() {
  const svgDivRef = useRef();

  const [videoMetaData, setVideoMetaData] = React.useState(null);

  const onResize = useCallback((width, height) => {
    console.log(`width: ${width}; height: ${height}`);
    svgAnnotations?.size(width, height);
  }, []);

  const {
    ref: videoDivRef,
    width: videoDivWidth,
    height: videoDivHeight,
  } = useResizeDetector({ onResize });

  const createMainSVGOverVideo = (
    videoReolutionWidth,
    videoResolutionHeight
  ) => {
    console.log(
      `video resolution: ${videoReolutionWidth}, ${videoResolutionHeight}`
    );
    console.log(`video div size: ${videoDivWidth}, ${videoDivHeight}`);
    const divElement = svgDivRef.current;

    svgAnnotations = SVG()
      .addTo(divElement)
      .size(videoDivWidth, videoDivHeight)
      .viewbox(0, 0, videoReolutionWidth, videoResolutionHeight);

    const polygon = svgAnnotations.polygon(
      `0,0 ${videoReolutionWidth / 2},0 ${videoReolutionWidth / 2},${
        videoResolutionHeight / 2
      } 0,${videoResolutionHeight / 2} 0,0`
    );
    polygon.fill("#F1501061");

    //console.log(`svgAnnotations.size: ${svgAnnotations.size()}`);
  };

  useEffect(() => {
    console.log(videoMetaData);
    if (videoMetaData?.videoWidth > 0 && videoMetaData?.videoHeight > 0) {
      createMainSVGOverVideo(
        videoMetaData.videoWidth,
        videoMetaData.videoHeight
      );
    }
  }, [videoMetaData]);

  useEffect(() => {}, []);

  return (
    <div>
      <video
        ref={videoDivRef}
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
        onLoadedMetadata={(e) => {
          setVideoMetaData({
            videoHeight: e.target.videoHeight,
            videoWidth: e.target.videoWidth,
            duration: e.target.duration,
          });
        }}
      >
        <source src={droneVideo} type="video/mp4" />
      </video>
      <div
        ref={svgDivRef}
        style={{
          zIndex: "2",
          position: "absolute",
          top: "0",
          left: "0",
          width: "100vw",
          height: "100vh",
        }}
      ></div>
    </div>
  );
}

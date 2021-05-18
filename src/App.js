import logo from "./logo.svg";
import { ReactSvg } from "./components/ReactSvg";
import demoImage from "./assets/Landscape-Photography-steps.jpg";
import droneVideo from "./assets//DJI Drone Sample Video.mp4";

function App() {
  return (
    <div>
      <video
        controls
        autoplay
        style={{
          position: "absolute",
          top: "0",
          left: "0",
          width: "100vw",
        }}
      >
        <source src={droneVideo} type="video/mp4" />
      </video>
      <ReactSvg
        style={{ position: "absolute", top: "0", left: "0" }}
        width="100vw"
        height="100vh"
        fill="#AA331E60"
      ></ReactSvg>
    </div>
  );
}

export default App;

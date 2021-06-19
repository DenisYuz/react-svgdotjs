import { makeStyles } from "@material-ui/core/styles";
import VideoWithAnnotations from "./components/VideoWithAnnotations";
const useStyles = makeStyles({
  main: {
    position: "absolute",
    width: "100%",
    border: "20px solid green",
  },
});

function App() {
  const classes = useStyles();

  return <VideoWithAnnotations style={{ border: "2px solid blue" }} />;
}

export default App;

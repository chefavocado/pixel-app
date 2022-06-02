import { Fragment, useRef, useState } from "react";

import Title from "./components/Layout/Title";
import PixelContainer from "./components/Pixels/PixelContainer";
import ColourSwatch from "./components/Colours/ColourSwatch";
import ButtonContainer from "./components/Buttons/ButtonContainer";
import html2canvas from "html2canvas";

function App() {
  const [selectedColour, setSelectedColour] = useState();
  const [isDarkMode, setIsDarkMode] = useState(false);

  const ref = useRef();

  const setModeHandler = () => {
    if (isDarkMode === false) {
      setIsDarkMode(true);
      document.body.style = "background: black";
    } else {
      setIsDarkMode(false);
      document.body.style = "background: white";
    }
  };

  const screenshotHandler = () => {
    const { cropPositionTop, cropPositionLeft, cropWidth, cropHeight } = {
      cropPositionTop: 0,
      cropPositionLeft: 0,
      cropWidth: 1400,
      cropHeight: 1800 
    };

    html2canvas(ref.current).then(canvas => {
      let croppedCanvas = document.createElement("canvas");
      let croppedCanvasContext = croppedCanvas.getContext("2d");

      croppedCanvas.width = cropWidth;
      croppedCanvas.height = cropHeight;

      croppedCanvasContext.drawImage(canvas, cropPositionLeft, cropPositionTop);

      const a = document.createElement("a");
      a.href = croppedCanvas.toDataURL();
      a.download = "screenshot.png";
      a.click();
    });
  };

  return (
    <Fragment>
      <Title selectedMode={isDarkMode} />
      <ColourSwatch selectedColour={setSelectedColour} selectedMode={isDarkMode} />
      <PixelContainer colour={selectedColour} selectedMode={isDarkMode} reference={ref} />
      <ButtonContainer setMode={setModeHandler} selectedMode={isDarkMode} screenshot={screenshotHandler} />
    </Fragment>
  );
}

export default App;

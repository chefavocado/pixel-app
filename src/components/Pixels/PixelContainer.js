import { useState } from "react";

import Pixel from "./Pixel";
import classes from "./PixelContainer.module.css";
import pixelData from "../../data/PixelData";

const PixelContainer = props => {
  const [colour, setColour] = useState({});

  const selectedColour = props.colour;

  const colourChangeHandler = e => {
    const pixel = e.currentTarget.id;
    setColour({ ...colour, [pixel]: selectedColour });
  };

  const mappedPixels = pixelData.map(pixel => (
    <Pixel
      className={pixel.class}
      onMouseDown={colourChangeHandler}
      style={{ background: colour[pixel.class] }}
      id={pixel.class}
      key={pixel.class}
      selectedMode={props.selectedMode}
    />
  ));

  return (
    <div
      ref={props.reference}
      className={
        props.selectedMode ? classes.container__dark : classes.container
      }
    >
      {mappedPixels}
    </div>
  );
};

export default PixelContainer;

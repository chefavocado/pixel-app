import Colour from "./Colour";
import colourData from "../../data/ColourData";
import classes from "./ColourSwatch.module.css";

const ColourSwatch = props => {
  const selectedColourHandler = e => {
    const clickedColour = e.target.style.background;
    // const selectedSwatchColor = props.selectedColour();

    props.selectedColour(clickedColour);
    console.log(clickedColour);
  };

  const colours = colourData.map(colour => (
    <Colour
      key={colour.key}
      style={colour.id}
      onClick={selectedColourHandler}
      selectedMode={props.selectedMode}
    />
  ));

  return <div className={classes.swatch}>{colours}</div>;
};

export default ColourSwatch;

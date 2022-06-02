import classes from "./Pixel.module.css";

const Pixel = props => {
  return (
    <div
      className={`${classes[props.className]} ${
        props.selectedMode ? classes.pixel__dark : classes.pixel
      }`}
      onMouseDown={props.onMouseDown}
      style={props.style}
      id={props.id}
    ></div>
  );
};

export default Pixel;

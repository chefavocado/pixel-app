import classes from "./Colour.module.css";

const Colour = props => {
  const grey = "rgba(231, 231, 231, 0.627)";

  return (
    <div
      className={classes.colour}
      style={
        props.selectedMode
          ? { background: `${props.style}`, borderColor: grey }
          : { background: `${props.style}`, borderColor: "black" }
      }
      onClick={props.onClick}
    ></div>
  );
};

export default Colour;

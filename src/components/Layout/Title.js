import classes from "./Title.module.css";

const Title = props => {
  const grey = "rgba(231, 231, 231, 0.627)";

  return (
    <div
      className={classes.title}
      style={props.selectedMode ? { color: grey } : { color: "black" }}
    >
      <h1>Pixel Pictures</h1>
      <p>Make art with pixels</p>
    </div>
  );
};

export default Title;

import classes from "./Button.module.css";

const Button = props => {
  const btnClass = props.selectedMode ? classes.button__dark : classes.button;
  return (
    <button className={btnClass} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;

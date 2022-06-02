import Button from "../UI/Button";

const DarkModeButton = props => {
  const grey = "rgba(231, 231, 231, 0.627)";

  return (
    <Button onClick={props.setMode} selectedMode={props.selectedMode}>
      Dark Mode
    </Button>
  );
};

export default DarkModeButton;

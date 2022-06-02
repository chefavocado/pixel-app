import Button from "../UI/Button";

const ScreenshotButton = props => {
  const grey = "rgba(231, 231, 231, 0.627)";

  return (
    <Button selectedMode={props.selectedMode} onClick={props.screenshot}>
      Screenshot
    </Button>
  );
};

export default ScreenshotButton;

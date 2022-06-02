import Button from "../UI/Button";

const RefreshButton = props => {
  const grey = "rgba(231, 231, 231, 0.627)";

  const refreshHandler = () => {
    window.location.reload();
  };
  return (
    <Button onClick={refreshHandler} selectedMode={props.selectedMode}>
      Refresh
    </Button>
  );
};

export default RefreshButton;

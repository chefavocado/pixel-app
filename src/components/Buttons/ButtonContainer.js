import DarkModeButton from "./DarkModeButton";
import RefreshButton from "./RefreshButton";

import classes from "./ButtonContainer.module.css";
import ScreenshotButton from "./ScreenshotButton";

const ButtonContainer = props => {
  return (
    <div className={classes.button_container}>
      <DarkModeButton
        setMode={props.setMode}
        selectedMode={props.selectedMode}
      />
      <RefreshButton selectedMode={props.selectedMode} />
      <ScreenshotButton
        selectedMode={props.selectedMode}
        screenshot={props.screenshot}
      />
    </div>
  );
};

export default ButtonContainer;

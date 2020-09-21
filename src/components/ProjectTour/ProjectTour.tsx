import React from "react";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { Steps } from "intro.js-react";
import checkIsServer from "utils/server";

const steps = [
  {
    element: "section",
    intro: "test 1",
    position: "right",
    tooltipClass: "myTooltipClass",
    highlightClass: "myHighlightClass",
  },
  {
    element: "div",
    intro: "test 2",
  },
];

const initialStep = 0;

const onExit = () => {
  alert("exited");
};
//
// const isEnabled = true;

interface State {
  isEnabled: boolean;
}

class ProjectTour extends React.PureComponent<{}, State> {
  render(): React.ReactNode {
    if (checkIsServer()) return null;

    return (
      <Steps
        enabled={true}
        steps={steps}
        initialStep={initialStep}
        onExit={onExit}
        options={{
          tooltipPosition: "bottom",
          showStepNumbers: false,
          nextLabel: "Дальше",
          prevLabel: "Назад",
          showBullets: false,
        }}
      />
    );
  }
}

export default ProjectTour;

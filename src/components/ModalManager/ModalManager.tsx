import React from "react";
import * as UI from "./ModalManager.ui";

interface Props {
  children: React.ReactNode;
}

interface State {}

class ModalManager extends React.PureComponent<Props, State> {
  static defaultProps: Props = {
    children: false,
  };

  render(): React.ReactElement {
    const { children } = this.props;
    return (
      <UI.Container>
        <UI.PopupContainer>
          <UI.CloseButton />
          {children}
        </UI.PopupContainer>
      </UI.Container>
    );
  }
}

export default ModalManager;

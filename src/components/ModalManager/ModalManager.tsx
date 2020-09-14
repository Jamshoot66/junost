import React from "react";
import * as UI from "./ModalManager.ui";

interface Props {
  children: React.ReactNode;
}

interface State {
  isShown: boolean;
}

class ModalManager extends React.PureComponent<Props, State> {
  static defaultProps: Props = {
    children: false,
  };

  state: State = {
    isShown: true,
  };

  hideEvent = (): void => {
    this.setState({ isShown: false });
  };

  render(): React.ReactNode {
    const { children } = this.props;
    const { isShown } = this.state;

    if (!isShown) return false;

    return (
      <UI.Container>
        <UI.Background onClick={this.hideEvent} />
        <UI.PopupContainer>
          <UI.CloseButton onClick={this.hideEvent} />
          {children}
        </UI.PopupContainer>
      </UI.Container>
    );
  }
}

export default ModalManager;

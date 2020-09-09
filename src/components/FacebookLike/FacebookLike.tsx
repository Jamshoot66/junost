import React from "react";

interface Props {}

interface State {}

class FacebookLike extends React.PureComponent<Props, State> {
  // TODO: add fb integration
  render() {
    return (
      <React.Fragment>
        <div id="fb-root" />
        <div
          data-href="https://anmedio.github.io/grades/"
          data-width=""
          data-layout="button_count"
          data-action="like"
          data-size="small"
          data-show-faces="true"
          data-share="false"
        />
      </React.Fragment>
    );
  }
}

export default FacebookLike;

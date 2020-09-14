import React from "react";
import PageHeader from "components/PageHeader";
import GradesContainer from "components/GradesContainer";
import ModalManager from "components/ModalManager";

class Index extends React.Component {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error("errorInfo", error);
    // eslint-disable-next-line no-console
    console.error("errorInfo", errorInfo);
  }

  render(): React.ReactElement {
    return (
      <React.Fragment>
        <ModalManager>
          <div> some content test</div>
        </ModalManager>
        <PageHeader />
        <GradesContainer />
      </React.Fragment>
    );
  }
}

export default Index;

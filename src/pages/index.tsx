import React from "react";
import PageContainer from "components/PageContainer";
import PageHeader from "components/PageHeader";
import GradesContainer from "components/GradesContainer";

class Index extends React.Component {
  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    // eslint-disable-next-line no-console
    console.error("errorInfo", error);
    // eslint-disable-next-line no-console
    console.error("errorInfo", errorInfo);
  }

  render(): React.ReactElement {
    return (
      <PageContainer>
        <PageHeader />
        <GradesContainer />
      </PageContainer>
    );
  }
}

export default Index;

import React from "react";
import PageContainer from "components/PageContainer";
import PageHeader from "components/PageHeader";

class Index extends React.Component {
  componentDidCatch(error: any, errorInfo: any): void {
    // eslint-disable-next-line no-console
    console.error("errorInfo", error);
    // eslint-disable-next-line no-console
    console.error("errorInfo", errorInfo);
  }

  render() {
    return (
      <PageContainer>
        <PageHeader />
      </PageContainer>
    );
  }
}

export default Index;

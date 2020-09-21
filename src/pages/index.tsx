import React from "react";
import PageHeader from "components/PageHeader";
import GradesContainer from "components/GradesContainer";
import ModalManager from "components/ModalManager";
import ProjectTour from "components/ProjectTour";

import About from "popups/About";
import AboutProject from "popups/AboutProject";
import AboutSkill from "popups/AboutSkill";

const testAbout: React.ReactNode = (
  <AboutSkill
    header="Computer science"
    description="Основы программирования и Computer Science -
    это те самые фундаментальные знания, которые необходимы каждому,
    кто хочет стать настоящим инженером, ведь нужно не просто знать,
    как писать код, но и понимать, как этот код работает сейчас и
    будет работать при других условиях."
    isMastered
    links={[
      {
        label: "Легендарный гарвардский курс CS50",
        href: "https://google.com",
      },
      {
        label: "google",
        href: "https://google.com",
      },
      {
        label: "Легендарный гарвардский курс CS52",
        href: "https://google.com",
      },
    ]}
  />
);

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
        <ProjectTour />
        <ModalManager>{testAbout}</ModalManager>
        <PageHeader />
        <GradesContainer />
      </React.Fragment>
    );
  }
}

export default Index;

import React from "react";
import Grade, { Skill } from "package/Grade";
import { JUNOST_GIT_ISSUES_URL } from "utils/constants";
import PageContainer from "components/PageContainer";
import {
  Container,
  Title,
  GradeContainer,
  AddMoreButton,
  SingleGradeContainer,
  PlusIcon,
  VerticalPlaceholder,
  Background,
} from "./GradesContainer.ui";
import { mockedGradeSections } from "./mockData";
import { GradeSection, State } from "./GradesContainer.types";

class GradesContainer extends React.PureComponent<unknown, State> {
  state: State = {
    gradeSections: mockedGradeSections,
  };

  skillEventHandler = (event: React.MouseEvent, skill: Skill): void => {
    // eslint-disable-next-line no-console
    console.log(event.target);
    // eslint-disable-next-line no-console
    console.log(skill);
  };

  toggleCollapse = (gradeSection: GradeSection): void => {
    const { gradeSections } = this.state;
    const newGradeSectionIndex = gradeSections.findIndex(
      item => item.title === gradeSection.title
    );

    const newGradeSection = {
      ...gradeSection,
      isCollapsed: !gradeSection.isCollapsed,
    };
    const newGradeSections = gradeSections.slice(0);
    newGradeSections[newGradeSectionIndex] = newGradeSection;
    this.setState({ gradeSections: newGradeSections });
  };

  render(): React.ReactElement {
    const { gradeSections } = this.state;
    return (
      <Container>
        {gradeSections?.map(section => (
          <Background isCollapsed={section.isCollapsed}>
            <PageContainer>
              <GradeContainer isCollapsed={section.isCollapsed}>
                <Title
                  isCollapsed={section.isCollapsed}
                  onClick={() => this.toggleCollapse(section)}
                >
                  <PlusIcon> {section.isCollapsed ? "+" : "-"}</PlusIcon>
                  {section.title}
                </Title>

                {section.grades?.map(grade => (
                  <SingleGradeContainer isCollapsed={section.isCollapsed}>
                    <Grade
                      label={grade.label}
                      skills={grade.skills}
                      onClick={this.skillEventHandler}
                      footer={
                        <React.Fragment>
                          <VerticalPlaceholder />
                          <AddMoreButton
                            href={JUNOST_GIT_ISSUES_URL}
                            target="_blank"
                          >
                            Добавить +
                          </AddMoreButton>
                        </React.Fragment>
                      }
                    />
                  </SingleGradeContainer>
                ))}
              </GradeContainer>
            </PageContainer>
          </Background>
        ))}
      </Container>
    );
  }
}

export default GradesContainer;

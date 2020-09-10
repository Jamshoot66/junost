import React from "react";
import Grade from "package/Grade";
import { JUNOST_GIT_ISSUES_URL } from "utils/constants";
import {
  Container,
  Title,
  GradeContainer,
  AddMoreButton,
  SingleGradeContainer,
  PlusIcon,
  VerticalPlaceholder,
} from "./GradesContainer.ui";
import { mockedGradeSections } from "./mockData";

interface State {
  isCollapsed: boolean;
}

class GradesContainer extends React.PureComponent<never, State> {
  gradeSections = mockedGradeSections;

  state: State = {
    isCollapsed: true,
  };

  render(): React.ReactElement {
    const { isCollapsed } = this.state;
    return (
      <Container>
        {this.gradeSections?.map(section => (
          <GradeContainer>
            <Title>
              <PlusIcon> {isCollapsed ? "+" : "-"}</PlusIcon>
              {section.title}
            </Title>

            {section.grades?.map(grade => (
              <SingleGradeContainer>
                <Grade
                  label={grade.label}
                  skills={grade.skills}
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
        ))}
      </Container>
    );
  }
}

export default GradesContainer;

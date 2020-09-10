import React from "react";
import Grade, { Skill, Props as GradeProps } from "package/Grade";
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

type GradeSection = {
  title: string;
  isCollapsed: boolean;
  grades: GradeProps[];
};

interface State {
  gradeSections: GradeSection[];
}

class GradesContainer extends React.PureComponent<never, State> {
  state: State = {
    gradeSections: mockedGradeSections,
  };

  skillEventHandler = (event: React.MouseEvent, skill: Skill): void => {
    console.log(event.target);
    console.log(skill);
  };

  render(): React.ReactElement {
    const { gradeSections } = this.state;
    return (
      <Container>
        {gradeSections?.map(section => (
          <GradeContainer>
            <Title>
              <PlusIcon> {section.isCollapsed ? "+" : "-"}</PlusIcon>
              {section.title}
            </Title>

            {section.grades?.map(grade => (
              <SingleGradeContainer>
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
        ))}
      </Container>
    );
  }
}

export default GradesContainer;

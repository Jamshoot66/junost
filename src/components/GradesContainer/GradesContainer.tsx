import React from "react";
import Grade from "package/Grade";
import {
  Container,
  Title,
  GradeContainer,
  AddMoreButton,
  SingleGradeContainer,
} from "./GradesContainer.ui";

class GradesContainer extends React.PureComponent {
  gradeSections = [
    {
      title: "Frontend",
      grades: [
        {
          label: "Junior",
          skills: [
            {
              label: "Javascript",
              description: "Javascript description",
              links: ["google.com", "ya.ru"],
            },
            {
              label: "Typescript",
              description: "Typescript description",
              links: ["google.com", "ya.ru"],
            },
          ],
        },
        {
          label: "Middle",
          skills: [
            {
              label: "Javascript",
              description: "Javascript description",
              links: ["google.com", "ya.ru"],
            },
            {
              label: "Typescript",
              description: "Typescript description",
              links: ["google.com", "ya.ru"],
            },
          ],
        },
      ],
    },
    {
      title: "Frontend 2",
      grades: [
        {
          label: "Junior",
          skills: [
            {
              label: "Javascript",
              description: "Javascript description",
              links: ["google.com", "ya.ru"],
            },
            {
              label: "Typescript",
              description: "Typescript description",
              links: ["google.com", "ya.ru"],
            },
          ],
        },
        {
          label: "Middle",
          skills: [
            {
              label: "Javascript",
              description: "Javascript description",
              links: ["google.com", "ya.ru"],
            },
            {
              label: "Typescript",
              description: "Typescript description",
              links: ["google.com", "ya.ru"],
            },
          ],
        },
      ],
    },
  ];

  render(): React.ReactElement {
    return (
      <Container>
        {this.gradeSections?.map(section => (
          <GradeContainer>
            <Title>{section.title}</Title>

            {section.grades?.map(grade => (
              <SingleGradeContainer>
                <Grade
                  label={grade.label}
                  skills={grade.skills}
                  footer={<AddMoreButton>Добавить + </AddMoreButton>}
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

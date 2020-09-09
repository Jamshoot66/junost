import React from "react";

interface Props {
  label: string;
  skills: {
    label: string;
    description: string;
    links: string[];
  }[];
}

function Grade(props: Props): React.ReactElement {
  const { label, skills } = props;

  return (
    <section>
      <header>{label}</header>
      <div>
        {skills?.map(skill => (
          <div>{skill.label}</div>
        ))}
      </div>
    </section>
  );
}

export default Grade;

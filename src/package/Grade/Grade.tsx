import React from "react";
import styles from "./Grade.module.scss";

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
    <section className={styles.container}>
      <header className={styles.title}>{label}</header>
      <div>
        {skills?.map(skill => (
          <div className={styles.skillBadge}>{skill.label}</div>
        ))}
      </div>
    </section>
  );
}

export default Grade;

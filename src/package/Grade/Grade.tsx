import React from "react";
import styles from "./Grade.module.scss";

interface Props {
  label: string;
  skills: {
    label: string;
    description: string;
    links: string[];
  }[];
  footer?: React.ReactElement;
}

function Grade(props: Props): React.ReactElement {
  const { label, skills, footer } = props;

  return (
    <section className={styles.container}>
      <header className={styles.title}>{label}</header>
      <div>
        {skills?.map(skill => (
          <div className={styles.skillBadge}>{skill.label}</div>
        ))}
      </div>
      <footer>{footer}</footer>
    </section>
  );
}

Grade.defaultProps = {
  footer: null,
};

export default Grade;

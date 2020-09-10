import React from "react";
import styles from "./Grade.module.scss";

type Skill = {
  label: string;
  isMastered?: boolean;
  descriptionHeader?: string;
  description: string;
  links: string[];
};

interface Props {
  label: string;
  skills: Skill[];
  footer?: React.ReactElement;
}

function Grade(props: Props): React.ReactElement {
  const { label, skills, footer } = props;

  return (
    <section className={styles.container}>
      <header className={styles.title}>{label}</header>
      <div>
        {skills?.map(
          (skill): React.ReactElement => {
            const badgeStyles = [styles.skillBadge];
            if (skill.isMastered) badgeStyles.push(styles.skillBadge__mastered);

            return <div className={badgeStyles.join(" ")}>{skill.label}</div>;
          }
        )}
      </div>
      <footer>{footer}</footer>
    </section>
  );
}

Grade.defaultProps = {
  footer: null,
};

export default Grade;

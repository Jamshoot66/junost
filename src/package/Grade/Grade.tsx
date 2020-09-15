import React from "react";
import { Skill, Props } from "./Grade.types";
import styles from "./Grade.module.scss";

function Grade(props: Props): React.ReactElement {
  const { label, skills, footer, onClick } = props;

  return (
    <section className={styles.container}>
      <header className={styles.title}>{label}</header>
      <div>
        {skills?.map(
          (skill: Skill): React.ReactElement => {
            const badgeStyles = [styles.skillBadge];
            if (skill.isMastered) badgeStyles.push(styles.skillBadge__mastered);
            if (onClick) badgeStyles.push(styles.skillBadge__clickable);

            return (
              <button
                key={`${skill.label}_${skill.description}`}
                type="button"
                role={onClick ? "button" : "note"}
                className={badgeStyles.join(" ")}
                onClick={event => onClick?.(event, skill)}
              >
                {skill.label}
              </button>
            );
          }
        )}
      </div>
      <footer>{footer}</footer>
    </section>
  );
}

Grade.defaultProps = {
  footer: null,
  onClick: null,
};

export default Grade;

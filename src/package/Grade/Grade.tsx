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
  onClick?: (event: React.MouseEvent, skillData: Skill) => void;
}

function Grade(props: Props): React.ReactElement {
  const { label, skills, footer, onClick } = props;

  return (
    <section className={styles.container}>
      <header className={styles.title}>{label}</header>
      <div>
        {skills?.map(
          (skill): React.ReactElement => {
            const badgeStyles = [styles.skillBadge];
            if (skill.isMastered) badgeStyles.push(styles.skillBadge__mastered);
            if (onClick) badgeStyles.push(styles.skillBadge__clickable);

            return (
              <button
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

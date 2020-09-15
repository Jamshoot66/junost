import React, { useCallback } from "react";
import About from "popups/About";
import * as UI from "./AboutSkill.ui";
import { Link } from "./AboutSkill.types";

interface Props {
  header: string;
  isMastered: boolean;
  description: string;
  links: Link[];
}

function AboutSkill(props: Props): React.ReactNode {
  const { header, isMastered, description, links } = props;

  const onMasteredClick = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log("mastered clicked");
  }, []);

  return (
    <About
      header={
        <UI.HeaderComponent
          caption={header}
          isMastered={isMastered}
          onMasteredClick={onMasteredClick}
        />
      }
      content={<UI.ContentComponent description={description} links={links} />}
    />
  );
}

export default AboutSkill;

import React from "react";

export type Skill = {
  label: string;
  isMastered?: boolean;
  descriptionHeader?: string;
  description: string;
  links: string[];
};

export interface Props {
  label: string;
  skills: Skill[];
  footer?: React.ReactElement;
  onClick?: (event: React.MouseEvent, skillData: Skill) => void;
}

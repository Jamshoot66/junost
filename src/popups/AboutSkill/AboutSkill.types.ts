import React from "react";

export interface Masterable {
  isMastered: boolean;
}

export interface HeaderProps {
  caption: React.ReactNode;
  isMastered: boolean;
}

export type Link = {
  label: string;
  href: string;
};

export interface ContentProps {
  description: React.ReactNode;
  links?: Link[];
}

import { Props as GradeProps } from "package/Grade";

export interface Collapsable {
  isCollapsed?: boolean;
}

export type GradeSection = {
  title: string;
  isCollapsed: boolean;
  grades: GradeProps[];
};

export interface State {
  gradeSections: GradeSection[];
}

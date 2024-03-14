import { Icon } from "@tabler/icons-react";

export interface IRoutes {
  icon: Icon;
  label: string;
  link?: string;
  links?: { label: string; link: string }[];
}

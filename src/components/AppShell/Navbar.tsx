import { ScrollArea } from "@mantine/core";
import { LinksGroup } from "./LinksGroup";
import {
  IconGauge,
  IconCalendarStats,
  IconAdjustments,
  IconHome,
  IconBulb,
} from "@tabler/icons-react";
import classes from "./Navbar.module.css";
import { IconUser } from "@tabler/icons-react";

const routes = [
  { label: "Início", icon: IconHome, link: "/" },
  { label: "Dashboard", icon: IconGauge, link: "/dashboard" },
  {
    label: "Help Desk",
    icon: IconBulb,
    links: [
      { label: "Chamados Atribuídos", link: "/" },
      { label: "Chamados Abertos", link: "/" },
    ],
  },
  {
    label: "Usuários",
    icon: IconUser,
    links: [
      { label: "Todos os Usuários", link: "/" },
      { label: "Clientes", link: "/" },
      { label: "Organizadores", link: "/" },
      { label: "Admins", link: "/" },
    ],
  },
  {
    label: "Lançamentos",
    icon: IconCalendarStats,
    links: [
      { label: "Próximos Lançamentos", link: "/" },
      { label: "Lançamentos Anteriores", link: "/" },
      { label: "Cronograma de Lançamentos", link: "/" },
    ],
  },
  { label: "Configurações", icon: IconAdjustments },
];

const links = routes.map((route) => (
  <LinksGroup {...route} key={route.label} />
));

export const Navbar = () => (
  <ScrollArea className={classes.links}>
    <div className={classes.linksInner}>{links}</div>
  </ScrollArea>
);

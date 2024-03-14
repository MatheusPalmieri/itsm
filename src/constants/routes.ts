import { IRoutes } from "@/interfaces/routes";
import {
  IconHome,
  IconGauge,
  IconBulb,
  IconUser,
  IconCalendarStats,
  IconAdjustments,
} from "@tabler/icons-react";

export const routes: IRoutes[] = [
  { label: "Início", icon: IconHome, link: "/" },
  { label: "Dashboard", icon: IconGauge, link: "/" },
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

// Types
import { ReactNode } from "react";

export interface DashboardSidebarDropdownProps {
  icon: string,
  title: string | number,
  active?: boolean,
  onClick?: ()=> void,
  to?: string
}
export interface SidebarButtonsContainerProps {
  title: string,
  children: ReactNode,
  isCollapsed?: boolean,
}


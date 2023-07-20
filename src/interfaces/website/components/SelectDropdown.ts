// Types
import { ReactNode, ReactElement } from "react";

export interface WebsiteSelectDropdownProps {
  toggleLabel?: ReactNode;
  className?: string;
  options: Array<{
    value: string | number;
    position?: string;
    icon?: ReactElement
  }>
}

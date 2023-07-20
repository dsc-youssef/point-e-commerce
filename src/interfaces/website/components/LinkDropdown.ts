// Types
import { ReactNode, ReactElement } from "react";

export interface LinkDropdownProps {
  toggleLabel?: ReactNode;
  toggleName?: string | number;
  className?: string;
  options: {
    value: string | number;
    to: string,
    icon?: ReactElement
  }[]
}

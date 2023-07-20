import { HeaderSlicerState } from "../../types/header";

export const headerActions = {
  toggleOpen: (state: HeaderSlicerState) => {
    state.isOpen = !state.isOpen;
  }
}



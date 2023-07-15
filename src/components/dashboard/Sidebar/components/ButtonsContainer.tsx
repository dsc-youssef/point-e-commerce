// Dependencies
import { FC, useState } from "react";

// Bootstrap Container
import { Collapse } from "react-bootstrap";

// Props interface
import { SidebarButtonsContainerProps } from "@/interfaces/dashboard/components/Sidebar";

const SidebarButtonsContainer: FC<SidebarButtonsContainerProps> = ({ children, title, isCollapsed }) => {
  const [isOpen, setIsOpen] = useState<boolean>(isCollapsed || false);

  return (
    <div className="sidebar-category">
      <div className="sidebar-category-head" onClick={() => setIsOpen(!isOpen)}>
        <p className="sidebar-category-title">{title}</p>
        <i className={`fal fa-${isOpen ? "angle-down" : "angle-up"}`} />
      </div>
      <div className="sidebar-category-body">
        <Collapse in={isOpen}>
          <div>
            <div className="flex flex-col">
              {children}
            </div>
          </div>
        </Collapse>
      </div>
    </div>
  )
}


export default SidebarButtonsContainer;

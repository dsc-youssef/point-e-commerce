// Dependencies
import { FC, useState } from "react";

// React Router
import { NavLink } from "react-router-dom";

// Interface Props
import { LinkDropdownProps } from "@/interfaces/website/components/LinkDropdown";

const LinkDropdown:FC<LinkDropdownProps> = ({ options, className, toggleLabel, toggleName })=>{
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className={`${className} dropdown`}>
    <div>
      <button
        type='button'
        className="toggle-button"
        onClick={() => setIsOpen(!isOpen)}
      >
        {toggleLabel}
        <span>{toggleName}</span>
        <i className='fal fa-angle-down' />
      </button>
    </div>
    <div className={`${isOpen ? 'block' : 'hidden'} dropdown-menu`}>
      <div>
        {options.map((option, key:number) => (
          <NavLink
            type='button'
            key={key}
            to={option.to}
            className={`dropdown-menu-option`} >
            {option.icon}
            {option.value}
          </NavLink>
        ))}
      </div>
    </div>
  </div>  )
}

export default LinkDropdown;

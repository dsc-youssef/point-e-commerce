// Dependencies
import { FC, useState } from "react";

// Interface Props
import { WebsiteSelectDropdownProps } from "@/interfaces/website/components/SelectDropdown";

const SelectDropdown: FC<WebsiteSelectDropdownProps> = ({ options, className, toggleLabel }) => {
  const [selectedOption, setSelectedOption] = useState(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleOptionClick = (value:any) => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <div className={`${className} dropdown`}>
      <div>
        <button
          type='button'
          className="toggle-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {toggleLabel}
          <span>{selectedOption.value}</span>
          <i className='fal fa-angle-down' />
        </button>
      </div>
      <div className={`${isOpen ? 'block' : 'hidden'} dropdown-menu`}>
        <div>
          {options.map((option) => (
            <button
              type='button'
              key={option.value as number}
              className={`${option.value === selectedOption.value ? 'selected' : ''} dropdown-menu-option`}
              onClick={() => handleOptionClick(option)} >
              {option.icon}
              {option.value}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SelectDropdown;

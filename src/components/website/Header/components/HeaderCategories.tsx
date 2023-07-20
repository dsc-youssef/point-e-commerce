// Dependencies
import { FC } from "react";

// Components
import LinkDropdown from "@/components/website/LinkDropdown";


const HeaderCategories: FC = () => {
  const categoriesDropdown = [
    {
      toggleName: "TV & Audio",
      options: [{ value: "link", to: "/" }, { value: "link", to: "/" }]
    },
    {
      toggleName: "Smart phones",
      options: [{ value: "link", to: "/" }, { value: "link", to: "/" }]
    },
    {
      toggleName: "Laptops & PCs",
      options: [{ value: "link", to: "/" }, { value: "link", to: "/" }]
    },
    {
      toggleName: "Gadgets",
      options: [{ value: "link", to: "/" }, { value: "link", to: "/" }]
    },
    {
      toggleName: "Photo & Video",
      options: [{ value: "link", to: "/" }, { value: "link", to: "/" }]
    },
    {
      toggleName: "Gifts",
      options: [{ value: "link", to: "/" }, { value: "link", to: "/" }]
    },
    {
      toggleName: "Books",
      options: [{ value: "link", to: "/" }, { value: "link", to: "/" }]
    },
    {
      toggleName: "Toys",
      options: [{ value: "link", to: "/" }, { value: "link", to: "/" }]
    }
  ];

  return (
    <div className="header-category">
      <div className="container">
        <h1 className="block-title">Categories</h1>
        {
          categoriesDropdown.map((link, key) => (
            <LinkDropdown className="category-select-box" key={key} toggleName={link.toggleName} options={link.options} />
          ))
        }
      </div>
    </div>
  )
}

export default HeaderCategories;

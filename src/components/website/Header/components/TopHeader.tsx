// Dependencies
import { FC } from "react"

// React Router
import { NavLink } from "react-router-dom";

// Components
import SelectDropdown from "../../SelectDropdown";

const TopHeader: FC = () => {

  const languageOptions = [
    { value: "Language" },
    { value: "Arabic" },
    { value: "English" },
  ]
  const currencyOptions = [
    { value: "Currency" },
    { value: "EGP" },
    { value: "USD" },
  ]


  return (
    <div className="top-header">
      <div className="container">

        <div className="btn-group">
          <SelectDropdown className="placeholder-button" options={languageOptions} toggleLabel={<i className="fas fa-globe" />} />
          <SelectDropdown className="placeholder-button" options={currencyOptions} toggleLabel={<i className="fas fa-circle-dollar" />} />
        </div>
        <div className="btn-group">
          <div className="social-icons placeholder-button">
            <i className="fab fa-facebook" />
            <i className="fab fa-instagram" />
            <i className="fab fa-linkedin" />
            <i className="fab fa-twitter" />
            <i className="fab fa-youtube" />
          </div>
          <div className="placeholder-button">
            <NavLink to="/" className="link-button">
              <i className="fas fa-home" />
              Home
            </NavLink>
          </div>
          <div className="placeholder-button">
            <NavLink to="/shop" className="link-button">
              <i className="fas fa-shop" />
              Shop
            </NavLink>
          </div>
          <div className="placeholder-button">
            <NavLink to="/shop" className="link-button">
              <i className="fas fa-cog" />
              Settings
            </NavLink>
          </div>
          <div className="placeholder-button">
            <NavLink to="/faq" className="link-button">
              FAQ
            </NavLink>
          </div>
        </div>
        <h1 className="block-title">Pages</h1>
      </div>

    </div>
  )
}

export default TopHeader;

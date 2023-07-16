// Dependenices
import { FC } from "react";

// Bootstrap Components
import { Dropdown } from "react-bootstrap";

const CreateModals:FC = ()=>{
	return (
    <Dropdown>
      <Dropdown.Toggle className=" bg-transparent">
        <button className="fal fa-pen btn bg-primary text-white"></button>
      </Dropdown.Toggle>
      <Dropdown.Menu className="shadow select-none">
        <div className="flex flex-col">
          <div className="dropdown-item" >
            <i className="fal fa-dollar-circle" />
            New Sale
          </div>
          <div className="dropdown-item" >
            <i className="fal fa-user-plus" />
            New Customer
          </div>
          <div className="dropdown-item" >
            <i className="fal fa-file-text" />
            New Expense
          </div>
          <div className="dropdown-item" >
            <i className="fal fa-plane" />
            New Order
          </div>
          <div className="dropdown-item" >
            <i className="fal fa-flag" />
            New Role
          </div>
          <div className="dropdown-item">
            <i className="fal fa-cart-plus" />
            New Product
          </div>
          <div className="dropdown-item" >
            <i className="fal fa-user-shield" />
            New User
          </div>
          <div className="dropdown-item" >
            <i className="fal fa-person" />
            New Employe
          </div>
          <div className="dropdown-item" >
            <i className="fal fa-location-plus" />
            New Branch
          </div>
        </div>
      </Dropdown.Menu>
    </Dropdown>
	)
}


export default CreateModals;
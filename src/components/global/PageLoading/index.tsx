// Dependencies
import { FC } from "react";

// Assets
import logo from "~/images/global/logo.png";


const PageLoading: FC = () => {
  return (
    <section className="page-loading">
      <div className="flex items-center justify-center flex-col">
        <img className="loading-logo" src={logo} alt="" />
        <i className="loading-spin"></i>
      </div>
    </section>
  )
}

export default PageLoading;
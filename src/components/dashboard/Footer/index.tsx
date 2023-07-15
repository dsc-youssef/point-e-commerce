// Dependencies
import { FC } from "react";

const Footer:FC = ()=>{
  const currentDate = new Date().getFullYear();

  return (
    <footer className="footer">
      &copy; 2021 - {currentDate} All rights reserved. Made by <span className="special">❤️ Dev.Youssef</span>  
    </footer>
  )
}

export default Footer;
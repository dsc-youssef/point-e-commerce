// Dependencies
import { FC } from "react";

// Assets
import coverLines from "~/images/dashboard/main-cover-lines.png";

const MainCover:FC = ()=>{
  return (
    <article className="main-cover">
      <img className="main-cover-lines" src={coverLines} alt="cover lines"/>
    </article>
  )
}

export default MainCover;

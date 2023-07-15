// Dependencies
import { FC } from "react";

// Interface Props
import { ProgressProps } from "@/interfaces/global/components/Progress";

const Progress:FC<ProgressProps> = ({fill, className, size})=> {
  let bg:string = "bg-danger";
  if(fill > 35 && fill >= 0){
    bg = "bg-warning";
  }else if (fill > 70 && fill <= 100){
    bg = "bg-success";
  }else if(fill > 100){
    bg = "bg-success";
    fill = 100;
  }else if(fill < 0){
    bg = "bg-danger";
    fill = 1;
  }
  
  return (
    <article className={`progress ${size && "progress-"+size} ${className}`}>
      <div className={`${bg}`} style={{width: fill+"%"}}></div>
    </article>
  )
}

export default Progress;
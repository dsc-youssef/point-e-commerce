// Dependencies
import { FC, useEffect, useState } from "react";


// Interface Props
import { WebsiteHomeSliderProps } from "@/interfaces/website/pages/Home/Slider";


const Slider: FC<WebsiteHomeSliderProps> = ({ sliders }) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(currentIndex + 1);
      if (currentIndex === sliders.length - 1) {
        setCurrentIndex(0);
      }
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, [currentIndex])


  return (
    <div className="slider">
      <div className="container">
        {
          typeof sliders === "object" && (
            sliders.map((slider, index: number) => (
              <div className={`container slide ${currentIndex === index && "active"}`} key={index}>
                <div className="slide-content">
                  <h1 className="title">{slider.before} <span className="font-bold">{slider.special}</span> {slider.after}</h1>
                  <button className="btn ">Find Out More</button>
                </div>
                <img className="slide-image" src={slider.image} alt="" />
              </div>
            ))
          )
        }
      </div>
      <div className="slider-mover-buttons">
        {
          typeof sliders === "object" && (
            sliders.map((slider:any, index: number) => (
              <span key={index} className={`button relative z-50 ${index === currentIndex && "active"}`} onClick={() => setCurrentIndex(index)}></span>
            ))
          )
        }
      </div>
    </div>
  );
};

export default Slider;

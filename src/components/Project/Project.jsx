import React, { useState, useEffect } from "react";
import styles from "./Project.module.css";
import { getImageUrl } from "../../utils";
import {projects,NavData} from "../../Data/StaticData";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export const Project = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideLength = projects.length;
  
    const autoScroll = true;
    let slideInterval;
    const intervalTime = 5000;
  
    const nextSlide = () => {
      setCurrentSlide((prev) => (prev === slideLength - 1 ? 0 : prev + 1));
    };
  
    const prevSlide = () => {
      setCurrentSlide((prev) => (prev === 0 ? slideLength - 1 : prev - 1));
    };
  
    const auto = () => {
      slideInterval = setInterval(nextSlide, intervalTime);
    };
  
    useEffect(() => {
      setCurrentSlide(0);
    }, []);
  
    useEffect(() => {
      if (autoScroll) {
        auto();
      }
      return () => clearInterval(slideInterval);
    }, [currentSlide]);
  
    return (
        <section className={styles.container} id={NavData.id.project}>
            <h2 className={styles.title}>{NavData.Pages.Projects}</h2>
      <div className={styles.slider}>
        <div
          className={styles["blurred-background"]}
          style={{
            backgroundImage: `url(${getImageUrl(projects[currentSlide].image)})`,
          }}
        ></div>
  
        <AiOutlineArrowLeft className={styles.arrowprev} onClick={prevSlide} />
        <AiOutlineArrowRight className={styles.arrownext} onClick={nextSlide} />
  
        {projects.map((slide, index) => (
          <div
            className={
              index === currentSlide
                ? `${styles.slide} ${styles.current}`
                : styles.slide
            }
            key={index}
          >
            {index === currentSlide && (
              <div className={styles.slideContent}>
                <img
                  src={getImageUrl(slide.image)}
                  alt={`Slide ${index + 1}`}
                  className={styles.image}
                />
                <div className={styles.content}>
                  <h2>{slide.heading}</h2>
                  <p>{slide.desc}</p>
                  <p>{"Skills: "}{slide.skills.join(", ")}</p>
                  <hr />
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
      </section>
    );
  };
  
  export default Project;
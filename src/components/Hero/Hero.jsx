import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css"

export const Hero = () => {
  return (
    <section className={styles.container}> 
      <div className={styles.content}> 
        <h1 className={styles.title}>Hi, I'm Akash</h1>
        <p className={styles.description}>
          I'm a Java Full-Stack Developer with 2 years of experinece using Java
          on Backend and React-js on Frontend
        </p>
        <a className={styles.contactBtn} href="mailto:akashbodke@0211@gmail.com">Contact Me</a>
      </div>
      <img
        src={
              getImageUrl("hero/heroImage.png")
            }
            alt="Hero Image of Me"
            className={styles.heroImg}
          />
          <div className={styles.topBlur}/>
          <div className={styles.bottomBlur}/>
    </section>
  );
};

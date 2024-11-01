import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
    
  return (
    <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
      <img 
      src =
      {
        getImageUrl("about/aboutImage.png")
      } 
        alt="about image of me" 
        className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>

          <li className={styles.aboutItem}>
            <img 
            src=
            {
              getImageUrl("about/serverIcon.png")
              } 
              alt="Server Icon"
              />
              <div className={styles.aboutItemText}>
                <h3>
                 BackEnd Developer
                </h3>
                <p>
                 I have experinece developing fast and optimised back-end system and apis.
                </p>
              </div>
          </li>
          <br></br>
          <li className={styles.aboutItem}>
            <img 
            src=
            {
              getImageUrl("about/cursorIcon.png")
              } 
              alt="UI Icon"
              />
              <div className={styles.aboutItemText}>
                <h3>
                 FrontEnd Developer
                </h3>
                <p>
                 I'm frontend developer with experinece in building responsive and optimised sites.
                </p>
              </div>
          </li>
          <br></br>
          <li className={styles.aboutItem}>
            <img 
            src=
            {
              getImageUrl("about/cursorIcon.png")
              } 
              alt="UI Icon"
              />
              <div className={styles.aboutItemText}>
                <h3>
                  SAP Techno-Functional
                </h3>
                <p>
                 I have a experinece in SAP (Supply Chain Management) In APO and Logistics Module.
                </p>
              </div>
          </li>
        </ul>
        </div>
    </section>
  );
};

import React from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import {AboutData,AboutImgData , NavData} from "../../Data/StaticData"

export const About = () => {
  return (
    <section className={styles.container} id={NavData.id.about}>
      <div className={styles.titlecontainer}>
      <h3 className={styles.title}>{AboutImgData.Title.title}</h3>
      </div>
        <div className={styles.content}>
      <img 
      src =
      {
        getImageUrl(AboutImgData.aboutImgSrc.srcImg)
      } 
        alt="about image of me" 
        className={styles.aboutImg}
        />
        <ul className={styles.aboutItems}>

        {AboutData.map((item, index) => (
        <li key={index} className={styles.aboutItem}>
          <img src={getImageUrl(item.iconSrc)} alt={item.Designation} className={styles.sapicon}/>
          <div className={styles.aboutItemText}>
            <h3>{item.Designation}</h3>
            <p>{item.Role}</p>
          </div>
        </li>
      ))}
        </ul>
        </div>
    </section>
  );
};

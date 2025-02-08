import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import {ContactData , NavData} from "../../Data/StaticData"

export const Contact = () => {
  return (
    <footer id={NavData.id.contact} className={styles.container}>
      <div className={styles.text}>
        <h2>{ContactData.Title.title}</h2>
        <p>{ContactData.Title.desc}</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl(ContactData.ImageSrc.mailImg)} alt="Email icon" />
          <a href={ContactData.Urls.mailtTo}>{ContactData.Urls.mail}</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl(ContactData.ImageSrc.linkedinImg)}
            alt="LinkedIn icon"
          />
          <a href={ContactData.Urls.linkedinUrl}>{ContactData.Urls.linkedinDesc}</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl(ContactData.ImageSrc.gitImg)} alt="Github icon" />
          <a href={ContactData.Urls.giturl}
          aria-disabled
          >{ContactData.Urls.gitDesc}</a>
        </li>
      </ul>
    </footer>
  );
};
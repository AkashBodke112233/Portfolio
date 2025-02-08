import React, { useState } from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
import modalStyles from "./ResumeModal.module.css";
import Button from "../ui/Button";
import Dialog from "../ui/Dialog";
import {HeroData} from "../../Data/StaticData"

export const Hero = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{HeroData.Title.title}</h1>
        <p className={styles.description}>
          {HeroData.Desc.description}
        </p>
        <div className={styles.buttoncontainer}>
        <a className={styles.contactBtn} href={HeroData.MailTo.mailto}>{HeroData.Buttons.Contact_Me}</a>
        <Button onClick={() => setIsOpen(true)} className={styles.contactBtn}>
          {HeroData.Buttons.View_Resume}
        </Button>
        </div>
      </div>
      <img
        src={getImageUrl(HeroData.path.imgUrl)}
        alt="Hero Image of Me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
      <Dialog isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className={modalStyles.resumeModal}>
          <h2>{HeroData.Buttons.My_Resume}</h2>
          <div className={modalStyles.pdfViewer}>
            <iframe
              src={HeroData.path.resumeUrl}
              title={HeroData.Buttons.Resume_Preview}
            ></iframe>
          </div>
          <a
            href={HeroData.path.resumeUrl}
            download={HeroData.Buttons.Akash_Resume}
            className={modalStyles.downloadBtn}
          >
            {HeroData.Buttons.Download_Resume}
          </a>
        </div>
      </Dialog>
    </section>
  );
};

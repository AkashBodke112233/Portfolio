import React, { useState } from "react";
import styles from "./Navbar.module.css";
import { getImageUrl } from "../../utils";
import {NavData} from "../../Data/StaticData"

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
    <a className={styles.title} href={NavData.href.home}>
      {NavData.Title.title}
    </a>
    <div className={styles.menu}>
      <img
        className={styles.menuBtn}
        src={
          menuOpen
              ? getImageUrl(NavData.path.closeIcon)
              : getImageUrl(NavData.path.menuIcon)
            }
            alt="menu-button"
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <ul
            className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
            onClick={() => setMenuOpen(false)}
          >
            <li>
              <a href={NavData.href.about}>{NavData.Pages.About}</a>
            </li>
            <li>
              <a href={NavData.href.exp}>{NavData.Pages.Experience}</a>
            </li>
            <li>
              <a href={NavData.href.project}>{NavData.Pages.Projects}</a>
            </li>
            <li>
              <a href={NavData.href.contact}>{NavData.Pages.Contact}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
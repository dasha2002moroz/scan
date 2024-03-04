import React from "react";
import {NavLink} from "react-router-dom";

import styles from "./Menu.module.css";



const Menu = () => {
    return (
        <div className={styles.menu}>
          <nav className={styles.menu_container}>
            <NavLink to="/" className={styles.link1}> Главная </NavLink>
            <NavLink className={styles.link2}>Тарифы</NavLink>
            <NavLink className={styles.link3}>FAQ</NavLink>
          </nav>
          </div>
    )
}

export { Menu }

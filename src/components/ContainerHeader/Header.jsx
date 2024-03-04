import React from "react";
import styles from "./Header.module.css"

import { Logo } from "@components/Logo";
import InfoContainer  from "@components/Info";
import logoImage from "@assets/images/Logo-image.svg";
import { Menu } from "@components/Menu";
import { Login } from "@components/Login";
import AccountContainer from "@components/Account";
import { MobileMenu } from "@components/MobileMenu";

const Header = (props) => {


    return (
        <header className={styles.header}>
          <div className={styles.header_container}>
          <div className={styles.header_container_logo}>
            <Logo src={logoImage} alt="logoImage"/>
          </div>
            <Menu />

            {props.isAuth ? <InfoContainer /> : null }

            <MobileMenu isAuth={props.isAuth} logout={props.logout}/> 

            {props.isAuth ? <AccountContainer /> : <Login />}

          </div>
        </header>
    )
}

export default Header;
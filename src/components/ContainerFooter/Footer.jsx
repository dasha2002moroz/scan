import React from "react";

import styles from "./Footer.module.css";

import { Logo } from "@components/Logo";
import { Address } from "@components/Address";
import logoScan from "@assets/images/logo-scan.svg";

function Footer() {
  return (

    <footer className={styles.footer}>
      <div className={styles.footer_container}>
      <Logo src={logoScan} alt="logoScan" />
      <Address />
      </div>
    </footer>

  );
}

export { Footer };

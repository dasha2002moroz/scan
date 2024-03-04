import React from "react";
import styles from "./Logo.module.css";


function Logo(props) {
  return (

    <div className={styles.imglogo}>
      <div className={styles.imglogo_container}>
        <img  className={styles.imglogo_container_img} src={props.src} alt={props.alt} ></img>
      </div>
    </div>

  );
}

export { Logo };

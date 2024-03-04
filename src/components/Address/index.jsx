import React from "react";
import styles from "./Address.module.css";


function Address() {
  return (

    <address className={styles.address}>
      <div className={styles.address_container}>
        <div className={styles.address_container_text}>г. Москва, Цветной б-р, 40</div>
          <div className={styles.address_container_text}>+7 495 771 21 11 </div>
          <div className={styles.address_container_text}>info@skan.ru</div>
          <p></p>
        <div className={styles.address_container_text_copyright}>Copyright. 2024</div>
        </div>
    </address>

  );
}

export { Address };

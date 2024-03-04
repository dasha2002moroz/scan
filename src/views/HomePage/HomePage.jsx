
import styles from "./HomePage.module.css"
import React from "react";

import { Service } from "@components/ContainerMain/Service";
import { Carusel } from "@components/ContainerMain/Carusel";
import { MainImage } from "@components/ContainerMain/MainImage";
import { MainImageMobile } from "@components/ContainerMain/MainImageMobile";
import { SectionTariff } from "@components/ContainerMain/SectionTariff";


const Main = (props) => {
    
    return (
        <main className={styles.main}>
          <div className={styles.main_container}>
            <Service isAuth={props.isAuth} />
            <Carusel />
            <MainImage />
            <MainImageMobile />
            <SectionTariff isAuth={props.isAuth} />
          </div>
           
        </main>
    )
}

export  default Main; 
import styles from './Service.module.css'
import React from 'react';
import {useNavigate} from "react-router-dom";
import img from "@assets/images/Main-image.svg"

const Service = (props) => {
    const navigate = useNavigate()
   

    const click = () => {
        navigate("/search")
    }

    return (
        <div className={styles.service}>
        <div className={styles.service_container}>
            <div className={styles.service_container_element1}>
                <div className={styles.service_container_element1_text}>СЕРВИС ПО ПОИСКУ ПУБЛИКАЦИЙ О КОМПАНИИ ПО ЕГО ИНН</div>
            </div>
            <div className={styles.service_container_element3}>
            <div className={styles.service_container_element3_text}>
                Комплексный анализ публикаций, получение данных в формате PDF на электронную почту.
            </div>
            </div>  
            <div className={styles.service_container_element4}>   
            {props.isAuth ? <button onClick={click} className={styles.service_container_element4_button}><h1>Запросить данные</h1></button> : ""} 
            </div>
            <div className={styles.service_container_element2}>
            <img className={styles.service_container_element2_image} src={img} alt="" />
            </div>
            </div>
            </div>
    )
}

export { Service }
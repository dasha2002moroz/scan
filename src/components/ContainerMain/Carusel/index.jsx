import css from './Carusel.module.css'
import React from 'react';
import {useRef, useState} from "react";

import icon_time from "@assets/images/icon-time.png"
import icon_magnifier from "@assets/images/icon-magnifier.png"
import icon_shield from "@assets/images/icon-shield.png"
import arrow from "@assets/images/arrow.png"

const Carusel = () => {
    const content = useRef(null)

    const [items, setItems] = useState([
        {
            icon: icon_time,
            text: 'Высокая и оперативная скорость обработки заявки',
        },
        {
            icon: icon_magnifier,
            text: 'Огромная комплексная база данных, обеспечивающая объективный ответ на запрос',
        },
        {
            icon: icon_shield,
            text: 'Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству',
        },
    ])

    const left = () => {
        const newItems = [...items]
        newItems.push(newItems.shift())
        setItems(newItems)
    }

    const right = () => {
        const newItems = [...items]
        newItems.unshift(newItems.pop())
        setItems(newItems)
    }

    return (
        <section className={css.carusel}>
            <h2 className={css.text}>
                Почему именно мы
            </h2>
            <div className={css.carousel}>
                <img onClick={left} className={css.imgLeft} src={arrow} alt=""/>
                <div ref={content} className={css.content}>
                    {
                        items.map((item, key) => {
                            return (
                                <div key={key} className={css.item}>
                                    <img className={css.itemImg} src={item.icon} alt=""/>
                                    <p className={css.itemText}>
                                        {item.text}
                                    </p>
                                </div>
                            )
                        })
                    }
                </div>
                <img onClick={right} className={css.imgRight} src={arrow} alt=""/>
            </div>
        </section>
    )

}

export { Carusel }
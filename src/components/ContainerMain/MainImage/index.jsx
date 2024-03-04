import React from 'react';
import css from './MainImage.module.css'

import img1 from "@assets/images/main-section-3.svg"


const MainImage = () => {

    return (
        <div className={css.section}>
          <div className={css.section_container}>
                <img className={css.section_img1} src={img1} alt="" />
          </div> 
        </div>
    )

}

export { MainImage }
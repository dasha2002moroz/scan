import React from 'react';
import css from './MainImageMobile.module.css'

import img2 from "@assets/images/Advert-image-secondary.svg"


const MainImageMobile = () => {

    return (
        <div className={css.section}>
          <div className={css.section_container}>
                <img className={css.section_img2} src={img2} alt="" />
          </div>  
        </div>
    )

}

export { MainImageMobile }
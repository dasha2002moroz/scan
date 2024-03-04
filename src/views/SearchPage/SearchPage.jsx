import React, { useContext, useEffect, useState } from "react";
import styles from "./SearchPage.module.css";
import DocumentImage from "@assets/images/SearchPageImg3.svg";
import FolderImage from "@assets/images/SearchPageImg2.svg";
import GroupImage from "@assets/images/SearchPageImg1.svg";
import { useNavigate } from "react-router-dom";
import {Field} from "redux-form";
import { Input } from "../../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";



const SearchPage = (props) => {
 
  return (
    
    <main className={styles.search}>
      <div className={styles.search_container}>
        <div className={styles.search_title}>
      <h1 >
      <div> НАЙДИТЕ НЕОБХОДИМЫЕ </div>
      <div> ДАННЫЕ В ПАРУ КЛИКОВ.</div>
      </h1>
      </div>
      <div className={styles.search_text}>
      <p >
        Задайте параметры поиска. Чем больше заполните, тем точнее поиск
      </p>
      </div>

        <div className={styles.search_form}> 
          <form onSubmit={props.handleSubmit} className={styles.form}>          
          
            <div className={styles.search_form_container}> 
              <div className={styles.search_form_container_element1}>
               <div className={styles.form_label}>
                      <label htmlFor="inn" className={styles.label}>
                      ИНН Компании <span className={styles.star}>*</span>
                      </label>
               </div>
                      <Field placeholder={"10 цифр"} name={"inn"}
                        validate={[required]}
                        component={Input}
                        className={styles.left_input}/>
                <div className={styles.form_label}>
                      <label htmlFor="tonality" className={styles.label}>
                      Тональность
                      </label>
                </div>
                     <div>
                      <Field name="tonality" component="select" className={styles.select}>
                      <option value="any">Любая</option>
                      <option value="positive">Позитивная</option>
                      <option value="negative">Негативная</option>
                      </Field>
                       </div>
                <div className={styles.form_label}>
                      <label htmlFor="documentCount" className={styles.left_label}>
                      Количество документов в выдаче <span className={styles.star}>*</span>
                      </label>
                </div>
                      <Field placeholder={"1 до 1000"} name={"documentCount"}
                      validate={[required]}
                      component={Input}
                      className={styles.left_input}/>

               
                      <h1>Диапозон поиска <span className={styles.star}>*</span></h1>

                    <div className={styles.data}>

                    <div className={styles.date_separator}>
                    <label className={styles.left_label}></label>
                    </div>  
                    <Field placeholder={"Дата начала"} name={"startDate"}
                    validate={[required]}
                    component={Input} 
                    type="date"
                    className={styles.left_input}/>

                  
                    <div className={styles.date_separator}>
                    <label className={styles.left_label}></label>
                    </div>
                    <Field placeholder={"Дата конца"} name={"endDate"}
                    validate={[required]}
                    component={Input} 
                    type="date"
                    className={styles.left_input}/>
                  
                    </div>
              </div>
         
           


     
          <div className={styles.search_form_container_element2}>
               
                  <div className={styles.checkbox_container}>

                    <Field 
                    name={"completeness"}
                    id="completeness" 
                    component={Input} 
                    type="checkbox"
                    className={styles.checkbox}/>

                    <label htmlFor="completeness" className={styles.label_checkbox}>
                    Признак максимальной полноты
                    </label>

                  </div>
                  <div className={styles.checkbox_container}>
                    <Field 
                    name={"businessContext"}
                    id="businessContext" 
                    component={Input} 
                    type="checkbox"
                    className={styles.checkbox}/>

                    <label htmlFor="businessContext" className={styles.label_checkbox}>
                    Упоминания в бизнес-контексте
                    </label>
                  </div>

                  <div className={styles.checkbox_container}>
                      <Field 
                      name={"mainRole"}
                      id="mainRole" 
                      component={Input} 
                      type="checkbox"
                      className={styles.checkbox}/>
                    
                      <label htmlFor="mainRole" className={styles.label_checkbox}>
                        Главная роль в публикации
                      </label>
                  </div>

                  <div className={styles.checkbox_container}>
                      <Field 
                      name={"riskFactors"}
                      id="riskFactors" 
                      component={Input} 
                      type="checkbox"
                      className={styles.checkbox}/>
                  
                      <label htmlFor="riskFactors" className={styles.label_checkbox}>
                        В Публикации только c риск-факторами
                      </label>
                  </div>

                  <div className={styles.checkbox_container}>
                      <Field 
                      name={"technicalNews"}
                      id="technicalNews" 
                      component={Input} 
                      type="checkbox"
                      className={styles.checkbox}/>
                        
                      <label htmlFor="technicalNews" className={styles.label_checkbox}>
                        Включать технические новости рынков
                      </label>
                  </div>

                  <div className={styles.checkbox_container}>
                      <Field 
                      name={"announcements"}
                      id="announcements" 
                      component={Input} 
                      type="checkbox" 
                      className={styles.checkbox}/>
                    
                      <label htmlFor="announcements" className={styles.label_checkbox}>
                        Включать анонсы и календари
                      </label>
                  </div>

                  <div className={styles.checkbox_container}>
                      <Field 
                      name={"newsDigests"}
                      id="newsDigests" 
                      component={Input} 
                      type="checkbox"
                      className={styles.checkbox}/>

                      <label htmlFor="newsDigests" className={styles.label_checkbox}>
                        Включать сводки новостей
                      </label>
                  </div>
            </div>
                


            <div className={styles.search_form_container_element3}>
                <button
                  className={styles.submitButton}>
                  Поиск
                </button>
                <p>* Обязательные к заполнению поля</p>   
            </div>
         </div>
  
        </form>

     </div>
           <div className={styles.search_image}>

            <div className={styles.imageContainer}>

                <img
                  src={DocumentImage}
                  alt="Search Page"
                  className={styles.imageDoc}
                />

                <img src={FolderImage} alt="Search Page" className={styles.imageFol} />
                <img src={GroupImage} alt="Search Page" className={styles.imageGro} />
            </div>
          </div>
        </div>
</main>
              
            );
          };   
           
export default SearchPage;
import React from "react";
import styles from './ResultPage.module.css'
import { ResultItem } from '@components/ResultItem'
import { ResultSlider } from '@components/ResultSlider'
import ResultPageImg from '@assets/images/ResultPageImg.svg'
import { mapArrFunc } from '../../utils/mapArrFunc'
import { useContext, useEffect, useState } from 'react'

import { GeneralResultLoader } from '@components/GeneralResultLoader'

const ResultPage = (props) => {
       
        const [countDocs, setCountDocs] = useState(2)
        const [detailsData, setDetailsData] = useState(props.detail)
        const token = props.token  
        const resultGeneralData = props.generalData  
        const resultData = props.data
         
      
        useEffect(() => {
          if (resultData && (+resultData.items.length) > 0) {
            const arrForRequest = []
            const oldDetailsData = []
      
            if ((+resultData.items.length) < countDocs) {
              for (let i = 0; i < (+resultData.items.length); i++) {
                arrForRequest.push(resultData.items[i].encodedId)
              }
            } else {
              for (let i = 0; i < countDocs; i++) {
                arrForRequest.push(resultData.items[i].encodedId)                
              }
            }
            const req = async () => {
              console.log(token, arrForRequest)
              props.getDetail(token, arrForRequest) 
              setDetailsData(props.detail)
              oldDetailsData.push(detailsData)
              console.log(oldDetailsData)
            }
            req()
          }
        }, [resultData, countDocs])
      
        const moreBtnHandler = () => {
          const countDocsIterator = 2 // число на которое увеличивается количество записей
          if ((countDocs + countDocsIterator) < (+resultData.items.length)) {
            setCountDocs(countDocs + countDocsIterator)
            console.log(countDocs,  countDocsIterator)
          }
      
          const docsRest = (+resultData.items.length) - countDocs
      
          if (docsRest < countDocsIterator) {
            setCountDocs(countDocs + docsRest)
          }
        }
      
        return (
          <main className={styles.resultPage}>
             <div className={styles.soonResult}>
               <div className={styles.titleBlock}>
                 <h1 className={styles.title}>Ищем. Скоро будут результаты</h1>
                 <p className={styles.text}>Поиск может занять некоторое время, просим сохранять терпение.</p>
               </div>
               <img className={styles.resultImg} src={ResultPageImg} alt="soon result" />
             </div>
             <div className={styles.summaryBlock}>
               <h2 className={styles.subtitle}>Общая сводка</h2>
               <p className={styles.dataSum}>Найдено
                 {!resultGeneralData
                   ? ` 0`
                   : ` ${mapArrFunc(resultGeneralData.data).length}`} вариантов
               </p>
               {<ResultSlider isLoading={!resultGeneralData} data={!resultGeneralData
                 ? []
                 : resultGeneralData.data} />}
             </div>
          
             <div className={styles.resultBlock}>
               <h2 className={styles.subtitle}>Список документов</h2>
               <ul className={styles.resultList}>
                 {!resultData || +resultData.items.length === 0
                   ? <p></p>
                   : !detailsData
                     ? <GeneralResultLoader />
                     : detailsData.map(item => <ResultItem key={item.ok.id} data={item.ok} />)}
               </ul>
               <button onClick={moreBtnHandler} className={resultData && ((countDocs) >= +resultData.items.length) ? styles.seeMoreBtnHidden : styles.seeMoreBtn}>Показать больше</button>
            </div>
          </main>
        )
      }
      export { ResultPage }
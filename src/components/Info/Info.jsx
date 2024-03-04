import React from "react";
import css from './Info.module.css'



const Info = (props) => {


    return (
        <div className={css.info}>
        <div className={css.bg}></div>
        <table className={css.desktop}>
            <tbody>
            <tr>
                <td className={css.used}>
                    Использовано компаний
                </td>
                <td className={css.usedCount}>
                    {props.usedCompanyCount}
                </td>
            </tr>
            <tr>
                <td className={css.limit}>
                    Лимит по компаниям
                </td>
                <td className={css.limitCount}>
                   { props.companyLimit } 
                </td>

            </tr>
            </tbody>
        </table>
    </div>  
 
    )
    }

export { Info }
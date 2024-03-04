import styles from "./Account.module.css"
import png from "@assets/images/avatar.png";
import React from "react";
import {NavLink} from "react-router-dom";

const Account = (props) => {
    console.log(props)

    return (
        <div className={styles.account}>
            <div className={styles.account_container}>
            <div className={styles.left}>
                <div className={styles.name}>
                   { props.name}
                </div>
                <div className={styles.exit}>
                    <NavLink className={styles.logout} onClick={props.logout} to="/">
                        Выйти {props.logout}
                    </NavLink>
                </div>
            </div>
            <div className={styles.right}>
                <img className={styles.avatar} src={png} alt="" />
            </div>
        </div>
    </div>
    )

}

export { Account }
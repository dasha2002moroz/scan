import React from 'react';
import styles from "./Loader.module.css";
import preloader from "@assets/images/preloader.svg";

let Loader = (props) => {
    return (
          <img src={preloader} className={styles.loader}/>
    )
}

export { Loader };


// import React from "react";
// import styles from "./Loader.module.css";
// function Loader() {
//   return (
//     <>
//       <div className={styles.loader}>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>
//     </>
//   );
// }

// export { Loader };
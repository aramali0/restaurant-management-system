import React from 'react'
import styles from "./DashCard.module.css"
function DashCard({list,title}) {
  return (
    <div className={styles.card}>
     <div className={styles.title}>
      <h3>{title}</h3>
     </div>
     {
      list.map((item, key) => (
        <div key={key} className={styles.ticket}>
         <span className={styles.date}>{item.time}</span>
         <span className={styles.value} >{item.value}</span>
        </div>
      ))
     }
    </div>
  )
}

export default DashCard
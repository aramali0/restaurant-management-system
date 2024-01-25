import React, { useState } from 'react'
import styles from "./SideBare.module.css"
import { NavLink,Link} from "react-router-dom"
import { sideLinks } from '../../../constants'

function SideBare() {
  return (
    <div className={styles.sideBares}>
      <div className={styles.heading}> E- site</div>
      <ul className={styles.list}>
       {
        sideLinks.map((link,index) =>(
          <li key={index} className={styles.li}>
           <NavLink className={styles.navLink} key={index} to={link.id} >{link.title}</NavLink>
          </li>
        ))
       }
      </ul>
    </div>
  )
}

export default SideBare
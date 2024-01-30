import React, { useEffect, useState } from 'react'
import styles from "./SideBare.module.css"
import { NavLink,Link, useNavigate} from "react-router-dom"
import {sideLinks } from '../../../constants'
import axios from 'axios'
import Restaurant from '../Restaurant/Restaurant'

function SideBare({ restaurant }) {

  const navigate = useNavigate();

  const handleClick = () =>{
    console.log("clicked");
  }

  return (
    <div className={styles.sideBares}>
      <div  onClick={() => navigate('/owner/restaurant')} className={styles.heading}>
          <Restaurant restaurant={restaurant}/>
      </div>
      <ul className={styles.list}>
       {
        sideLinks.map((link,index) =>(
          <li key={index} className={styles.li}>
           <NavLink className={styles.navLink} key={index} to={link.id} >{link.title}</NavLink>
          </li>
        ))
       }
      </ul>

      <div  className={styles.footer}>
          <button onClick={handleClick}>Logout</button>
      </div>
    </div>
  )
}

export default SideBare
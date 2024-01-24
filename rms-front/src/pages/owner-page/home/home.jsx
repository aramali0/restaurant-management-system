import React from 'react'
import styles from "./home.module.css"
import { Outlet } from "react-router-dom"
import SideBare from '../../../components/owner-page/sideBare/SideBare';

function Home() {
  return (
   <>
   <div className={styles.home}>
    <SideBare/>
    <Outlet/>
   </div>
   </>
  )
}

export default Home;
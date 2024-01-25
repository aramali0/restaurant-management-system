import React, { useState } from 'react'
import  styles from './dashBoard.module.css'
import DashCard from '../../../components/owner-page/DashCard/DashCard'
function DashBoard() {
  const [orders,setOrders] = useState([
    {
      time:"Today",
      value:10
    },
    {
      time:"YesterDay",
      value:10
    },
    {
      time:"This Week",
      value:10
    },
    {
      time:"This Month",
      value:10
    },
  ])
  const [earnings,setEarnings] = useState([
    {
      time:"Today",
      value:"40 mad"
    },
    {
      time:"YesterDay",
      value:"30 mad"
    },
    {
      time:"This Week",
      value:"40 mad"
    },
    {
      time:"This Month",
      value:"50 mad"
    },
  ])
  return (

    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Welcome back ,</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wrapperHeader}>
          <h2>Overview dashboard</h2>
        </div>
        <div className={styles.wrapperBody}>
            <DashCard list={orders} title={"Orders"}/>
            <DashCard list={earnings} title={"Earnings"} />
        </div>
      </div>
    </div>
   
  )
}

export default DashBoard

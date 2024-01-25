import React, { useState } from 'react'
import styles from './commands.module.css'
import Table from '../../../components/owner-page/Table/Table'
function Commands() {
  const [page,setPage] = useState(0);
  const [meal,setMeal] = useState("")
  const [tableData, setTableData] = useState([
    {
    id:1,
    date:new Date(),
    client:"simo"
    },
    {
    id:2,
    date:new Date(),
    client:"simo"
    },
    {
    id:3,
    date:new Date(),
    client:"simo"
    },
])
  const [headerData, setheaderDate] = useState(["Id","Date","Client"])
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Commands</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wrapperHeader}>
          <input onChange={(e) => setMeal(e.target.value)} className={styles.input} id='search' type="text" placeholder='Search for Meals' />
          <button onClick={() => console.log(meal)} className={styles.button}>Filter</button>
        </div>
        <div className={styles.wrapperBody}>
          <div className={styles.table}>
            <Table tableData={tableData} headerData={headerData}/>
          </div>
          <div className={styles.buttons}>
            
              
              <button disabled={page === 0} onClick={() => setPage(page - 1)} className={styles.button}>{"<"}</button>
          
              <button onClick={() => setPage(page + 1)}  className={styles.button}>{">"}</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Commands
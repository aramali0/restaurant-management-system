import React, { useEffect, useState } from 'react'
import styles from './clients.module.css'
import Table1 from '../../../components/owner-page/Table/Table1'
import { BASE_URL } from '../../../constants';
import axios from 'axios';
function Clients() {
  const [client,setClient] = useState("");
  const [nbrPage, setNbrPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [tableData, setTableData] = useState([])
  const headerData = ["Id","Nom","Email","Num","Adress"];

  const getSearch = () => {
    axios.get(`${BASE_URL}clients/search/findClientsByNomPersonne?nomPersonne=${client}&page=${nbrPage}&size=4`)
      .then(response => {
        setTotalPage(response.data.page.totalPages);
        setTableData(response.data._embedded.clients);
      });
      setClient("");
  }

  useEffect(() => {
    axios.get(`${BASE_URL}clients?page=${nbrPage}&size=4`)
      .then(response => {
        setTotalPage(response.data.page.totalPages);
        setTableData(response.data._embedded.clients);
      });
  }, [nbrPage]);


  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Clients</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wrapperHeader}>
          <input onChange={(e) => setClient(e.target.value)} className={styles.input} id='search' type="text" placeholder='Search for clients' />
          <button onClick={() => getSearch() } className={styles.button}>Search</button>
        </div>
        <div className={styles.wrapperBody}>
          <div className={styles.table}>
            <Table1 tableData={tableData} headerData={headerData}/>
          </div>
          <div className={styles.buttons}>    
            <button hidden={nbrPage === 0} onClick={() => setNbrPage(nbrPage - 1)} className={styles.button}>{"<"}</button>
            <button hidden={nbrPage === totalPage - 1} onClick={() => setNbrPage(nbrPage + 1)} className={styles.button}>{">"}</button>
           </div>
        </div>
      </div>
    </div>
  )
}

export default Clients
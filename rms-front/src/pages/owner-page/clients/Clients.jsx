import React, { useEffect, useState } from 'react'
import styles from './clients.module.css'
import Table1 from '../../../components/owner-page/Table/Table1'
import { BASE_URL } from '../../../constants';
import axios from 'axios';
import ClientCard from '../../../components/owner-page/clientCard/ClientCard';
function Clients() {
  const [client,setClient] = useState("");
  const [nbrPage, setNbrPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [tableData, setTableData] = useState([])

  const getSearch = () => {
    axios.get(`${BASE_URL}clients/search/findClientsByNomPersonne?nomPersonne=${client}&page=${nbrPage}&size=4`, {
      headers: {
        'Authorization': `Bearer ${JWT}`
      }
    })
      .then(response => {
        setTotalPage(response.data.page.totalPages);
        setTableData(response.data._embedded.clients);
        console.log()
      });
      setClient("response.data._embedded.clients");
  }

  useEffect(() => {
    axios.get(`${BASE_URL}clients?page=${nbrPage}&size=4`)
      .then(response => {
        setTotalPage(response.data.page.totalPages);
        setTableData(response.data._embedded.clients);
        console.log(response.data._embedded.clients);

      });
  }, [nbrPage]);


  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2>Clients:</h2>
        <div className={styles.wrapperHeader}>
          <input onChange={(e) => setClient(e.target.value)} className={styles.input} id='search' type="text" placeholder='Search for clients' />
          <button onClick={() => getSearch() } className={styles.button}>Search</button>
        </div>
      </div>
      <div className={styles.wrapper}>
        {
          tableData.map((data,index)=>(
            <ClientCard key={index} data={data}/>
          ))

        }
      </div>
          <div className={styles.buttons}>    
            <button hidden={nbrPage === 0} onClick={() => setNbrPage(nbrPage - 1)} className={styles.button}>{"<"}</button>
            <button hidden={nbrPage === totalPage - 1} onClick={() => setNbrPage(nbrPage + 1)} className={styles.button}>{">"}</button>
         </div>
    </div>
  )
}

export default Clients
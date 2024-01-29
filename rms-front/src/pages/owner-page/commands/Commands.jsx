import React, { useEffect, useState } from 'react';
import styles from './commands.module.css';
import axios from 'axios';
import Model from '../../../components/owner-page/model/Model';
import Table from '../../../components/owner-page/Table/Table';
import { BASE_URL } from '../../../constants';
import Articles from '../../../components/owner-page/articles/Articles';

function Commands() {
  const [shouldShow, setShouldShow] = useState(false);
  const [meal, setMeal] = useState("");
  const [nbrPage, setNbrPage] = useState(0);
  const [totalPage, setTotalPage] = useState(1);
  const [tableData, setTableData] = useState([]);
  const [mealsData, setmealsData] = useState([]);
  const [client, setClient] = useState({});
  const headerData = ["Id", "Date", "Status","Prix"];

  useEffect(() => {
    axios.get(`${BASE_URL}commandes/search/findCommandesByRestaurantId?restaurantId=2&page=${nbrPage}&size=4`)
      .then(response => {
        setTotalPage(response.data.page.totalPages);
        setTableData(response.data._embedded.commandes);
      });
  }, [nbrPage]);

  const Show = (data) => {
    setShouldShow(data);
  };

  const onRequestClose = () => {
    setShouldShow(false);
  };

  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h1>Commands</h1>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.wrapperHeader}>
          <input
            onChange={(e) => setMeal(e.target.value)}
            className={styles.input}
            id='search'
            type="text"
            placeholder='Search for Meals'
          />
          <button onClick={() => console.log(meal)} className={styles.button}>Filter</button>
        </div>
        <div className={styles.wrapperBody}>
          <div className={styles.table}>
            <Table setClient={setClient} setmealsData={setmealsData} tableData={tableData} headerData={headerData} ShouldShowModal={Show} />
          </div>
          <div className={styles.buttons}>
            <button hidden={nbrPage === 0} onClick={() => setNbrPage(nbrPage - 1)} className={styles.button}>{"<"}</button>
            <button hidden={nbrPage === totalPage - 1} onClick={() => setNbrPage(nbrPage + 1)} className={styles.button}>{">"}</button>
          </div>
        </div>
      </div>
      <Model shouldShow={shouldShow} onRequestClose={onRequestClose}>
        <Articles client={client} mealsData={mealsData}  />
      </Model>
    </div>
  );
}

export default Commands;
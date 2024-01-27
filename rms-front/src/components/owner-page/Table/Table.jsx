import React, { useState } from 'react';
import styles from './Table.module.css';
import Model from '../model/Model';
import axios from 'axios';

const TableRow = ({ rowData, onClick }) => (
  <div onClick={onClick} className={styles.row}>
    {rowData.map((data, index) => (
      <div key={index} className={styles.cell}>
        {data}
      </div>
    ))}
  </div>
);

const Table = ({ tableData, headerData, ShouldShowModal, setmealsData, setClient }) => {
  const getMeals = (link1,link2) => {
    axios.get(link1)
      .then(response => {
        setmealsData(response.data._embedded.articles);
      });
    axios.get(link2)
      .then(response => {
        setClient(response.data);
      });
  };

  return (
    <div className={styles.main}>
      <div className={styles.row}>
        {headerData.map((row, index) => (
          <div key={index} className={styles.cell}>
            {row}
          </div>
        ))}
      </div>
      {tableData.map((row, index) => (
        <TableRow
          key={index}
          rowData={[
            index + 1,
            new Date(row.date).toLocaleDateString('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric',
            }),
            row.status
          ]}
          onClick={() => {
            ShouldShowModal(true)
            getMeals(row._links.articles.href,row._links.client.href);
          }}
        />
      ))}
    </div>
  );
};

export default Table;

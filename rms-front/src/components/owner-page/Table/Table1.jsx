import React, { useState } from 'react';
import styles from './Table.module.css';
import Model from '../model/Model';
import axios from 'axios';

const TableRow = ({ rowData }) => (
  <div className={styles.row}>
    {rowData.map((data, index) => (
      <div key={index} className={styles.cell}>
        {data}
      </div>
    ))}
  </div>
);

const Table = ({ tableData, headerData}) => {
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
            row.nomPersonne,
            row.email,
            row.numTelel,
            row.address,
            
          ]}
        />
      ))}
    </div>
  );
};

export default Table;

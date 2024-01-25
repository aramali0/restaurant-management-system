
import React from 'react';
import styles from './Table.module.css';

const TableRow = ({ rowData }) => (
  <div className={styles.row}>
    {rowData.map((data, index) => (
      <div key={index} className={styles.cell}>
        {data}
      </div>
    ))}
  </div>
);

const Table = ({ tableData, headerData }) => {
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
        <TableRow key={index} rowData={[row.id, 
         new Date(row.date).toLocaleDateString('en-US', {
          day: 'numeric',
          month: 'short',
          year: 'numeric',
        }),
         row.client]} />
      ))}
    </div>
  );
};

export default Table;

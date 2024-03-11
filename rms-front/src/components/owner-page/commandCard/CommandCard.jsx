import React from 'react';
import styles from './CommandCard.module.css';

const Card = ({ command, ShowModal }) => {
  return (
    <div className={styles.card} onClick={() => ShowModal(command)}>
      <div>ID: {command.id}</div>
      <div>Date: {command.date}</div>
      <div>Status: {command.status}</div>
      <div>Prix: {command.prix}</div>
    </div>
  );
};

export default Card;

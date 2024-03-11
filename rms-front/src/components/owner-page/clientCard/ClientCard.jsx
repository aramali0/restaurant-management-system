import React from 'react';
import styles from  './ClientCard.module.css'; // Importing CSS file
import profile from "../../../assets/owner-assets/profile.jpg"
const ClientCard = ({ data}) => {
  return (
    <div className={styles.clientCard}>
      <div className={styles.clientInfo}>
        <div className={styles.clientDetail}>
          <span className={styles.label}>Name:</span>
          <span>{data.nomPersonne}</span>
        </div>
        <div className={styles.clientDetail}>
          <span className={styles.label}>Email:</span>
          <span>{data.email}</span>
        </div>
        <div className={styles.clientDetail}>
          <span className={styles.label}>Phone:</span>
          <span>{data.numTelel}</span>
        </div>
        <div className={styles.clientDetail}>
          <span className={styles.label}>Address:</span>
          <span>{data.address}</span>
        </div>
      </div>
      <div className={styles.clientImage}>
        <img src={profile} alt="Profile" />
      </div>
    </div>
  );
};

export default ClientCard;

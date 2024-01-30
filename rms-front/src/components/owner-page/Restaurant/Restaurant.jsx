import React from 'react';
import imageLink from '../../../assets/client-assets/restautant-images/rest-brand.jpg';
import styles from './Restaurant.module.css';

function Restaurant({ restaurant }) {
  return (
    <>
      <div className={styles.imgContainer}>
        <img className={styles.profileImage} width="80" src={imageLink} alt="Logo" />
      </div>
      <div className={styles.name}>{restaurant ? <p>{restaurant.nomRestaurant}</p> : <p>Loading...</p>}</div>
    </>
  );
}

export default Restaurant;

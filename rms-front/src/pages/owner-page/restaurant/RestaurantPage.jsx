import React from 'react'
import FormRestaurant from '../../../components/owner-page/form/FormRestaurant'
import styles from './RestaurantPage.module.css'
function RestaurantPage({ restaurant }) {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <FormRestaurant restaurant={restaurant} />
      </div>
    </div>
  )
}

export default RestaurantPage
import React, { useEffect } from 'react';
import MealCard from '../../owner-page/meal-card/meal.card';
import meal1 from "../../../assets/client-assets/restautant-images/meal1.jpg";
import styles from "./articles.module.css"

function Articles({ mealsData, client }) {
  return (
    <div className={styles.container}>
      <div className={styles.name}> Resseved By <span>{client.nomPersonne}</span></div>
      <div className={styles.body}>
        {mealsData.length > 0 ? (
          mealsData.map((meal, index) => (
            <MealCard key={index} meal={meal} mealImage={meal1} />
          ))
        ) : (
          <p>No meals available</p>
        )}
      </div>
    </div>
  );
}

export default Articles;

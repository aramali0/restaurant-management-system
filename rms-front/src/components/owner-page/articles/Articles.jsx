import React, { useEffect } from 'react';
import MealCard from '../../Client Componenets/meal-card/meal.card';
import meal1 from "../../../assets/client-assets/restautant-images/meal1.jpg";
import styles from "./articles.module.css"

function Articles({ mealsData,client }) {
 useEffect(() =>{
  console.log(client);
  console.log("hey");
 },[])
  return (
    <div className={styles.container}>
     <div className={styles.name}> Resseved By <span>{client.nomPersonne}</span></div>
     <div className={styles.body}>
      {
        mealsData.map((meal, index) => (
          <MealCard key={index} mealName={meal.name} mealPrice={meal.prix} mealRating={"2.6"} mealImage={meal1} />
        ))
      }
     </div>
    </div>
  );
}

export default Articles;
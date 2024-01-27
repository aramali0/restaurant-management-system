import { useLocation } from "react-router-dom";

function MealDetails() {
    const location = useLocation()
    const meal = location.state.meal;
    return ( <>
    <div>
        <h2>Name : {meal.name}</h2>
        <h2>prix : {meal.prix}</h2>
        <h2>desc : {meal.description}</h2>
        <h2>categorie : {meal.categorie}</h2>
    </div>
    </> );
}

export default MealDetails;
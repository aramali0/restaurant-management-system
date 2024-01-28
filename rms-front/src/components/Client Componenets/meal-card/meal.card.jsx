import { FaStar } from "react-icons/fa6";
import  './meal.card.css'
import { useNavigate } from "react-router-dom";

function MealCard({meal, mealImage, key}) {
    const navigate = useNavigate()
    return (<div onClick={()=>{navigate("/detailspage", {state : {meal : meal, image : [mealImage]}})}} className="meal-card" key={key}>
        <div className="meal-image"><img className="meal-img-src" src={mealImage} /></div>
        <div className="meal-info">
            <div className="meal-name">{meal.name}</div>
            <div className="meal-rating-price">
                <div className="meal-price">{meal.prix + " $"}</div>
                <div className="meal-rating">
                    <p className="rating">{meal.rating}</p>
                    <FaStar className="start-rat-meal" />
                </div>
            </div>
        </div>
    </div>);
}

export default MealCard;
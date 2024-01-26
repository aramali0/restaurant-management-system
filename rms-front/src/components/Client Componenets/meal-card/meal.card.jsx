import { FaStar } from "react-icons/fa6";
import  './meal.card.css'

function MealCard({mealName , mealPrice, mealRating, mealImage}) {
    return ( <div className="meal-card">
        <div className="meal-image"><img className="meal-img-src" src={mealImage} /></div>
        <div className="meal-info">
            <div className="meal-name">{mealName}</div>
            <div className="meal-rating-price">
                <div className="meal-price">{mealPrice}</div>
                <div className="meal-rating">
                    <p className="rating">{mealRating}</p>
                    <FaStar className="start-rat-meal" />
                </div>
            </div>
        </div>
    </div> );
}

export default MealCard;
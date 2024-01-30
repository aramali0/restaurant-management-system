import { useLocation } from "react-router-dom";
import {FaStar} from 'react-icons/fa'
import './meal.style.css'
import { useContext, useEffect, useState } from "react";
import MealCard from "../../../../components/Client Componenets/meal-card/meal.card";
import { Context } from "../Layout/layout";

function MealDetails() {
    const [index, setIndex] = useContext(Context);
    const location = useLocation()
    const meal = location.state.meal;
    const imgSrc = location.state.image;
    const [otherMeals, setOtherMeals] = useState([])
    const getMeals = ()=>{
        fetch('http://localhost:8080/api/articles').then((resp)=>{
            resp.json().then((resp)=>{
                setOtherMeals(resp._embedded.articles)
            })
        })
    }
    useEffect(()=>{
        getMeals();
    }, [])
    
    const displayOtherMeals = ()=>{
        return otherMeals.map((meal,key)=>{

            return key<4 ? <MealCard meal={meal} mealImage={imgSrc} /> : undefined;
        })
    }
    const handleAddMealToCart = ()=>{
        setIndex(index+1);
        console.log(meal);
    }
    return ( <>
    <div className="container">
            <div className="left-column">
                <div className="meal-image"><img className="meal-image-src" src={imgSrc} alt="image" /></div>
                <div className="sub-images">
                    <img className="sub-image" src={imgSrc} />
                    <img className="sub-image inactive" src={imgSrc} />
                    <img className="sub-image inactive" src={imgSrc} />
                    <img className="sub-image inactive" src={imgSrc} />
                    <img className="sub-image inactive" src={imgSrc} />
                    <img className="sub-image inactive" src={imgSrc} />
                </div>
            </div>
            <div className="right-column">
                <div className="meal-category">{meal.categorie}</div>
                <div className="meal-title">{meal.name}</div>
                <div className="meal-description">{meal.description}</div>
                <div className="meal-rating">
                    <FaStar className="start"/>
                    <FaStar className="start"/>
                    <FaStar className="start"/>
                    <FaStar className="start"/>
                    <FaStar className="start"/>
                    <span>4.2</span>
                    <p>/5 reviews</p>
                </div>
                <div className="meal-price-details">{meal.prix} $</div>
                <div onClick={handleAddMealToCart}  className="add-meal-cart">Add to cart</div>
                <h2>Similar</h2>
                <div className="other-meals">
                    {
                        displayOtherMeals()
                    }
                </div>
            </div>
        </div>
    </>);
}

export default MealDetails;
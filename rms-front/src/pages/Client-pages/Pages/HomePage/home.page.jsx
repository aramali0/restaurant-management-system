import { useEffect, useState } from "react";
import CategoryCard from "../../../../components/Client Componenets/category-card/category.card";
import './home.style.css'
import RestaurantCard from "../../../../components/Client Componenets/restaurant-card/restaurant.card";
import MealCard from "../../../../components/Client Componenets/meal-card/meal.card";
import {CATEGORIES } from "../../../../constants";


const categoriesColors = ["#a7f6b4","#f6c67e", "#e3a1a2", "#c69ee4","#acc9e7"]

const basePathCat = "src/assets/client-assets/categories-images/"
export default function HomePage() {
    const [categorySelected, setCategorySelected] = useState(0)
    const [restaurants, setRstaurants] = useState([])
    const [restIsLoading, setRestIsLoading] = useState(true)
    const [mealsLoading, setMealsLoading] = useState(true)
    const [meals, setMeals] = useState([])

    const getRestaurants = ()=>{
        fetch('http://localhost:8080/api/restaurants').then((resp)=>{
            resp.json().then((resp)=>{
                setRstaurants(resp._embedded.restaurants)
                setRestIsLoading(false);
            })
        })
    }
    const getMeals = ()=>{
        fetch('http://localhost:8080/api/articles').then((resp)=>{
            resp.json().then((resp)=>{
                setMeals(resp._embedded.articles)
                setMealsLoading(false)
            })
        })
    }
    useEffect(()=>{
        getRestaurants();
        getMeals();
    },[])
    const handleClick = (eO)=>{
        eO.currentTarget.classList.toggle('active');
        const cards = document.querySelectorAll('.card');
        cards.forEach((e)=>{
            eO.currentTarget !== e ?  e.classList.remove('active'): undefined
        })
    }
    const handleCategoryClicked = (index)=>{
        setCategorySelected(prevState =>{
            return prevState === index ? 0 : index
        });
    }
    const displayRestaurantItem = ()=>{
        return restaurants.map((rest, key)=>{
            return <RestaurantCard 
            key = {key}
            restaurantName={rest.nomRestaurant} 
            restaurantDescription={rest.description}
            restaurantRating={3.2}
            rrstaurantImage="src/assets/client-assets/restautant-images/rest-brand.jpg"
            restaurantCoverImage="src/assets/client-assets/restautant-images/rest-cover.jpg"
            />;
        })
    }
    const displayMealsItems = ()=>{
        return meals.map((meal, key)=>{
            return <MealCard 
            mealName= {meal.name}
            mealPrice={meal.prix +'$'}
            mealRating={4.3}
            mealImage="src/assets/client-assets/restautant-images/meal1.jpg"
        />;
        })
    }
    const displaCategiries = ()=>{
        var index = -1;
        return CATEGORIES.map((cat,key)=>{
            index >= categoriesColors.length ? index = 0 : undefined;
            index = index+1
            
            return <div onClick={()=>handleCategoryClicked(key+1)}>
                    <CategoryCard  
                        onTap={handleClick} 
                        categoryName={cat}
                        color={index<categoriesColors.length && index>=0 ?  categoriesColors[index] : categoriesColors[0]} 
                        itemCount={3} 
                        imageUrl={basePathCat + "cat1.png"}  
                        />
                </div>
        })
    }
    return (<>
        <div className="categories-container">
            {
                displaCategiries()
            }
        </div>
        {
            CATEGORIES.map((cat,index)=>{
                return categorySelected!==0 && categorySelected ===index+1 ? <div>{cat}</div> : undefined
            })
    }
        <h1 className="main-title">Restaurants</h1>
        <div className="restaurant">
            <div className="title">Popular</div>
            <div className="restaurant-items">
                {
                    restIsLoading ? "Is Loading"  : displayRestaurantItem()
                }
                
            </div>
        </div>
        <div className="meals">
            <div className="title">Speacial for you</div>
            <div className="meals-items">
                {
                    mealsLoading ? "Meals Loading" :  displayMealsItems()
                }
            </div>
        </div>
    </>  );
}
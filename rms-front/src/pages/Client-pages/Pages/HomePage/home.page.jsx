import { useEffect, useState } from "react";
import CategoryCard from "../../../../components/Client Componenets/category-card/category.card";
import './home.style.css'
import RestaurantCard from "../../../../components/Client Componenets/restaurant-card/restaurant.card";
import MealCard from "../../../../components/Client Componenets/meal-card/meal.card";
import RestaurantType from "../../../../components/Client Componenets/resttype-card/restauranttype.card";
import { BASE_URL } from "../../../../constants";

const basePathCat = "src/assets/client-assets/categories-images/"
export default function HomePage() {
    const [categorySelected, setCategorySelected] = useState(0)
    const [restaurants, setRstaurants] = useState([])
    const [meals, setMeals] = useState([])

    const getRestaurants = ()=>{
        fetch('http://localhost:8080/api/restaurants').then((resp)=>{
            resp.json().then((resp)=>{
                console.log(resp);
            })
        })
    }
    useEffect(()=>{
        getRestaurants();
    },[])
    const handleClick = (eO)=>{
        console.log(eO.currentTarget);
        eO.currentTarget.classList.toggle('active');
        const cards = document.querySelectorAll('.card');
        cards.forEach((e)=>{
            console.log(e);
            eO.currentTarget !== e ?  e.classList.remove('active'): undefined
        })
    }
    const handleCategoryClicked = (index)=>{
        setCategorySelected(prevState =>{
            console.log('prev ', prevState);
            return prevState === index ? 0 : index
        });
    }
    return (<>
    {console.log(categorySelected)}
        <div className="categories-container">
            <div onClick={()=>handleCategoryClicked(1)}><CategoryCard  onTap={handleClick} categoryName="Fast food" color={"#a7f6b4"}  itemCount={3} imageUrl={basePathCat + "cat1.png"}  /></div>
            <div onClick={()=>handleCategoryClicked(2)}><CategoryCard  onTap={handleClick} categoryName="Breakfast" color={"#f6c67e"}  itemCount={17} imageUrl={basePathCat + "cat2.png"}  /></div>
            <div onClick={()=>handleCategoryClicked(3)}><CategoryCard  onTap={handleClick} categoryName="Dessert" color={"#e3a1a2"}  itemCount={10} imageUrl={basePathCat + "cat3.png"}  /></div>
            <div onClick={()=>handleCategoryClicked(4)}><CategoryCard  onTap={handleClick} categoryName="Drinks" color={"#c69ee4"}  itemCount={4} imageUrl={basePathCat + "cat4.png"}  /></div>
            <div onClick={()=>handleCategoryClicked(5)}><CategoryCard  onTap={handleClick} categoryName="Ice Creams" color={"#acc9e7"}  itemCount={23} imageUrl={basePathCat + "cat2.png"}  /></div>
        </div>
        {
        categorySelected!==0 ?  
            categorySelected === 1 ? 
                <div>1</div> : 
                    categorySelected === 2 ? 
                    <div>2</div> : 
                        categorySelected===3 ? 
                            <div>3</div> : 
                                categorySelected === 4 ? 
                                    <div>4</div> : 
                                        categorySelected === 5 ? 
                                            <div>5</div> : undefined
        : 
        undefined}
        <h1 className="main-title">Restaurants</h1>
        <div className="restaurant">
            <div className="title">Popular</div>
            <div className="restaurant-items">
                <RestaurantCard 
                    restaurantName="Shami restaurant" 
                    restaurantDescription="Description for the restaurant " 
                    restaurantRating={3.2}
                    rrstaurantImage="src/assets/client-assets/restautant-images/rest-brand.jpg"
                    restaurantCoverImage="src/assets/client-assets/restautant-images/rest-cover.jpg"
                    />
                <RestaurantCard 
                    restaurantName="Shami restaurant" 
                    restaurantDescription="Description for the restaurant " 
                    restaurantRating={3.2}
                    rrstaurantImage="src/assets/client-assets/restautant-images/rest-brand.jpg"
                    restaurantCoverImage="src/assets/client-assets/restautant-images/rest-cover.jpg"
                    />
                <RestaurantCard 
                    restaurantName="Shami restaurant" 
                    restaurantDescription="Description for the restaurant " 
                    restaurantRating={3.2}
                    rrstaurantImage="src/assets/client-assets/restautant-images/rest-brand.jpg"
                    restaurantCoverImage="src/assets/client-assets/restautant-images/rest-cover.jpg"
                    />
                <RestaurantCard 
                    restaurantName="Shami restaurant" 
                    restaurantDescription="Description for the restaurant " 
                    restaurantRating={3.2}
                    rrstaurantImage="src/assets/client-assets/restautant-images/rest-brand.jpg"
                    restaurantCoverImage="src/assets/client-assets/restautant-images/rest-cover.jpg"
                    />
                <RestaurantCard 
                    restaurantName="Shami restaurant" 
                    restaurantDescription="Description for the restaurant " 
                    restaurantRating={3.2}
                    rrstaurantImage="src/assets/client-assets/restautant-images/rest-brand.jpg"
                    restaurantCoverImage="src/assets/client-assets/restautant-images/rest-cover.jpg"
                    />
                <RestaurantCard 
                    restaurantName="Shami restaurant" 
                    restaurantDescription="Description for the restaurant " 
                    restaurantRating={3.2}
                    rrstaurantImage="src/assets/client-assets/restautant-images/rest-brand.jpg"
                    restaurantCoverImage="src/assets/client-assets/restautant-images/rest-cover.jpg"
                    />
            </div>
        </div>
        <div className="meals">
            <div className="title">Speacial for you</div>
            <div className="meals-items">
                <MealCard 
                    mealName="Back Star butguer"
                    mealPrice="17$"
                    mealRating={4.3}
                    mealImage="src/assets/client-assets/restautant-images/meal1.jpg"
                />
                <MealCard 
                    mealName="Back Star butguer"
                    mealPrice="17$"
                    mealRating={4.3}
                    mealImage="src/assets/client-assets/restautant-images/meal1.jpg"
                />
                <MealCard 
                    mealName="Back Star butguer"
                    mealPrice="17$"
                    mealRating={4.3}
                    mealImage="src/assets/client-assets/restautant-images/meal1.jpg"
                />
                <MealCard 
                    mealName="Back Star butguer"
                    mealPrice="17$"
                    mealRating={4.3}
                    mealImage="src/assets/client-assets/restautant-images/meal1.jpg"
                />
                <MealCard 
                    mealName="Back Star butguer"
                    mealPrice="17$"
                    mealRating={4.3}
                    mealImage="src/assets/client-assets/restautant-images/meal1.jpg"
                />
                <MealCard 
                    mealName="Back Star butguer"
                    mealPrice="17$"
                    mealRating={4.3}
                    mealImage="src/assets/client-assets/restautant-images/meal1.jpg"
                />
                <MealCard 
                    mealName="Back Star butguer"
                    mealPrice="17$"
                    mealRating={4.3}
                    mealImage="src/assets/client-assets/restautant-images/meal1.jpg"
                />
                <MealCard 
                    mealName="Back Star butguer"
                    mealPrice="17$"
                    mealRating={4.3}
                    mealImage="src/assets/client-assets/restautant-images/meal1.jpg"
                />
            </div>
        </div>
    </>  );
}
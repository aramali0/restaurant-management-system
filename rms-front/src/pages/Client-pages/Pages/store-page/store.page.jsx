import { useLocation } from "react-router-dom";
import './store.page.css'
import { FaStar } from "react-icons/fa6";
import CategoryItemText from "../../../../components/Client Componenets/category-item-text/category.item";
import { useEffect, useState } from "react";
import MealCard from "../../../../components/Client Componenets/meal-card/meal.card";
function StorePage() {
    const location = useLocation();
    const restaurant = location.state.restaurant;
    const imageCover = location.state.imageCover;
    const imageBrand = location.state.imageBrand
    const articlesLink = restaurant._links.articles.href;
    const [articles, setArticles] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categorieSelected,setCategorieSelected ] = useState('');
    const handleClick = (categoryTitle)=>{
        console.log(categoryTitle);
        setCategorieSelected(categoryTitle)
    }
    const getArticles = ()=>{
        fetch(articlesLink).then((resp)=>{
            resp.json().then((resp)=>{
                setArticles(resp._embedded.articles)
                removeDuplicateCategories(resp._embedded.articles)
                
            })
        })
    }
    const removeDuplicateCategories = (articles)=>{
        var cats = [];
        articles.map((article)=>{
            cats.push(article.categorie)
        })
        setCategories([ ... new Set(cats)]);
    }
    useEffect(()=>{
        getArticles()
        
    }, [])
    return ( <>
        <div className="container-store">
            <div className="store-info-container">
                <div className="cover-image-store">
                    <img src={imageCover} alt="Cover" />
                </div>
                <div className="store-info">
                    <div className="brand-image">
                        <img src={imageBrand} alt="" />
                    </div>
                    <div className="title-description-rating-store">
                        <div className="title">
                            {restaurant.nomRestaurant}
                        </div>
                        <div className="rating">
                            <div className="satar-count">
                                <div className="stars-rating"><FaStar/></div>
                                <div className="rating-count">{restaurant.rating}</div>
                            </div>
                            <div className="description">{restaurant.description}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="store-caegories">
                {categories.map((categorie)=>{
                    return <CategoryItemText onTap={()=>handleClick(categorie)}  categoryTitle={categorie} />
                })}
            </div>
            { categorieSelected!='' ? <div className="store-meals">
                {articles.map((meal,key)=>{
                    return meal.categorie ===categorieSelected ?  <MealCard meal={meal} mealImage="src/assets/client-assets/restautant-images/meal1.jpg" />  : undefined ;
                })}
                
            </div> : undefined }
        </div>
    </>);
}

export default StorePage;
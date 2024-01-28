import { useNavigate } from 'react-router-dom';
import './restaurant.card.style.css'
import { FaStar } from "react-icons/fa6";
function RestaurantCard({restaurant,rrstaurantImage,restaurantCoverImage, restaurantRating, key}) {
    const navigate = useNavigate();
    return (<div onClick={()=>{navigate("/store-page" , {state : {restaurant: restaurant}})}} key={key}>
        <div  className='rest-card'>
            <div className='cover-image-rest'> <img className='img-cover' src={restaurantCoverImage} alt="cover-image" /> </div>
            <div className='brand-image-rest'> <img className='img-brand' width="100" src={rrstaurantImage} alt='brand-image' /></div>
            <div className='info-rest'>
                <div className='rest-name'>{restaurant.nomRestaurant}</div>
                <div className='rest-desc'>
                    <p>{restaurant.description}</p>
                    <div className='rest-rat'>
                        <p>{restaurant.rating}</p>
                        <FaStar style={{color : '#FFD60A'}}/>
                    </div>
                </div>
            </div>
        </div>
        </div> );
}

export default RestaurantCard;
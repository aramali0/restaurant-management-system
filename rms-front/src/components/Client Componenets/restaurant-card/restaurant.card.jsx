import './restaurant.card.style.css'
import { FaStar } from "react-icons/fa6";
function RestaurantCard({restaurantName, restaurantDescription , rrstaurantImage,restaurantCoverImage, restaurantRating}) {
    return (<div>
        <div className='rest-card'>
            <div className='cover-image-rest'> <img className='img-cover' src={restaurantCoverImage} alt="cover-image" /> </div>
            <div className='brand-image-rest'> <img className='img-brand' width="100" src={rrstaurantImage} alt='brand-image' /></div>
            <div className='info-rest'>
                <div className='rest-name'>{restaurantName}</div>
                <div className='rest-desc'>
                    <p>{restaurantDescription}</p>
                    <div className='rest-rat'>
                        <p>{restaurantRating}</p>
                        <FaStar style={{color : '#FFD60A'}}/>
                    </div>
                </div>
                
            </div>
        </div>
        </div> );
}

export default RestaurantCard;
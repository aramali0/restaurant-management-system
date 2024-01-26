import './restaurant.card.style.css'
function RestaurantCard({restaurantName, restaurantDescription , rrstaurantImage,restaurantCoverImage, restaurantRating}) {
    return (<div>
        <div className='rest-card'>
            <div className='cover-image-rest'> <img className='img-cover' src={restaurantCoverImage} alt="cover-image" /> </div>
            <div className='brand-image-rest'> <img className='img-brand' width="100" src={rrstaurantImage} alt='brand-image' /></div>
            <div className='info'>
                <div className='rest-name'>{restaurantName}</div>
                <div className='rest-desc'>{restaurantDescription}</div>
                <div className='rest-rat'>{restaurantRating}</div>
            </div>
        </div>
        </div> );
}

export default RestaurantCard;
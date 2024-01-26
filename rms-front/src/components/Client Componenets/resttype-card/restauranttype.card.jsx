import './restauranttype.card.css'
function RestaurantType({categoryTitle}) {
    return ( <>
    <div className='rest-type-card active'>
        <div className='tutle'>
        {categoryTitle}
        </div>
    </div>
    </> );
}

export default RestaurantType;
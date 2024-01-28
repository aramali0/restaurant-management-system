import { useLocation } from "react-router-dom";

function StorePage() {
    const location = useLocation();
    const restaurant = location.state.restaurant;
    return ( <>
        <h1>Store Page</h1>
        <div>
            <h2>Store name :{restaurant.nomRestaurant} </h2>
            <h2>Store description :{restaurant.description} </h2>
            <h2>rating : {restaurant.rating}</h2>
        </div>
    </>);
}

export default StorePage;
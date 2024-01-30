import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from './pages/owner-page/home/home'
import DashBoard from './pages/owner-page/dashboard/DashBoard'
import Commands from './pages/owner-page/commands/Commands'
import Meals from './pages/owner-page/meals/Meals'
import Clients from './pages/owner-page/clients/Clients'
import CreateForm from './pages/owner-page/createForm/CreateForm';
import { useEffect, useState } from 'react';
import axios from 'axios';
import RestaurantPage from './pages/owner-page/restaurant/RestaurantPage';

function App() {
  
  const owner = {
    nomPersonne: "hamza",
    email: "hamza@gmail.com",
    motPass: "123",
    numTelel: "0605040303",
    payement: 200,
    _links: {
        self: {
            href: "http://localhost:8080/api/proprietaireRestus/1"
        },
        proprietaireRestu: {
            href: "http://localhost:8080/api/proprietaireRestus/1"
        },
        restaurant: {
            href: "http://localhost:8080/api/proprietaireRestus/1/restaurant"
        }
}
}

const [restaurant,setRestaurant] = useState(); 

useEffect(() => {
  axios.get(owner._links.restaurant.href).then((response) =>{
    setRestaurant(response.data);
  });
},[])
  
  return (
    <>
       <BrowserRouter >
          <Routes>
            <Route path="owner" element={<Home restaurant={restaurant} />}>
              <Route index element={<DashBoard/>} />
              <Route path='dashBoard' element={<DashBoard/>}/>
              <Route path='commands' element={<Commands/>} />
              <Route path='meals' element={<Meals/>} />
              <Route path='clients' element={<Clients/>} />
              <Route path='create' element={<CreateForm/>} />
              <Route path='restaurant' element={<RestaurantPage restaurant={restaurant} />}/>
            </Route> 
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

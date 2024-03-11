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
import LoginPage from './pages/owner-page/login/LoginPage';
import Sinscrire from './components/owner-page/sinscrire/Sinscrire';
import SinscrirePage from './pages/owner-page/sinscrire/SinscrirePage';

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

const JWT = JSON.parse(localStorage.getItem('JWT'));

const [restaurant,setRestaurant] = useState(); 
const idRestaurant = 2;
useEffect(() => {
  console.log(JWT);
  console.log(`Authorization: Bearer ${JWT}`);
  axios.get(owner._links.restaurant.href, {
    headers: {
      'Authorization': `Bearer ${JWT}`
    }
  }).then((response) =>{
    setRestaurant(response.data);
    console.log(response.data);
  });
},[])
  
  return (
    <>
       <BrowserRouter >
          <Routes>
            <Route path="/" element={<LoginPage/>}/> 
            <Route path="/login" element={<LoginPage/>}/> 
            <Route path="/sinscrire" element={<SinscrirePage/>}/> 
            <Route path="owner" element={<Home restaurant={restaurant} />}>
              <Route index element={<DashBoard/>} />
              <Route path='dashBoard' element={<DashBoard JWT={JWT} />}/>
              <Route path='commands' element={<Commands JWT={JWT} />} />
              <Route path='meals' element={<Meals JWT={JWT}/>} />
              <Route path='clients' element={<Clients JWT={JWT} />} />
              <Route path='create' element={<CreateForm JWT={JWT} />} />
              <Route path='restaurant' element={<RestaurantPage JWT={JWT} restaurant={restaurant} />}/>
            </Route> 
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

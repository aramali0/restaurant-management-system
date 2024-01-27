import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from './pages/owner-page/home/home'
import DashBoard from './pages/owner-page/dashboard/DashBoard'
import Commands from './pages/owner-page/commands/Commands'
import Meals from './pages/owner-page/meals/Meals'
import Clients from './pages/owner-page/clients/Clients'
import LayouClient from './pages/Client-pages/Pages/Layout/layout'
import HomePage from './pages/Client-pages/Pages/HomePage/home.page'
import ContactPage from './pages/Client-pages/Pages/ContactPage/contact.page'
import AboutPage from './pages/Client-pages/Pages/AboutPage/about.page'
import ProfilePage from './pages/Client-pages/Pages/ProfilePage/profile.lpage'


function App() {
  
  return (
    <>
       <BrowserRouter >
          <Routes>
            <Route path="owner" element={<Home/>}>
              <Route index element={<DashBoard/>} />
              <Route path='dashBoard' element={<DashBoard/>}/>
              <Route path='commands' element={<Commands/>} />
              <Route path='meals' element={<Meals/>} />
              <Route path='clients' element={<Clients/>} />
            </Route> 
          </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

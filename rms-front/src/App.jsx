import { BrowserRouter,  Route, Routes } from 'react-router-dom';
import Home from './pages/owner-page/home/home'
import DashBoard from './pages/owner-page/dashboard/DashBoard'
import Commands from './pages/owner-page/commands/Commands'
import Meals from './pages/owner-page/meals/Meals'
import Clients from './pages/owner-page/clients/Clients'


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

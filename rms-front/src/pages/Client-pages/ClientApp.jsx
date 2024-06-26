import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayouClient from "./Pages/Layout/layout";
import HomePage from "./Pages/HomePage/home.page";
import ContactPage from "./Pages/ContactPage/contact.page";
import AboutPage from "./Pages/AboutPage/about.page";
import ProfilePage from "./Pages/ProfilePage/profile.lpage";
import MealDetails from "./Pages/mealdetails/mealdetails.page";
import StorePage from "./Pages/store-page/store.page";
import { useState } from "react";
import CartPage from "./Pages/Cart Page/cart.page";

function AppClient() {
    return ( 
        
                <Route path="/client" element={<LayouClient></LayouClient>}>
                    <Route path="/home" element={<HomePage></HomePage>}></Route>
                    <Route path="/detailspage"  element={<MealDetails></MealDetails>}></Route>
                    <Route path="/store-page" element={<StorePage></StorePage>}></Route>
                    <Route path="/cart" element={<CartPage/>}></Route>
                    <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
                    <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                    <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
                </Route>
           
    );
}

export default AppClient;
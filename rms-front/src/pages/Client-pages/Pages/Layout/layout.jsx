import { Link, Outlet, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import  './layout.style.css';
import ProfileItem from "../../../../components/Client Componenets/prifile item/profile.item";
import React, { useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

export const Context = React.createContext();

function LayouClient() {
    
    const [index,incremntIndex] = useState(0);
    console.log("Render has been did....");
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return (
    <Context.Provider value={[index, incremntIndex]} >
    <>
        <nav>
            <div className="logo"> <img width="60" src="src/assets/client-assets/logo.png" alt="logo" /> </div>
            <div className="search-box">
                <form onSubmit={handleSubmit}>
                    <input className="search-input" type="text" placeholder="Search something ... " />
                    <button className="search-button" type="submit"><IoSearch/></button>
                </form>
            </div>
            <ul className="nav-items">
                <li className={location.pathname === "/home" ? "nav-item active" :"nav-item" }><Link className="nav-link" to = "/home">Home</Link></li>
                <li className={location.pathname === "/about" ? "nav-item active" :"nav-item" }><Link className="nav-link" to="about">About</Link></li>
                <li className={location.pathname === "/contact" ? "nav-item active" :"nav-item" }><Link className="nav-link" to="contact">Conatt us</Link></li>
                <li className={location.pathname === "/cart" ? "nav-item active" :"nav-item"}>
                    <Link className="nav-link" to="cart">
                        <div className="cart-size" >
                            <CiShoppingCart className="cart-icon" />
                            <span className="cart-count" ><span>{index}</span></span>
                        </div>
                    </Link>
                </li>
                <li className={location.pathname === "/profile" ? "nav-item active" :"nav-item" }><Link className="nav-link profile" to="profile"><ProfileItem imageLink="src/assets/client-assets/profile.jpg"></ProfileItem></Link></li>
            </ul>
        </nav>
        <div>
            <Outlet></Outlet>
        </div>
    </></Context.Provider> );
}

export default LayouClient;
import { Link, Outlet, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import  './layout.style.css';
import ProfileItem from "../../../../components/Client Componenets/prifile item/profile.item";
import React, { useEffect, useState } from "react";
import { CiShoppingCart } from "react-icons/ci";

export const Context = React.createContext();

function LayouClient() {
    const location = useLocation()
    const [index,incremntIndex] = useState(0);
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    const getPaniers = ()=>{
        fetch("http://localhost:8080/api/clients/1/panier").then((resp)=>{resp.json().then((resp)=>{
            fetch(resp._links.articles.href).then(
                (resp)=>{
                    resp.json().then((resp)=>{
                        incremntIndex(resp._embedded.articles.length);
            })})
        })})
    }
    useEffect(()=>{
        getPaniers()
    },[])
    return (
    <Context.Provider value={[index, incremntIndex]} >
    <>
        <nav>
            <div className="logo"> <img width="60" src="src/assets/client-assets/logo.png" alt="logo" /> </div>
            <ul className="nav-items">
                <li className={location.pathname === "/home" ? "nav-item active" :"nav-item" }><Link className="nav-link" to = "/home">Home</Link></li>
                <li className={location.pathname === "/about" ? "nav-item active" :"nav-item" }><Link className="nav-link" to="about">About</Link></li>
                <li className={location.pathname === "/contact" ? "nav-item active" :"nav-item" }><Link className="nav-link" to="contact">Contact us</Link></li>
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
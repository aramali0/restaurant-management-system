import { Link, Outlet, useLocation } from "react-router-dom";
import { IoSearch } from "react-icons/io5";
import  './layout.style.css';
import ProfileItem from "../../../../components/Client Componenets/prifile item/profile.item";
function LayouClient() {
    const location = useLocation();
    const handleSubmit = (e)=>{
        e.preventDefault();
    }
    return ( <>
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
                <li className={location.pathname === "/profile" ? "nav-item active" :"nav-item" }><Link className="nav-link profile" to="profile"><ProfileItem imageLink="src/assets/client-assets/profile.jpg"></ProfileItem></Link></li>
            </ul>
        </nav>
        <div>
            <Outlet></Outlet>
        </div>
    </> );
}

export default LayouClient;
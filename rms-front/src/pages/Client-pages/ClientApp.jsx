import { BrowserRouter, Route, Routes } from "react-router-dom";
import LayouClient from "./Pages/Layout/layout";
import HomePage from "./Pages/HomePage/home.page";
import ContactPage from "./Pages/ContactPage/contact.page";
import AboutPage from "./Pages/AboutPage/about.page";
import ProfilePage from "./Pages/ProfilePage/profile.lpage";

function AppClient() {
    return ( <>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LayouClient></LayouClient>}>
                    <Route path="/home" element={<HomePage></HomePage>}></Route>
                    <Route path="/contact" element={<ContactPage></ContactPage>}></Route>
                    <Route path="/about" element={<AboutPage></AboutPage>}></Route>
                    <Route path="/profile" element={<ProfilePage></ProfilePage>}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    </> );
}

export default AppClient;
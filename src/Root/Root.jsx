import { Outlet, useLocation } from "react-router-dom";
import Nav from "../Component/Navbar/Nav";
import Footer from "../Component/Footer/Footer";

const Root = () => {
    const location = useLocation();
    console.log(location);
    const noHeaderFooter = location.pathname.includes('sign-in');
    return (
        <div>
            {noHeaderFooter || <Nav/>}
            <Outlet/>
            {noHeaderFooter || <Footer/>}
        </div>
    );
};

export default Root;
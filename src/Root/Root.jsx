import { Outlet } from "react-router-dom";
import Nav from "../Component/Navbar/Nav";
import Footer from "../Component/Footer/Footer";

const Root = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Root;
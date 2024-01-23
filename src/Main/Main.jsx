import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
const Main = () => {
    return (
        <div>
            <Outlet></Outlet>
            <Footer/>
        </div>
    );
};

export default Main;
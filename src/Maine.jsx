import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import Navber from "./components/Navber";

const Maine = () => {

    return (
     <div className="">
        <Navber></Navber>
       <Outlet></Outlet>
       <Footer></Footer>
     </div>
    )
  }
  
  export default Maine;
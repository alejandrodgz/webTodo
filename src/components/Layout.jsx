import Tasks from "../Page/Tasks";
import Footer from "./Footer";
import Navbar from "./Navbar"
import { Outlet } from "react-router";


const Layout = (props) => {
  return (<>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default Layout;
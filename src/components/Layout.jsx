import Tasks from "../Page/Tasks";
import Footer from "./Footer";
import Navbar from "./Navbar"


const Layout = (props) => {
  return (<>
    <Navbar/>
    <Tasks title="All tasks" />
    <Footer/>
    </>
  )
}

export default Layout;
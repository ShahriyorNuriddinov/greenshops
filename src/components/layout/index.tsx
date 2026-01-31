import { Outlet } from "react-router-dom"
import Header from "../../components/navbar"
import Footer from "../footer"

const Layout = () => {
  return (
    <div>
        <Header/>
        <main>
            <Outlet/>
        </main>
        <Footer/>
    </div>
  )
}

export default Layout
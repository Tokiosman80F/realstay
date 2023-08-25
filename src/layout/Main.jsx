import { Outlet } from "react-router-dom"
import Header from "../pages/Shared/Header"
import Footer from "../pages/Shared/Footer"

const Main = () => {
    return (
      <div className='px-10'>
        <Header></Header>
        <div className="min-h-[calc(100vh-450px)]">
          <Outlet></Outlet>
        </div>
        <Footer></Footer>
      </div>
    );
}

export default Main
import { AboutUs } from "../Pages/AboutUs";
import Home from "../Pages/Home";
import Header from "./Header";
import { Main } from "./Main";
function Dashboard(){
    return (
        <div >
              
           <Header/>
           {/* <Main/> */}
           <Home/>
           <AboutUs/>

        </div>
    )
}
export default Dashboard;
import { Route, Routes } from "react-router-dom"
import { Classes } from "../Pages/Class"
import { AboutUs } from "../Pages/AboutUs"
import { Exams } from "../Pages/Exams"
import Home from "../Pages/Home"
import Header from "./Header"

// import { Classes } from "../../notes/components/List"
// import {Exams} from "../../notes/components/Arrange"

export const Main = ()=>{
    return (<div className="">
        <Routes>
            <Route path="/Home" element={<Home/>}/>
            <Route path="/aboutUS" element={<AboutUs/>}/>
            <Route path="/exams" element={<Exams/>}/>
            <Route path="/classes" element={<Classes/>}/>
           
        </Routes>
    </div>)
}
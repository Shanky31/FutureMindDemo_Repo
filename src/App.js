
import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <BrowserRouter>
         <Dashboard/>
      </BrowserRouter>   
     
     {/* <div class="">
     <>HEllo</>
     </div> */}
      
    </>
      
  );
}

export default App;

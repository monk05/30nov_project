import {BrowserRouter,Routes,Route} from "react-router-dom";
import "./index.css"
import {Home} from "./pages/Home"
import {About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Service } from "./pages/Service";
import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Error } from "./pages/Error";
import { Logout } from "./pages/Logout";

import { Navbar } from "./components/Navbar";
import { Footer } from "./components/footer/Footer";
const App=()=>{
  return <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element ={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Service" element={<Service/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/logout" element={<Logout/>}/> 
        <Route path="*" element={<Error/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  </>
}


export default App;

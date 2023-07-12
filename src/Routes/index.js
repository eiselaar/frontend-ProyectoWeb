import { BrowserRouter, Routes, Route } from "react-router-dom";

import Login from "../pages/login/login";
import Register from "../pages/registro/resgistro";
import Home from "../pages/home/home";
import Error from "../pages/error/errorPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />  
        <Route path="/registro" element={<Register />} errorElement={<Error />}
        />    
      </Routes>
      
    </BrowserRouter>
  );
};
export default Router;
 /*<Route
          path="/register"
          element={<Register />}
          errorElement={<Error />}
        />
        <Route path="/home" element={<Home />} errorElement={<Error />}></Route> */
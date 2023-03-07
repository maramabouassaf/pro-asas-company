import React from "react";
import {createRoot} from "react-dom/client";
import {BrowserRouter} from "react-router-dom";
import {Routes} from "react-router-dom";
import {Route} from "react-router-dom";
import Home from "./Home";
import Architecture from "./Architecture";
import Design from "./Design";
import Land from "./Land";
import FitOut from "./FitOut";
import Contracting from "./ Contracting";
import {AxiosRequestConfig as process} from "axios";
function App() {
return(
    <>
        < BrowserRouter basename={process.env.PUBLIC_URL}>
        <Routes>
                <Route exact path='/' element={<Home/>}/>
                <Route path='/arch' element={<Architecture/>} />
                <Route path='/design' element={<Design/>}/>
            <Route path='/land' element={<Land/>}/>
            <Route path='/fit' element={<FitOut/>}/>
            <Route path='/contra' element={<Contracting/>}/>
        </Routes>
        </BrowserRouter>
        </>
)
}
createRoot(document.getElementById("root")).render(<App/>)

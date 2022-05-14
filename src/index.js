import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import Play from "./components/Play";
import Aside from "./components/Aside";
import "./assets/css/reset.css"
import "./assets/css/style.css"

function App (){
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Aside />} />
                <Route path="/play" element={<Play />} />
            </Routes> 
        </BrowserRouter>
    );
};

ReactDOM.render(App(), document.querySelector(".root"));
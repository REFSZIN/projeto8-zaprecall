
import React from "react";
import  ReactDOM from "react-dom";
import Header from "./components/Header";
import Aside from "./components/Aside";
import Main from "./components/Main";
import Footer from "./components/Footer";
import "./css/reset.css"
import "./css/style.css"
function App (){
    return (
        <>
            <Header />
            <Aside />
            <Main />
            <Footer />
        </>
    );
};

ReactDOM.render(App(), document.querySelector(".root"));
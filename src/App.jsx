import React from "react";
import './styles/app.scss'
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";


function App() {
    return (
        <div className="app">
            <Header />
            <Main />
            <Footer />
        </div>
    );
}

export default App;

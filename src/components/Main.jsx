import React, { useEffect, useRef } from "react";
import "../styles/Main.scss";
import About from "./About.jsx";
import Works from "./Works.jsx";
import useAppear from "../hooks/useAppear.js";

function Main() {
    const h1 = useRef(null);
    const span = useRef(null)

    useEffect(() => {
        useAppear(h1, "visible", 500);
        setTimeout(() => {
            return span.current.classList.add("visible")
        }, 3000)
    }, []);

    return (
        <main>
            <div className="main-up" id="about">
                <div className="title">
                    <h1 className="title-h1" ref={h1}>
                        <span>Hello </span>
                        <span>I </span>
                        <span>Stukalo </span>
                        <span>Denis</span>
                    </h1>
                    <p className="title-p" >
                        <span ref={span}>Frontend-developer</span>
                    </p>
                </div>
            </div>
            <About />
            <Works />
        </main>
    );
}

export default Main;

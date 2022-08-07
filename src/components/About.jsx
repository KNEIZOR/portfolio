import React, { useEffect, useRef } from "react";
import "../styles/About.scss";
import useObserver from '../hooks/useObserver.js'

function About() {
    const aboutText = useRef(null)
    const myImg = useRef(null)

    useEffect(() => {
        useObserver(aboutText, "in-view")
        useObserver(myImg, "in-view")
    }, [])

    return (
        <div className="about">
            <div className="about__wrapper">
                <div className="about-img" ref={myImg}>
                    <img
                        src="https://sun9-west.userapi.com/sun9-65/s/v1/ig2/RXmTWkB_Z4Bgohl0TbI5PMRv7anSqTAykbrZDDXKeOBx5qnn1Zx8pvJEP6qMfxUHA8h5rxyBJf7V1DBDW1aMqwT7.jpg?size=911x1600&quality=96&type=album"
                        alt="i"
                    />
                </div>
                <div className="about-text">
                    <h2>About me:</h2>
                    <p ref={aboutText}>
                        <span>
                            My name is Denis, I'm a front-end developer.
                        </span>
                        <span>Age: 19 years old.</span>
                        <span>Was born in the city: Svetlograd.</span>
                        <span>
                            In addition to development, I like to travel,
                        </span>
                        <span>read books on self-development, psychology,</span>
                        <span>
                            in short, books that can help in life or inspire.
                        </span>
                        <span>In my spare time I do sports and make</span>
                        <span>
                            projects for myself and friends in Photoshop.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default About;

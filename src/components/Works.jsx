import React, { useEffect, useRef } from "react";
import "../styles/Works.scss";
import useObserver from '../hooks/useObserver.js'

function Works() {
    const works = [
        {
            img: "https://sun9-west.userapi.com/sun9-65/s/v1/ig2/HZhKYqmw4RgSQFOccTmJAiXr_TChdo5J7Oj_67aYoByHcjsIOQDJhAYpaW-ewnIYoMV0i3tjhtR-71mK-7CPe7dL.jpg?size=1444x949&quality=96&type=album",
            get: "https://unrivaled-empanada-743f25.netlify.app/",
            alt: "Red box",
        },
        {
            img: "https://sun9-west.userapi.com/sun9-49/s/v1/ig2/SIVwTkBxPtBA9fdBNCPxtIGwvbGzSjPkRL1FO1EKw8n3gY5Pn3GwuIcLJZKZs47UlJrZ87GcGPdvhQPOh5yu2PLT.jpg?size=1897x954&quality=96&type=album",
            get: "https://unrivaled-empanada-743f25.netlify.app/",
            alt: "My store",
        },
        {
            img: "https://sun9-west.userapi.com/sun9-54/s/v1/ig2/pXd3vV2C9COs8n36dTEYC9Nh84RzEaqkgc89_rmwMSrhUEwFHnQJU7i4NYoKkJMPqFBHEumnI7pBTWYnOOhOOcH0.jpg?size=1919x962&quality=96&type=album",
            get: "https://lustrous-crisp-71f0e6.netlify.app/",
            alt: "Slider",
        },
        {
            img: "https://sun9-west.userapi.com/sun9-61/s/v1/ig2/HGf0duq7rexYa4iaRFokLlgr6AcmBhsdxE1y3fj0DM72XgJmzUpvdtVnAVTq9gxovJvJqddSHQNypqzFBniEJe9W.jpg?size=765x656&quality=96&type=album",
            get: "https://lively-taiyaki-0c8354.netlify.app/",
            alt: "Tic tac toe",
        },
        {
            img: "https://sun9-north.userapi.com/sun9-83/s/v1/ig2/7VjtUziCgaNL-tHmATePYRViOJkPPRDBJ8XTOLBF_EuouQE-xLxuqlxcZVcrOXHLgK1oYwXAwXMN1oLNiXL8GVaU.jpg?size=571x725&quality=96&type=album",
            get: "https://idyllic-mandazi-40f606.netlify.app/",
            alt: "Calculator",
        },
    ];

    const worksTitle = useRef(null)
    const workList = useRef(null)

    useEffect(() => {
        useObserver(worksTitle, "in-view", "50px")
        useObserver(workList, "in-view")
    }, [])

    return (
        <div id="work" className="works-container">
            <div className="works__wrapper">
                <div className="works-title" ref={worksTitle}>
                    <h2>These are some of my projects</h2>
                </div>
                <div className="works" ref={workList}>
                    {works.map((work) => (
                        <div key={work.alt} className="work">
                            <a target="_blank" href={work.get}>
                                <img src={work.img} alt={work.alt} />
                                <p>
                                    <span className="code">&lt;</span>
                                    {work.alt}
                                    <span className="code">&#47;&gt;</span>
                                    </p>
                            </a>
                        </div>
                    ))}
                </div>
                <a
                    href="https://github.com/KNEIZOR?tab=repositories"
                    className="btn-show-all"
                    target="_blank"
                >
                    Show All <i className="fa-solid fa-angle-right"></i>
                </a>
            </div>
        </div>
    );
}

export default Works;

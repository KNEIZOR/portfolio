import React from "react";
import "../styles/Footer.scss";

function Footer() {
    return (
        <footer id="footer">
            <div className="footer__wrapper">
                <div className="footer-text">
                    <h2>Let's work together...</h2>
                    <p>How do you take your coffee?</p>
                </div>
                <div className="footer-links">
                    <ul>
                        <li>
                            <a href="https://vk.com/kneizor" target="_blank">
                                <i className="fa-brands fa-vk"></i> VK
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.instagram.com/kneizor/"
                                target="_blank"
                            >
                                <i className="fa-brands fa-instagram"></i>{" "}
                                Instagram
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://rostov.hh.ru/resume/dc4b3190ff0b1827aa0039ed1f524542546930"
                                target="_blank"
                            >
                                HeadHunter
                            </a>
                        </li>
                        <li>
                            <a
                                href="mailto:denisstukalo33@gmail.com"
                                target="_blank"
                            >
                                <i className="fa-solid fa-at"></i> Seend a mail
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/KNEIZOR"
                                target="_blank"
                            >
                                <i className="fa-brands fa-github"></i> GitHub
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-down-info">
                <hr />
                <section>
                    <p>&copy; Created for KNEIZOR</p>
                </section>
            </div>
        </footer>
    );
}

export default Footer;

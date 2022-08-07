import React from "react";
import "../styles/Header.scss";
import { Link, animateScroll as scroll } from "react-scroll";

function Header() {
    return (
        <header>
            <nav>
                <ul className="nav-ul">
                    <li>
                        <Link
                            spy={true}
                            smooth={true}
                            duration={1000}
                            to="about"
                        >
                            About
                        </Link>
                    </li>
                    <li>
                        <Link
                            spy={true}
                            smooth={true}
                            duration={1000}
                            to="work"
                        >
                            Work
                        </Link>
                    </li>
                    <li>
                        <Link
                            spy={true}
                            smooth={true}
                            duration={1000}
                            to="footer"
                        >
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;

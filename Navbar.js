import { Component } from "react";
import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import logo4 from "./Images/logo4.png"


class Navbar extends Component {
    state = { clicked: false };
    handleClick = () => {
        this.setState({ clicked: !this.state.clicked })
    }
    render() {
        return (
            <>
                <nav>

                <div id="lang">
                    <Link id="homebutton" to="/">
                        <svg
                            id="logo1"
                            width="00"
                            height="39"
                            viewBox="0 0 50 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">

                        </svg>

                        <img src={logo4} width="120px" height="40px" id="logo"></img>

                    </Link>

                        <select id="select">
                            <option selected>EN</option>
                            <option>EE</option>
                            <option>FI</option>
                            <option>RU</option>

                        </select>
                    
                        

                    </div>

                    <div>
                        <ul id="navbar" className={this.state.clicked ? "#navbar active" : "navbar"}>
                            <li>
                                <Link to="/">HOME</Link>
                            </li>
                            <li>
                                <Link to="/pricing">ACCOUNTING</Link>
                            </li>
                            <li>
                                <Link to="/about">ABOUT</Link>
                            </li>
                            <li>
                                <Link to="/faq">FAQ</Link>
                            </li>
                            <li>
                                <Link to="/blog">BLOG</Link>
                            </li>
                            <li id="contactus">
                                <Link to="/contact">CONTACT US</Link>
                            </li>

                        </ul>
                    </div>

                    <div id="mobile" onClick={this.handleClick}>
                        <i id="bar"
                            className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
                    </div>
                </nav>
            </>
        )
    }
}


export default Navbar;
import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import logo4 from "./Images/logo1.png"
import { FiMapPin, FiPhone, FiMail } from "react-icons/fi";


function Footer() {
    return (
        <div id="divFooter">
            <footer id="footer">

                <div id="containerlogo" style={{
                    backgroundColor: "",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: "30%",
                    backgroundPosition: 'center',
                }}>

                    <Link to="/">
                        <svg
                            id="logo1"
                            width="00"
                            height="39"
                            viewBox="0 0 50 39"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">

                        </svg>

                        <img src={logo4} width="240px" height="120px" id="logofooter" ></img>

                    </Link>
                    <p id="cptext">Copyright ©2023 EIP Group. All rights reserved</p>
                </div>


                <div id="footerleft">
                    <div id="FLlocation">
                        <FiMapPin size={28} />
                        <p id="maptext"><span>Location of the place, 00000 Helsinki</span></p>
                    </div>
                    <div id="FLphone">
                        <FiPhone size={30} />
                        <p id="phonetext">+358 123123123</p>
                    </div>
                    <div id="FLemail" >
                        <FiMail size={30} />
                        <p id="emailtext">abc@gmail.com</p>
                    </div>
                </div>

                <div id="footerright">
                    <ul id="footerlinks" >

                        <strong id="linkstext">QUICK LINKS</strong>
                        <li ><Link to="/" style={{ textDecoration: "none" }}>Home </Link></li>
                        <li><Link to="/about" style={{ textDecoration: "none" }}> About </Link></li>
                        <li><Link to="/pricing" style={{ textDecoration: "none" }}> Pricing </Link></li>
                        <li><Link to="/blog" style={{ textDecoration: "none" }}> Blog </Link></li>
                        <li><Link to="/faq" style={{ textDecoration: "none" }}> FAQ </Link></li>
                        <li><Link to="/contact" style={{ textDecoration: "none" }}> Contact </Link></li>
                    </ul>

                </div>




            </footer>
        </div>
    )
}

export default Footer;
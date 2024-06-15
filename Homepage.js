import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";
import image1 from "../Component/Images/imageright.jpg"


function Home() {

    return (
        <div id="fulldiv">



            <div id="bg" style={{
                backgroundImage: `url(${image1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                width: '100%',
                height: "90vh",
                backgroundPosition: 'center',
            }}>

                <div id="container">
                    <div id="divtext">
                        <div id="bgcolor">
                            <h1 id="h1"> Accounting services in Finland</h1>
                            <br></br>
                            <br></br>

                            <p id="p">We offer accounting services adapted to<br></br> international market requirements and to<br></br> constant market developements <br></br>We offer accounting services adapted to<br></br> international market requirements and to<br></br> constant market developements </p>

                            <br></br>
                            <br></br>
                            <br></br>
                            <Link to="/contact" style={{ textDecoration: "none" }}><button type="button" id="contactnow">Contact us now!</button></Link>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Home;
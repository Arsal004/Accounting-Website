import React from "react";
import "./Contact.css"
import contactimg1 from "../Component/Images/contactpic1.jpg"
import sample1 from "../Component/Images/samplepic.jpg"

function Contact() {
    return (

        <div>

            <div id="divC">
                <div id="containerContact">
                    <h1 id="contacth1">GET IN TOUCH</h1>
                    <input id="input" name="name" placeholder="Name*" autocomplete="off" required></input>
                    <input id="input" name="email" placeholder="Email*" autocomplete="off" required></input>
                    <input id="input" name="phone" placeholder="Phone*" autocomplete="off" required></input>
                    <textarea id="box" rows="5" cols="60" name="message" placeholder="Message*" autocomplete="off" required></textarea>
                    <button id="submit">SEND MESSAGE</button>
                </div>



                <div id="containerPicture" style={{
                    backgroundColor: "",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: '35%',
                    height: "75vh",
                    backgroundPosition: 'center',
                }}>
                    <div id="inConPic">
                        <h3 id="ConPich3">What happens after you send us a message?</h3>
                        <img src={contactimg1} id="contactimg1"></img>

                        <p id="ConPicp"> We won't spam you with annoying emails or disturb you with calls. After sending us a message, we will reach out to you as soon as possible.</p>
                    </div>
                </div>




            </div>
            <div id="divC2" style={{ width: "90%" }}>
                <div id="contactinfo">
                    <h1 id="CIheader">EIP GROUP FINLAND</h1>

                    <h2 id="CIheader2">ADDRESS</h2>
                    <p>EIP Group Oy<br></br>Itäkatu 17 B, <br></br> 00900 Helsinki Finland</p>

                    <h2 id="CIheader2">PHONE</h2>
                    <p>+358 123123123</p>

                    <h2 id="CIheader2">EMAIL</h2>
                    <p>abc@gmail.com</p>
                </div>


                <div id="contactpictures" style={{
                    backgroundColor: "",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    width: '60%',
                    height: "75vh"
                }}>
                    <div id="samplepics">
                        <img src={sample1} id="sample1"></img>
                    </div>
                </div>

            </div>
        </div>
    )
}






export default Contact;
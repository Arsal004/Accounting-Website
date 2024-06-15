// About.js
import React from 'react';
import './About.css';
import sample2 from "../Component/Images/Samplepic2.jpg"
import { Link } from "react-router-dom";


function About() {
  return (
   <>
    <section className="about-section">
    <div className="about">      
    </div>

    </section>
      {/* second part about section*/}
      <section className="about-section2">
      <div className="box7">
          <h5>ABOUT US</h5>
        <br>
        </br>
        <br></br>
         <h1> Our story   </h1>
         <br></br>
         EIP Group has been operating for 15 years. Our company uses Merit software to make your accounting precise and accurate. We provide different services from sending invoices to year ends. Our accountant has experience in several different fields. Our accountant is friendly and with a lot of knowledge and is always up to date with current laws and regulations.
      </div>
      </section>
      
              <section className="about-section4">
              <div className="samplepics">
              <img src={sample2} id="sample2" alt="Sample 2" />
              </div>
              <div className="Text-container">
             <h1>An Experienced Accounting Firm</h1>
             <br></br>
              <p>
               Specializing in small business professional accounting and tax preparation. Using proven strategies, passion for opportunities and unmatched responsiveness, I am able to help clients increase profits, minimizing your tax burden each and every month.
             </p>
                   <br></br>
               <br></br>
                <h1>Assurance & Trust</h1>
                   <br></br>
                   <p>
                    From the important basics like fast responses, clear communication, convenient documentation, and ongoing monitoring of your business to the most detailed and complex tax & accounting legislation, techniques & strategy (which I love to write about)

                   EIP Group will empower your entrepreneurial endeavors to be a more successful, focused and less burdened.

                   Explore our comprehensive list of client guarantees and start a conversation with us today! 
                   </p>
                   <br></br>
                   <br></br>

                   <h1>Extensive Industry Knowledge</h1>
                    <br></br>
                   <p>
                   EIP Group works with a broad spectrum of clients like doctors, attorneys, retail, construction, services businesses, and various others. Knowing the nuances of your industry will help your business receive the attention it needs to produce results.
                     </p>
                   </div>
     </section>

        
      {/* fifth part about section*/}
      
       
      <section className="about-section5">
        

      </section>
     
     <div className="container6">
      
    </div>




     {/* sixth part about section*/}
      
      
     <section className="about-section6">

        
     <div className='button'>
     <Link to="/pricing" style={{ textDecoration: "none" , fontSize: "large"}}><button type="button" id="accounting services">Accounting Services</button></Link>

    </div>



</section>

  </>
  );
}

export default About;
import React from 'react';
import './Accounting.css';
import Image8 from "../Component/Images/image8.jpg";

function Accounting() {
  return (
    <>
      {/* 1st part accounting section */}
      <section className="Accounting">
        <div className="Text-container">
          <h1>Accounting <br></br> Services</h1>
          
        </div>
        <div className="Image-container">
          <img src={Image8} id="Image8" alt="Image8" />
        </div>
      </section>
              {/* 2nd part accounting section */}
          <section>
              <div className="Text">
               <p>
                EIP Group has been operating for 15 years. Our company uses Merit software to make your accounting precise and accurate. We provide different services from sending invoices to year ends. Our accountant has experience in several different fields. Our accountant is friendly and with a lot of knowledge and is always up to date with current laws and regulations.
               </p> 

               </div>
           </section>
                 
                {/* 3rd part accounting section */}

                <section>
                  <div className="Services">
                  <h2>Why contact us for accounting in Finland?</h2> <br></br>
                  <ul>
                    <br></br>
                    <li>From us you get market-specific expertise and advice on accounting and payroll outsourcing, taxation and reporting.</li> <br></br>
                    <li>Our consultants will help you identify areas to establish more efficient procedures, cut costs and implement technology to streamline and automate your operations.</li><br></br>
                    <li>Cloud-based collaboration tools enable you to check your financial status and drill down to minute details anytime, anywhere, on any device.</li><br></br>
                    <li>We understand the need of our international customers to get the right reports at the right time and therefore we have formed our processes to support this with high security and back up.</li><br></br>
                    <li>Our services are scalable and flexible and we serve our customers in Finnish,  English,  Estonian  and  Russian .</li><br></br>
                    </ul>               
                    </div>
                  </section> 

    </>
  );
}

export default Accounting;
import React from "react";
function Hero() {
  return (
    <section className="container-fluid" id="supportHero">

      <div className="p-5" id="supportWrapper">
        <h4> Support Portal</h4>
        <a href="https://support.zerodha.com"> Track Tickets</a>
      </div>

      <div className="row p-5-3">
        <div className="col-6 p-5">
          <h1 className="fs-3">
            Search for an answer or browser help topics to create a ticket
          </h1>
          <input placeholder="Eg.how do i active F&O" style={{height:"30px"}}/>

          <br/>
            <a href="https://support.zerodha.com">Track account opening</a>
            <a href="https://support.zerodha.com">Track segment activation</a>
            <a href="https://support.zerodha.com">Intrsday margins</a>
            <a href="https://support.zerodha.com">Kite user manual</a>
        </div>
        <div className="col p-5">
            <h1 className="fs-3">Featured</h1>
<ol>
    <li>
        <a href="https://support.zerodha.com">hello</a>
    </li>
    <li>
         <a href="https://support.zerodha.com">hi i sm</a>
         </li>
</ol>

             <a href="https://support.zerodha.com">Current Takeovers and Delisting-January 2024</a>
            <a href="https://support.zerodha.com">Latest Intraday leverages-MIS & CO</a>
         </div>
      </div>
    </section>
  );
}

export default Hero;

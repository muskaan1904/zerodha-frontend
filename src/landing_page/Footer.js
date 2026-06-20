import React from 'react'
function Footer() {
  return (
    <footer style={{ backgroundColor: "rgba(250,250,250)" }}>
      <div className='container border-top mt-5'>
        <div className='row mt-5'>
          <div className='col'>
            <img src='media/images/logo.svg' style={{ width: "50%" }} />
            <p className="text-muted">
              &copy; 2010 - 2024, Not Zerodha Broking Ltd. All rights reserved.
            </p>
          </div>
          <div className='col text-muted mb-1' style={{ textDecoration: "none" }}>
            <p>Company</p>
            <a href='' className="d-block lh-sm text-decoration-none"> About</a>
            <br />
            <a href='' className="d-block lh-sm text-decoration-none"> Products</a>
            <br />
            <a href='' className="d-block lh-sm text-decoration-none"> Pricing</a>
            <br />
            <a href='' className="d-block lh-sm text-decoration-none">Referral Programme</a>
            <br />
            <a href='' className="d-block lh-sm text-decoration-none">Careers</a>
            <br />
            <a href='' className="d-block lh-sm text-decoration-none">Zerodha.tech</a>
            <br />
            <a href='' className="d-block lh-sm text-decoration-none">Press & mediaZerodha cares (CSR)</a>
            <br />
          </div>
          <div className='col text-muted'>
            <p>Support</p><br />
            <a href='' className="d-block lh-sm text-decoration-none">Support portal</a>
            <br />
            <a href='' className="d-block lh-sm text-decoration-none">Z-Connect blog</a>
            <br />
            <a href='' className="d-block lh-sm text-decoration-none">List of charges</a>
            <br />
            <a href='' className="d-block lh-sm text-decoration-none">Downloads & resources</a>
          </div>
          <div className='col text-muted' style={{ textDecoration: "none" }}>
            <p>Account</p>
            <a href='' className="d-block lh-sm text-decoration-none">Open an account</a><br />
            <a href='' className="d-block lh-sm text-decoration-none">Fund transfer</a><br />
            <a href='' className="d-block lh-sm text-decoration-none">60 day challenge</a><br />
          </div>
        </div>
        <div className='mt-5 text-muted' style={{ fontSize: "14px" }}>
          <p>Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.: INZ000031633
            CDSL: Depository services through Zerodha Securities Pvt. Ltd. – SEBI Registration no.: IN-DP-100-2015
            Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.: INZ000038238
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, J.P Nagar 4th Phase, Bengaluru – 560078, Karnataka, India.
            For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read
            the Risk Disclosure Document as prescribed by SEBI ICF</p>

          <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES:
            Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective communication, speedy redressal of the grievances.</p>

          <p>Investments in securities market are subject to market risks;
            read all the related documents carefully before investing.</p>

          <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors."
            KYC is one time exercise while dealing in securities markets – once KYC is done through a SEBI registered intermediary, it need not be done again when you approach another intermediary.
            Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write your bank account number and sign the IPO application form to authorise your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account.
            As a client, you should not share your password, PIN or OTP with anyone. Please do not share your login credentials with anyone. Zerodha does not provide stock tips and has not authorised anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such
            services, please create a ticket here.</p>
        </div>
        <div style={{ display: "flexg", gap: "20px" }}>

          <a href=''>NSE</a>
          <a href=''>BSE</a>
          <a href=''>MCX</a>
          <a href=''>Terms & conditions</a>
          <a href=''>Policies & procedures</a>
          <a href=''>Privacy policy</a>
          <a href=''>Disclosure</a>
        </div>


      </div>
    </footer>
  );
}

export default Footer;
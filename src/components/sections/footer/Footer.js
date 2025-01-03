import React from "react";
import ScrollToTopLink from '../../component/ScrollToTopLink';
import logo from "../../images/logo.png";
function Footer() {
  return (
    <>
      <div id="footer" style={{ backgroundColor: 'aliceblue' }}>
        <footer className="pt-5">
          <div className=" row  " style={{ width: "98%" }}>
            <div className="col-lg-6 col-md-6 col-sm-12 px-5">
              <div className="row">
                <div className="col-lg-4 col-md-8 col-sm-12 px-1  d-flex align-items-start justify-content-between ">
                  <ScrollToTopLink to='/'><a className="text-decoration-none navbar-brand urbanist" href="/">  <img src={logo} style={{ height: '60px', width: '170px', }} alt="Exer Energy" class="navbar-logo" /></a></ScrollToTopLink>
                </div>
                <div className=" col-lg-4 col-md-8 col-sm-12 ">
                  <h5 className="footer-heading mb-3"> Company </h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        About Us
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Our Services
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Privacy Policy
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Affiliate Program
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        About
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="col-lg-4 col-md-8 col-sm-12 ">
                  <h5 className="footer-heading mb-3"> Get Help </h5>
                  <ul className="nav flex-column">
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        FAQ
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Shipping
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Returns
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="orders" className="nav-link p-0 text-secondary">
                        Order Status
                      </a>
                    </li>
                    <li className="nav-item mb-2">
                      <a href="#" className="nav-link p-0 text-secondary">
                        Payment Options
                      </a>
                    </li>
                  </ul>
                </div>


              </div>
            </div>


            <div className="col-lg-3 col-md-8 col-sm-12 px-5 ">
              <div className="py-0">
                <h5 className="footer-heading mb-3">Contact Us</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-secondary">
                      Email: sales@exerenergy.com
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-secondary">
                      Phone: +91 8956301541/42
                  
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href="#" className="nav-link p-0 text-secondary">
                      Address: EXERVAL PVT LTD EXER ENERGY, GAT NO:- 309 / 3,  Opp to AMG CORPORATION,KURULI MURHE VASTI ROAD, KURALI, PUNE PINCODE  410501.Maharashtra, India
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          
          <div className="col-lg-3 col-md-6 col-sm-12 px-5 ">
            <div className="py-0">
              <form>
                <h5 className="footer-heading mb-3">
                  Subscribe to our newsletter
                </h5>
                <p>Monthly digest of what,s new and exciting from us.</p>
                <div className="d-flex flex-column flex-sm-row w-80 gap-3">
                  <label htmlFor="newsletter1" className="visually-hidden">
                    Email address
                  </label>
                  <input
                    id="newsletter1"
                    type="text"
                    className="form-control"
                    placeholder="Email address"
                  />
                  <button
                    className="btn btn-outline-warning dark-bg-button"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
      </div>

      <div className="d-flex flex-column flex-sm-row justify-content-between pt-4 mt-4 border-top">
        <p className="ms-5 my-auto">
          © {new Date().getFullYear()} Exer Energy, Inc. All rights reserved.
        </p>
        <div className="social-links" style={{paddingRight:'30px'}}>
          <h5 className="ms-3 footer-heading mb-3"> Follow Us</h5>
          <ul className="list-unstyled d-flex me-5">
            <li className="ms-3">
              <a className="link-body-emphasis text-warning">
                <i className="fa-brands fa-square-x-twitter fa-2x"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis text-warning">
                <i className="fa-brands fa-square-instagram fa-2x"></i>
              </a>
            </li>
            <li className="ms-3">
              <a className="link-body-emphasis text-warning">
                <i className="fa-brands fa-square-facebook fa-2x"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer >
      </div >
    </>
  );
}

export default Footer;

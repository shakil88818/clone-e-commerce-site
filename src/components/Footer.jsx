import { Link } from "react-router-dom"

import { FaSquareFacebook, FaSquareInstagram, FaLinkedin, FaSquareGithub } from "react-icons/fa6";

import newsletter from "../../public/images/newsletter.png"
import google_play from "../../public/images/google-play.png"
import app_store from "../../public/images/app-store.png"

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="d-flex align-items-center gap-10">
              <img src={newsletter} alt="newsletter"/>
              <h4 className="text-white mb-0">Sign Up For Newsletter</h4>
              </div>
            </div>

            <div className="col-5">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control py-1" 
                  placeholder="Your email address..." 
                  aria-label="Your email address..." 
                  aria-describedby="basic-addon2" 
                />
                <span className="input-group-text text-white" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
            

          </div>
        </div>

      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">

            <div className="col-3">
            <h6 className="text-white pb-4">Contact Us</h6>
              <div className="d-flex flex-column">
                <Link className="text-white pb-2 mb-0 smallText">SRMART</Link>
                <address className="text-white pb-3 smallText">
                Uttara, Airport, Dhaka-1230 <br/> Bangladesh
                </address>
                <a href="tel:+88 01234567890" className="text-white pb-3 smallText">01234567890</a>
                <a href="mailto:srmart@gmail.com" className="text-white smallText mb-0">srmart@gmail.com</a>

                <div className="social-links d-flex align-items-center mt-2 gap-15">
                  <a className="text-white fs-2" href="">
                    <FaSquareFacebook />
                  </a>
                  <a className="text-white fs-2" href="">
                    <FaSquareInstagram />
                  </a>
                  <a className="text-white fs-2" href="">
                    <FaLinkedin />
                  </a>
                  <a className="text-white fs-2" href="">
                    <FaSquareGithub />
                  </a>
                </div>
              </div>
            </div>

            <div className="col-2">
              <h6 className="text-white pb-3">Information</h6>
              <div className="d-flex flex-column">
                <Link to='privacy-policy' className="text-white pb-2 smallText">privacy Policy</Link>
                <Link to='' className="text-white pb-2 smallText">Refund Policy</Link>
                <Link to='' className="text-white pb-2 smallText">Shipping Policy</Link>
                <Link to='' className="text-white pb-2 smallText">Terms of Service</Link>
                <Link to='' className="text-white smallText mb-0">Blogs</Link>
              </div>
            </div>

            <div className="col-2">
            <h6 className="text-white pb-3">Account</h6>
              <div className="d-flex flex-column">
                <Link to='' className="text-white pb-2 smallText">Search</Link>
                <Link to=''className="text-white pb-2 smallText">About Us</Link>
                <Link to=''className="text-white pb-2 smallText">Faq</Link>
                <Link to='' className="text-white pb-2 smallText">Contact</Link>
                <Link to='' className="text-white smallText mb-0">Size Chart</Link>
              </div>
            </div>

            <div className="col-2">
            <h6 className="text-white pb-3">Quick Link</h6>
              <div className="d-flex flex-column">
                <Link to='' className="text-white pb-2 smallText">Accessories</Link>
                <Link to='' className="text-white pb-2 smallText">Loptops</Link>
                <Link to='' className="text-white pb-2 smallText">Headphones</Link>
                <Link to='' className="text-white pb-2 smallText">Smart Watch</Link>
                <Link to=''className="text-white smallText mb-0">Tablets</Link>
              </div>
            </div>

            <div className="col-3">
              <div>
                <h6 className="text-white pb-3">Our App</h6>
                <p className="text-white smallText">Download our app and get extra 15% Discount on your First order</p>
                
                <div className="d-flex align-items-center gap-10">
                  <Link><img src={google_play} alt="google" /></Link>
                  <Link><img src={app_store} alt="app" /></Link>
                </div>

              </div>
            </div>

          </div>
        </div>
      </footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-white text-center mb-0">&copy; {new Date().getFullYear()} powered by SRMART || Shakil Khan </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

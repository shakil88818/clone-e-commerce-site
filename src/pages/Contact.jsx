import BreadCrumb from "../components/BreadCrumb"
import MetaTitle from "../components/MetaTitle"

import { FaHouse,FaPhone } from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";
import { FaInfo } from "react-icons/fa";
import Container from "../components/Container";

const Contact = () => {
  return (
    <>
        <MetaTitle title={"Contact"} />
        <BreadCrumb title="Contact" />
        <Container class1="contact-wrapper home-wrapper-2">
            <div className="row">
              <div className="col-12">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.92021961715!2d90.35764542178103!3d23.876671466819076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1706392514715!5m2!1sen!2sbd" 
                width="600" 
                height="450" 
                className="border-0 w-100 pb-5"
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
              </div>

              <div className="col-12">
                <div className="contact-inner-wrapper py-3">
                  <div className="row">

                  <div className="col-6">
                    <div className="">
                      <h4 className='contact-title pb-4 '>Contact</h4>

                      <div className="mb-3">
                        <input 
                          type="text" 
                          className="form-control" 
                          id="name" placeholder="Name"
                        />
                      </div>

                      <div className="mb-3">
                        <input 
                          type="email" 
                          className="form-control" 
                          id="email" placeholder="Email"
                        />
                      </div>

                      <div className="mb-3">
                        <input 
                          type="number" 
                          className="form-control" 
                          id="phoneNumber" 
                          placeholder="Phone Number"
                        />
                      </div>

                      <div className="mb-3">
                        <textarea                    
                          className="form-control" 
                          id="text" 
                          placeholder="Comments">

                        </textarea>
                      </div>

                      <div className="button d-inline-block">Send</div>

                    </div>
                  </div>

                  <div className="col-6">
                    <div className="ps-4">
                      <h4 className='contact-title pb-4'>Get in touch with us</h4>

                      <div>
                        <div className="contact-icons ">
                          <ul className="ps-0 d-flex flex-column gap-15">
                            <li className="d-flex align-items-center gap-10">
                              <FaHouse />
                              <address className="mb-0">Hosee-402, Ashkona , Airport, Dhaka-1230</address>
                            </li>
                            <li className="d-flex align-items-center gap-10">
                              <FaPhone />
                              <a className="mb-0 text-dark" href="tel:+88 01234567890">+88 01234567890</a>
                            </li>
                            <li className="d-flex align-items-center gap-10">
                              <IoIosMail />
                              <a className="mb-0 text-dark" href="mailto:srmart@gmail.com">srmart@gmail.com</a>
                            </li>
                            <li className="d-flex align-items-center gap-10">
                              <FaInfo />
                              <address className="mb-0">Saturday-Friday, 10 AM - 6 PM</address>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>

                  </div>
                </div>
              </div>
            </div>
        </Container>
    </>
  )
}

export default Contact

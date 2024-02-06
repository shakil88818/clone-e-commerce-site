import { Link } from "react-router-dom"
import { MdInfoOutline } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";

import headphone from '/images/headphone.jpg'

const Checkout = () => {
  return (
    <>
      <section className="checkout-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
                <div className="col-7">
                    <div className="checkout-left-data pe-5">
                        <h3>SKMART</h3>
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to='/cart'>Cart</Link></li>
                                <li className="breadcrumb-item active" aria-current="page">Information</li>
                                <li className="breadcrumb-item active" aria-current="page">Shipping</li>
                                <li className="breadcrumb-item active" aria-current="page">Payment</li>
                            </ol>
                        </nav>
                        <div className="user-data">
                            <h4>Contact Information</h4>
                            <p>Log out</p>
                            <div className="form-check pt-0">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <p className="smallText">Email me with news and offers</p>
                            </div>
                            <div className="checkout-user-form py-2">
                                <h4>Shipping Address</h4>

                                <div className="d-flex flex-wrap gap-15">
                                    <div className="w-100">
                                        <select className="form-control form-select form-select" aria-label=".form-select-sm example">
                                            <option selected>Save Address</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div className="w-100">
                                        <select className="form-control form-select form-select" aria-label=".form-select-sm example">
                                            <option selected>Save Address</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>

                                    <div className="name-input-w">
                                        <input 
                                        type="text" 
                                        className="form-control"
                                        placeholder="First Name" />
                                    </div>
                                    <div className="name-input-w">
                                        <input 
                                        type="text" 
                                        className="form-control"
                                        placeholder="Last Name" />
                                    </div>

                                    <div className="w-100">
                                        <input 
                                        type="text" 
                                        className="form-control"
                                        placeholder="Address" />
                                    </div>

                                    <div className="d-flex gap-10">
                                        <MdInfoOutline className="fs-4"/>
                                        <p className="mb-0">Add house number if you have on.</p>
                                    </div>

                                    <div className="w-100">
                                        <input 
                                        type="text" 
                                        className="form-control"
                                        placeholder="Appartment, Suit, etc (optional)" />
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>

                        <div className="col-12 pe-5">
                            <div className="d-flex justify-content-between gap-20">

                                <div className="w-100">
                                    <input 
                                    type="text" 
                                    className="form-control"
                                     placeholder="City" />
                                </div>

                                <div className="w-100">
                                    <select className="form-control form-select form-select" aria-label=".form-select-sm example">
                                        <option selected>State</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                    </select>
                                </div>

                                <div className="w-100">
                                    <input 
                                    type="text" 
                                    className="form-control"
                                    placeholder="Zip Code" />
                                </div>
                            </div>
                        </div>
                    
                        <div className="col-12 pe-5">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <MdKeyboardArrowLeft className="fs-4"/>
                                    <Link to='/cart'>Return To Cart</Link>
                                </div>
                                <div className="">
                                    <Link to='' className="button">Continue To Shipping</Link>
                                </div>
                            </div>
                        </div>
                    
                </div>

                <div className="col-5">
                    <div className="product-right-data">
                        
                        <div className="border-bottom">

                            <div className=" d-flex align-items-center gap-15 pb-5">
                                <div className="position-relative">
                                    <span 
                                    style={{top:"-20px", right:"1px"}}
                                    className="badge bg-secondary text-white p-2 rounded-circle position-absolute">1</span>
                                    <img className="img-fluid" src={headphone} alt="headphone" />
                                </div>
                                <div>
                                    <h6 className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                                    <p className="mb-0">S / #232322</p>
                                </div>
                                <p className="mb-0">$ 100.00</p>
                            </div>

                            <div className=" d-flex align-items-center gap-15 pb-5">
                                <div className="position-relative">
                                    <span 
                                    style={{top:"-20px", right:"1px"}}
                                    className="badge bg-secondary text-white p-2 rounded-circle position-absolute">1</span>
                                    <img className="img-fluid" src={headphone} alt="headphone" />
                                </div>
                                <div>
                                    <h6 className="w-75">Lorem ipsum dolor sit amet consectetur adipisicing.</h6>
                                    <p className="mb-0">S / #232322</p>
                                </div>
                                <p className="mb-0">$ 100.00</p>
                            </div>

                        </div>

                        <div className="border-bottom pb-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Subtotal</p>
                                <p className="mb-0">$ 100.00</p>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Shipping</p>
                                <p className="mb-0">$ 10.00</p>
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="d-flex justify-content-between align-items-center">
                                <p>Total</p>
                                <h5 className="mb-0">$ 100.00</h5>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Checkout

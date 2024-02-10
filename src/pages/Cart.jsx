
import BreadCrumb from "../components/BreadCrumb"
import MetaTitle from "../components/MetaTitle"

import { MdDelete } from "react-icons/md";

import headphone from '/images/headphone.jpg'
import { Link } from "react-router-dom";
import Container from "../components/Container";

const Cart = () => {
  return (
    <>
        <MetaTitle title={"Cart"} />
        <BreadCrumb title="Cart" />
        <Container class1="cart-wrapper home-wrapper-2 py-5">
                <div className="row">

                    <div className="col-12">
                        
                        <div className="d-flex align-items-center border-bottom">
                            <h6 className="cart-col-1">Product</h6>
                            <h6 className="cart-col-2">Price</h6>
                            <h6 className="cart-col-3">Quantity</h6>
                            <h6 className="cart-col-4">Total</h6>
                        </div>

                        <div className="d-flex align-items-center border-bottom">
                            <div className="cart-col-1">
                                <div className="cart-img d-flex align-items-center gap-20 pt-4">
                                    <img className="img-fluid" src={headphone} alt="headphone" />
                                    <div>
                                        <h6 className="w-75">Lorem ipsum, dolor sit amet consectetur adipisicing.</h6>
                                        <p className="mb-1">size: S</p>
                                        <p>Color: #333444</p>
                                    </div>
                                </div>
                            </div>

                            <div className="cart-col-2">
                                <p>$ 100.00</p>
                            </div>

                            <div className="cart-col-3">
                                <div className="cart-3-content d-flex align-items-center gap-15">
                                    <input 
                                        type="number"
                                        className="form-control"
                                        min={1}
                                        max={10}
                                    />
                                    <div>
                                        <MdDelete className="fs-4"/>
                                    </div>
                                </div>
                            </div>

                            <div className="cart-col-4">
                            <p>$ 100.00</p>
                            </div>
                        </div>

                    </div>

                    <div className="col-12">
                        <Link to="/product" className="button border-0 mt-4">Continue Shopping</Link>
                    </div>

                    <div className="col-12">
                        <div className="d-flex justify-content-between py-4">

                            <div>
                                <p>Order Special Instruction</p>
                            </div>

                            <div className="d-flex flex-column align-items-end">
                                <h5>Subtotal &nbsp; <span>$ 100.00</span></h5>
                                <p>Taxs and Shipping Calculeted at Checkout</p>
                                <Link to='/checkout' className="button ">Check Out</Link>
                            </div>

                        </div>
                    </div>

                </div>
        </Container>
    </>
  )
}

export default Cart

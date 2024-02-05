import { useState } from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

import BreadCrumb from "../components/BreadCrumb"
import MetaTitle from "../components/MetaTitle"
import ProductCard from "../components/ProductCard"
import Colors from '../components/Colors'

import watch from '/images/blog-1.jpg'

import { FaCodeCompare } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";

const SingleProduct = () => {
    const [toggle, setToggle] = useState(false)
  return (
    <>
        <MetaTitle title={"Product Name"} />
        <BreadCrumb title="Product Name" />

        <section className="singleProduct-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="card">
                    <div className="row">
                        <div className="col-6">
                            <div className="singlePro-img">
                                <img className="img-thumbnail" src={watch} alt="watch" />
                                
                                <div className="singlePro-simg d-flex flex-wrap jastify-content-between gap-15 py-3">
                                    <img className="img-thumbnail" src={watch} alt="watch" />
                                    <img className="img-thumbnail" src={watch} alt="watch" />
                                    <img className="img-thumbnail" src={watch} alt="watch" />
                                    <img className="img-thumbnail" src={watch} alt="watch" />
                                </div>

                            </div>
                        </div>

                        <div className="col-6 ps-4">

                            <div className="singleProduct-content border-bottom">
                                <h5 className="title-sm mb-1 ">Lorem ipsum, dolor sit amet consectetur adipisicing.</h5>
                            </div>

                            <div className="border-bottom">
                                <h6 className="pt-2">$ 100</h6>
                                <div className="d-flex align-items-center gap-10 ">
                                    <ReactStars
                                    count={5}
                                    size={24}
                                    value={4} 
                                    edit={false}
                                    activeColor="#ffd700"
                                    />
                                    <p className="mb-0">based on 5 reviews</p>
                                </div>
                                <p className="mb-0">write a review</p>
                            </div>

                            <div>
                                <p className="fw-bold mb-0 pt-2">Type: &nbsp; <span className="description">watch</span></p>
                                <p className="fw-bold mb-0">Brand: &nbsp; <span className="description">Apple</span></p>
                                <p className="fw-bold mb-0">Catagories: &nbsp; <span className="description">Watch</span></p>
                                <p className="fw-bold mb-0">Tags: &nbsp; <span className="description">watch</span></p>
                                <p className="fw-bold mb-0">Availability: &nbsp; <span className="description">In Stock</span></p>
                                <div className="mb-2">
                                    <p className="fw-bold mb-2">Size:</p>
                                    <div className="d-flex gap-20">
                                        <button className="px-2">S</button>
                                        <button className="px-2">M</button>
                                        <button className="px-2">XL</button>
                                        <button className="px-2">XXL</button>
                                    </div>
                                </div>

                                <div>
                                    <p className="fw-bold mb-2">Color:</p>
                                    <div>
                                        <Colors />
                                    </div>
                                </div>

                                <div className="singlepro-content d-flex align-items-center gap-15 ">
                                    <p className="fw-bold mb-2">Quantity:</p>
                                        <div className="">
                                            <input 
                                            type="number" 
                                            className="form-control" 
                                            id="quantity" 
                                            name="quantity" 
                                            min={1} 
                                            max={100}/>
                                        </div>
                                    <button className="button border-0">Add to Cart</button>
                                    <button className="button border-0 buy-it-now">Buy it Now</button>
                                </div>

                                <div className="d-flex gap-30 pt-4">
                                    
                                    <div className="d-flex align-items-center gap-10">
                                        <FaCodeCompare />
                                        <p className="mb-0">Add to Compare</p>
                                    </div>

                                    <div className="d-flex align-items-center gap-10">
                                        <FaRegHeart />
                                        <p className="mb-0">Add to Wishlist</p>
                                    </div>
                                </div>

                                <div>
                                    <p className="fw-bold pt-3 mb-1">Shipping & Returns:</p>
                                    <p className="mb-1">Free Shipping and Returns on all Orders</p>
                                    <p className="mb-2">We Ship all us domestic order within <strong>5-10 business days</strong></p>
                                </div>

                                <p className="fw-bold mb-0 pt-2">Product Link: &nbsp; <span className="description">Copy Product Link</span></p>

                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </section>

        <section className="description-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Description</h3>
                        <div className="card">
                            <p className="description mb-0">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorum, voluptatibus? Magnam voluptates impedit veniam expedita ab, quia fugit neque sed, veritatis a quibusdam inventore reiciendis sequi doloremque repellat ad quo unde. Consequuntur veniam cupiditate, ipsam unde reiciendis illum voluptatum cum, repudiandae nobis modi officia incidunt fugiat labore aperiam aliquam! Placeat facilis beatae aliquam? Porro nulla neque maxime, error quo recusandae voluptate aspernatur eos facilis unde? Autem nemo nisi esse eum eos. Iure dolor perspiciatis eligendi ex beatae ducimus et cumque nostrum adipisci asperiores saepe maiores iusto fugit qui illum temporibus deserunt alias non inventore odit vero mollitia quo, doloribus est!</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section className="reviews-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">

                <div className="row">
                    <div className="col-12">
                        <h3 className="section-heading">Reviews</h3>
                        <div className="reviews-card">

                            <div className="reviews-1st-content">
                                <div className="border-bottom d-flex justify-content-between align-items-center">
                                    <div className="">
                                        <div className="review-heading">
                                            <h5>Customer Reviews</h5>
                                        </div>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3} 
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className="mb-0">based on 5 reviews</p>
                                        </div>
                                    </div>
                                    <Link onClick={()=>{setToggle(!toggle)}}>Write a reiew</Link>
                                </div>
                            </div>       

                            {toggle && <div className="cutomer-review-form py-3">
                                <h6 className="review-small-text">Write a Review</h6>

                                <div className="mb-3 review-small-text">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input 
                                    type="Text" 
                                    className="form-control" 
                                    id="name" 
                                    placeholder="Enter your name"/>
                                </div>

                                <div className="mb-3 review-small-text">
                                    <label htmlFor="name" className="form-label">Email</label>
                                    <input 
                                    type="email" 
                                    className="form-control" 
                                    id="email" 
                                    placeholder="Enter your email"/>
                                </div>

                                <div className="review-small-text">
                                    <label htmlFor="name" className="form-label mb-0">Rating</label>
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={0} 
                                        edit={true}
                                        activeColor="#ffd700"
                                        />
                                </div>

                                <div className="mb-3 pt-2 review-small-text">
                                    <label htmlFor="name" className="form-label">Review title</label>
                                    <input 
                                    type="Text" 
                                    className="form-control" 
                                    id="name" 
                                    placeholder="Give your review a title"/>
                                </div>
                                
                                <div className="mb-3 review-small-text">
                                    <label htmlFor="exampleFormControlTextarea1" className="form-label">Body of a review (1500)</label>
                                    <textarea 
                                    className="form-control" 
                                    id="exampleFormControlTextarea1" 
                                    rows="6">
                                    </textarea>
                                </div>
                                <button className="button border-0 mt-2">Submit Review</button>
                            </div>}

                            <div className="border-bottom">

                                <div className="">
                                    <ReactStars
                                        count={5}
                                        size={24}
                                        value={3} 
                                        edit={false}
                                        activeColor="#ffd700"
                                        />
                                        <div>
                                            <p className="mb-0">Good</p>
                                            <p className="">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime et ex sit ipsa?</p>

                                        </div>
                                </div>

                            </div> 

                        </div>
                    </div>
                </div>

            </div>
        </section>

        <section className="featured-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">You May Also Like</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
        </section>
    </>
  )
}

export default SingleProduct

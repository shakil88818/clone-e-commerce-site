import { Link } from "react-router-dom";
import BreadCrumb from "../components/BreadCrumb"
import MetaTitle from "../components/MetaTitle"

import { FaArrowLeftLong, FaLinkedin, FaSquareFacebook, FaSquareGithub, FaSquareInstagram } from "react-icons/fa6";

const SingleBlog = () => {
  return (
    <>
        <MetaTitle title={"Dynamic single Name"} />
        <BreadCrumb title="Dynamic single Name" />
        <div className="single-blog-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">

                <div className="col-3">
                    <div className="filter-card mb-3">
                        <h3 className="filter-title">Find By Catagories</h3>
                        <ul className="ps-0 mb-0 d-flex flex-column">
                            <Link to="/" className="color"><li>Home</li></Link>
                            <Link to="/ourstore" className="color"><li>Our store</li></Link>
                            <Link to="/blog" className="color"><li>Blog</li></Link>
                            <Link to="/contact" className="color"><li>Contact</li></Link>
                        </ul>
                    </div>
                </div>

                <div className="col-9">
                    <div className="single-blog-card">
                        <h3 className="mb-3">A Beautiful sunday morning renalsence</h3>
                        <div>
                            <img src="/images/blog-1.jpg" alt="blog" className="single-blog-img" />
                        </div>
                        <p className="my-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo et, tempora laboriosam perspiciatis voluptatum suscipit natus sint amet eos ullam ipsum incidunt veniam ducimus porro consequuntur odit recusandae! Pariatur rerum repellat sed minima ipsum adipisci? Veniam odit porro neque optio saepe consectetur explicabo aperiam necessitatibus, magni cupiditate delectus eligendi aut!</p>
                        <p>30 jan 2024 &nbsp; &nbsp; Shakil khan</p>
                        
                        <div className="d-flex align-items-center justify-content-between py-3">
                        <Link to='/blog' className="d-flex align-items-center text-dark gap-10"><FaArrowLeftLong /> Back to blog</Link>
                        
                            <div className="social-links d-flex align-items-center mt-2 gap-15">
                                <a className="single-blog-social" href="">
                                    <FaSquareFacebook />
                                </a>
                                <a className="single-blog-social" href="">
                                    <FaSquareInstagram />
                                </a>
                                <a className="single-blog-social" href="">
                                    <FaLinkedin />
                                </a>
                                <a className="single-blog-social" href="">
                                    <FaSquareGithub />
                                </a>
                            </div>
                        </div>

                        <div className="comment-box-card my-4">
                            <h5 className="py-3">Leave A Comment</h5>

                            <div className="d-flex align-itemes-center justify-content-between">
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
                            </div>

                            <div className="mb-3">
                                <textarea                    
                                    className="form-control" 
                                    id="text" 
                                    placeholder="Comments">
                                </textarea>
                            </div>

                            <button className="button border-0 my-2">Post Comment</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>
        </div>
      
    </>
  )
}

export default SingleBlog

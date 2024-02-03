import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

import catbanner_01 from "/public/images/catbanner-01.jpg"
import catbanner_02 from "/public/images/catbanner-02.jpg"
import catbanner_03 from "/public/images/catbanner-03.jpg"
import catbanner_04 from "/public/images/catbanner-04.jpg"

import service from "../../public/images/service.png"
import service_02 from "../../public/images/service-02.png"
import service_03 from "../../public/images/service-03.png"
import service_04 from "../../public/images/service-04.png"
import service_05 from "../../public/images/service-05.png"

import brand_01 from "../../public/images/brand-01.png"
import brand_02 from "../../public/images/brand-02.png"
import brand_03 from "../../public/images/brand-03.png"
import brand_04 from "../../public/images/brand-04.png"
import brand_05 from "../../public/images/brand-05.png"
import brand_06 from "../../public/images/brand-06.png"
import brand_07 from "../../public/images/brand-07.png"
import brand_08 from "../../public/images/brand-08.png"

import camera from "../../public/images/camera.jpg"
import tv from "../../public/images/tv.jpg"
import laptop from "../../public/images/laptop.jpg"
import headphone from "../../public/images/headphone.jpg"



const Home = () => {
  return (
    <>
      <section className="home-wrapper-1 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
                <div className="main-banner position-relative">
                  <img 
                    className="img-fluid rounded-3" 
                    src="/images/main-banner-1.jpg" 
                    alt="main-banner-1" 
                  />

                  <div className="main-banner-content position-absolute">
                    <h5>Supercharged for pro</h5>
                    <h2 className="pb-2">Spacial Sale</h2>
                    <p>from $330.99 or $62.7/mo <br />for 24mo footnote</p>
                    <Link className="button mt-4">Buy Now</Link>
                  </div>
                </div>
            </div>

            <div className="col-6 ps-0">
              <div className="d-flex flex-wrap justify-content-between align-items-center gap-10">
                
                <div className="small-banner position-relative">
                  <img 
                    className="img-fluid rounded-3" 
                    src={catbanner_01} 
                    alt="main-banner-1" 
                  />

                  <div className="small-banner-content position-absolute">
                    <h5>Supercharged for pro</h5>
                    <h2 className="pb-1">Spacial Sale</h2>
                    <p>from $330.99 or $62.7/mo <br />for 24mo footnote</p>

                  </div>
                </div>


                <div className="small-banner position-relative">
                  <img 
                    className="img-fluid rounded-3" 
                    src={catbanner_02}
                    alt="main-banner-1" 
                  />

                  <div className="small-banner-content position-absolute">
                    <h5>Supercharged for pro</h5>
                    <h2 className="pb-1">Spacial Sale</h2>
                    <p>from $330.99 or $62.7/mo <br />for 24mo footnote</p>

                  </div>
                </div>


                <div className="small-banner position-relative">
                  <img 
                    className="img-fluid rounded-3" 
                    src={catbanner_03} 
                    alt="main-banner-1" 
                  />

                  <div className="small-banner-content position-absolute">
                    <h5>Supercharged for pro</h5>
                    <h2 className="pb-1">Spacial Sale</h2>
                    <p>from $330.99 or $62.7/mo <br />for 24mo footnote</p>

                  </div>
                </div>


                <div className="small-banner position-relative">
                  <img 
                    className="img-fluid rounded-3" 
                    src={catbanner_04} 
                    alt="main-banner-1" 
                  />

                  <div className="small-banner-content position-absolute">
                    <h5>Supercharged for pro</h5>
                    <h2 className="pb-1">Spacial Sale</h2>
                    <p>from $330.99 or $62.7/mo <br />for 24mo footnote</p>

                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="services d-flex align-items-center justify-content-between gap-15">
                <div className="d-flex align-items-center gap-15">
                  <img src={service} alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0 smallText">from all orders $5</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src={service_02} alt="services" />
                  <div>
                    <h6>Daily Surprice Offers</h6>
                    <p className="mb-0 smallText">Save upto 25% off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src={service_03} alt="services" />
                  <div>
                    <h6>Support 24/8</h6>
                    <p className="mb-0 smallText">Shop with an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src={service_04} alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0 smallText">Get Factory Default Price</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src={service_05} alt="services" />
                  <div>
                    <h6>Secure Payment</h6>
                    <p className="mb-0 smallText">100% protected Payment</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="catagories d-flex flex-wrap align-items-center justify-content-between">
                
                <div className="d-flex align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Laptop & Pad</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src={laptop} alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphone</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src={headphone} alt="headphone" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src={camera} alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src={tv} alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Laptop & Pad</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src={laptop} alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphone</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src={headphone} alt="headphone" />
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
              <h3 className="section-heading">Featured Collection</h3>
            </div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
          </div>
        </div>
      </section>

      <section className="special-product-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="raw">
            <div className="col-12">
              <h3 className="section-heading">Spacial Product</h3>
            </div>
            <div className="row">
              <SpecialProduct/>
              <SpecialProduct/>
              <SpecialProduct/>
            </div>
          </div>
        </div>
      </section>

      <section className="marque-wrapper py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="marque-inner-wrapper card-wraper">
                <Marquee className="">
                  <div className="mx-4 w-25">
                    <img src={brand_01} alt="brand" />
                  </div>
                  <div>
                    <img src={brand_02} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand_03} alt="brand" />
                  </div>
                  <div>
                    <img src={brand_04} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand_05} alt="brand" />
                  </div>
                  <div>
                    <img src={brand_06} alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src={brand_07} alt="brand" />
                  </div>
                  <div>
                    <img src={brand_08} alt="brand" />
                  </div>
                </Marquee>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="blog-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <h3 className="section-heading">Our Latest News</h3>
            </div>

            <div className="row">
            <div className="col-3">
              <BlogCard/>
            </div>

            <div className="col-3">
              <BlogCard/>
            </div>

            <div className="col-3">
              <BlogCard/>
            </div>

            <div className="col-3">
              <BlogCard/>
            </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}

export default Home

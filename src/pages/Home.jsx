import { Link } from "react-router-dom"
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";


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
                    src="/images/catbanner-01.jpg" 
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
                    src="/images/catbanner-02.jpg" 
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
                    src="/images/catbanner-03.jpg" 
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
                    src="/images/catbanner-04.jpg" 
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
                  <img src="/images/service.png" alt="services" />
                  <div>
                    <h6>Free Shipping</h6>
                    <p className="mb-0 smallText">from all orders $5</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-02.png" alt="services" />
                  <div>
                    <h6>Daily Surprice Offers</h6>
                    <p className="mb-0 smallText">Save upto 25% off</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-03.png" alt="services" />
                  <div>
                    <h6>Support 24/8</h6>
                    <p className="mb-0 smallText">Shop with an expert</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-04.png" alt="services" />
                  <div>
                    <h6>Affordable Prices</h6>
                    <p className="mb-0 smallText">Get Factory Default Price</p>
                  </div>
                </div>

                <div className="d-flex align-items-center gap-15">
                  <img src="/images/service-05.png" alt="services" />
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
                  <img src="/images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Laptop & Pad</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src="/images/laptop.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphone</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="headphone" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Camera</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src="/images/camera.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Smart Tv</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src="/images/tv.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Laptop & Pad</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src="/images/laptop.jpg" alt="camera" />
                </div>

                <div className="d-flex align-items-center">
                  <div>
                    <h6>Headphone</h6>
                    <p className="mb-0 smallText">10 items</p>
                  </div>
                  <img src="/images/headphone.jpg" alt="headphone" />
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
                    <img src="images/brand-01.png" alt="brand" />
                  </div>
                  <div>
                    <img src="images/brand-02.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-03.png" alt="brand" />
                  </div>
                  <div>
                    <img src="images/brand-04.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-05.png" alt="brand" />
                  </div>
                  <div>
                    <img src="images/brand-06.png" alt="brand" />
                  </div>

                  <div className="mx-4 w-25">
                    <img src="images/brand-07.png" alt="brand" />
                  </div>
                  <div>
                    <img src="images/brand-08.png" alt="brand" />
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
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
            <BlogCard/>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

import { useState } from "react"; 
import ReactStars from "react-rating-stars-component";

import BreadCrumb from "../components/BreadCrumb"
import MetaTitle from "../components/MetaTitle"
import Colors from "../components/Colors";
import ProductCard from "../components/ProductCard";

import gr from "/images/gr.svg"
import gr2 from "/images/gr2.svg"
import gr3 from "/images/gr3.svg"
import gr4 from "/images/gr4.svg"



const OurStore = () => {
  const [grid, setGrid] = useState()

  return (
    <>
      <MetaTitle title={"Our Store"} />
      <BreadCrumb title="Our Store" />

      <section className="ourstore-wrapper home-wrapper-2 py-4">
        <div className="container-xxl">
          <div className="row">

            <div className="col-3">
              <div className="filter-card mb-3">
                <h3 className="filter-title">Shop By Catagories</h3>
                <ul className="ps-0 mb-0">
                  <li>Watch</li>
                  <li>TV</li>
                  <li>Laptop</li>
                  <li>Camera</li>
                </ul>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title mb-4">Filter By</h3>
                <h4 className="filter-sub-title">Availability</h4>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label className="form-check-label" htmlFor="stock">
                      In Stock(5)
                    </label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                    <label className="form-check-label" htmlFor="outstock">
                      Out Of Stock(0)
                    </label>
                  </div>

                  <div>
                    <p className="filter-sub-title pt-3">price</p>

                    <div className="d-flex align-items-center gap-10">
                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="From" placeholder="From"/>
                        <label htmlFor="floatingInput1">From</label>
                      </div>

                      <div className="form-floating mb-3">
                        <input type="email" className="form-control" id="to" placeholder="From"/>
                        <label htmlFor="floatingInput2">To</label>
                      </div>
                    </div>
                  </div>

                  <div>
                    <p className="filter-sub-title pt-3">Color</p>

                    <div className="">
                      <Colors />
                    </div>
                  </div>

                  <div>
                    <h4 className="filter-sub-title pt-3">Size</h4>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                      <label className="form-check-label" htmlFor="stock">
                        S(1)
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked"/>
                      <label className="form-check-label" htmlFor="outstock">
                        M(1)
                      </label>
                    </div>
                  </div>
              </div>

              <div className="filter-card mb-3">
                  <h3 className="filter-title">Products Tags</h3>
                  <div className="product-tag d-flex flex-wrap align-items-center gap-10 pt-3">
                    <span className="badge bg-light text-secondary rounded-3 p-2">headphone</span>
                    <span className="badge bg-light text-secondary rounded-3 p-2">Laptop</span>
                    <span className="badge bg-light text-secondary rounded-3 p-2">Tv</span>
                    <span className="badge bg-light text-secondary rounded-3 p-2">watch</span>
                    <span className="badge bg-light text-secondary rounded-3 p-2">cellphone</span>
                  </div>
              </div>

              <div className="filter-card mb-3">
                <h3 className="filter-title">Random Products</h3>
                <div className="random-products border-bottom d-flex">
                  <div className="pt-4">
                    <img className="img-fluid " src="/images/watch.jpg" alt="watch" />
                  </div>

                  <div className="random-products-content">
                    <h6 className="pt-4">Lorem ipsum dolor sit ametg elit.</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p>$100.00</p>
                  </div>
                </div>

                <div className="random-products d-flex">
                  <div className="pt-4">
                    <img className="img-fluid" src="/images/watch.jpg" alt="watch" />
                  </div>

                  <div className="random-products-content">
                    <h6 className="pt-4">Lorem ipsum dolor sit ametg elit.</h6>
                    <ReactStars
                      count={5}
                      size={24}
                      value={4}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <p className="mb-0">$100.00</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-9">
              <div className="row">
                <div className="sort-grid sort-menu d-flex align-items-center justify-content-between ">

                    <div className="d-flex gap-10 align-items-center justify-content-center">
                      <p className="mb-0 filter-card-price" style={{"width": "123px"}}>Sort By :</p>
                      <select className="filter-card-price form-control form-select bg-light">
                        <option>Abc</option>
                        <option>Abc</option>
                        <option>Abc</option>
                        <option>Abc</option>
                        <option>Abc</option>
                      </select>
                    </div>

                  <div className="d-flex align-items-center gap-10">
                    <p className="mb-0">21 Products</p>

                    <div className="gr-img">
                      <img onClick={()=>{setGrid(3)}} 
                      src={gr4} 
                      alt="gr"  
                      />
                    </div>

                    <div className="gr-img">
                      <img onClick={()=>{setGrid(4)}}
                      src={gr3}
                      alt="gr" 
                      />
                    </div>

                    <div className="gr-img">
                      <img  onClick={()=>{setGrid(6)}}
                      src={gr2} 
                      alt="gr"
                      />
                       
                    </div>

                    <div className="gr-img">
                      <img onClick={()=>{setGrid(12)}}
                      src={gr}
                      alt="gr"
                       />
                    </div>
                  </div>

                </div>



              </div>

              <div className=" py-5 ">
                <div className="d-flex gap-15 flex-wrap">
                  <ProductCard grid={grid} />
                  <ProductCard grid={grid} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default OurStore

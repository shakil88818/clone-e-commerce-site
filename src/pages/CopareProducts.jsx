import BreadCrumb from "../components/BreadCrumb"
import Colors from "../components/Colors"
import MetaTitle from "../components/MetaTitle"

import cross from '/images/cross.svg'
import watch from '/images/watch.jpg'

const CompareProducts = () => {
  return (
    <>
        <MetaTitle title={"Compare Products"} />
        <BreadCrumb title="Compare Products" />
        <div className="compare-wrapper home-wrapper-2 py-5">
            <div className="container-xxl">
                <div className="row">

                    <div className="col-3">
                        <div className="compare-card position-relative">
                            <img className="img-fluid compare-cross position-absolute" src={cross} alt="cross" />
                            <div className="compare-img">
                                <img className="img-fluid" src={watch} alt="watch" />
                            </div>
                        </div>

                        <div className="compare-content">
                            <h4 className="title pt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
                            <p>$100.00</p>

                            <div className="product-details">
                                <h6>Brand</h6>
                                <p>Sony</p>
                            </div>

                            <div className="product-details">
                                <h6>Type</h6>
                                <p>Watch</p>
                            </div>

                            <div className="product-details">
                                <h6>SKW</h6>
                                <p>Sony</p>
                            </div>

                            <div className="product-details">
                                <h6>Availability</h6>
                                <p>i stock</p>
                            </div>

                            <div className="product-details">
                                <h6>Color</h6>
                                <Colors />
                            </div>

                            <div className="product-details">
                                <h6>size</h6>
                                <p>S(1)</p>
                            </div>
                        </div>
                        
                    </div>

                    <div className="col-3">
                        <div className="compare-card position-relative">
                            <img className="img-fluid compare-cross position-absolute" src={cross} alt="cross" />
                            <div className="compare-img">
                                <img className="img-fluid" src={watch} alt="watch" />
                            </div>
                        </div>

                        <div className="compare-content">
                            <h4 className="title pt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
                            <p>$100.00</p>

                            <div className="product-details">
                                <h6>Brand</h6>
                                <p>Sony</p>
                            </div>

                            <div className="product-details">
                                <h6>Type</h6>
                                <p>Watch</p>
                            </div>

                            <div className="product-details">
                                <h6>SKW</h6>
                                <p>Sony</p>
                            </div>

                            <div className="product-details">
                                <h6>Availability</h6>
                                <p>i stock</p>
                            </div>

                            <div className="product-details">
                                <h6>Color</h6>
                                <Colors />
                            </div>

                            <div className="product-details">
                                <h6>size</h6>
                                <p>S(1)</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
      
    </>
  )
}

export default CompareProducts

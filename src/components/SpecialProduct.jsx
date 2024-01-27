import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

const SpecialProduct = () => {
  return (
    <>
      <div className="col-6 mb-4">
        <div className="special-product-card d-flex justify-content-between gap-10">
            <div className="special-img">
                <img className="img-fluid" src="/images/watch.jpg" alt="watch" />
            </div>

            <div className="special-product-content">
            <h6 className="pb-1">Sony</h6>
                <h5 className="text-dark">New Sony Smart Watch Lorem ipsum dolor sit.</h5>
                <ReactStars
                    count={5}
                    size={24}
                    value={4}
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className="pt-1 text-dark d-flex">
                    <span>$100.00</span> &nbsp; <strike>$200.88</strike>
                </p>

                <div className="discount-till d-flex align-items-center gap-10">
                    <p className="mb-0">5 days</p>

                    <div className="d-flex align-items-center gap-10 ">
                        <span className="badge rounded-circle p-2 bg-danger">1</span>:
                        <span className="badge rounded-circle p-2 bg-danger">1</span>:
                        <span className="badge rounded-circle p-2 bg-danger">1</span>
                    </div>
                </div>

                <div className="product-count py-2">
                    <p className="mb-0">5 Products: </p>
                    <div className="progress">
                        <div 
                            className="progress-bar" 
                            role="progressbar" 
                            style={{"width": "25%"}} 
                            aria-valuenow="25" 
                            aria-valuemin="0" 
                            aria-valuemax="100">
                        </div>
                    </div>
                </div>

                <Link className="button my-4 ">Add To Card</Link>
            </div>
        </div>
      </div>
    </>
  )
}

export default SpecialProduct

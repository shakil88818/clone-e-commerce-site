import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";


const ProductCard = () => {
  return (
    <>
      <div className="col-3">
        <Link className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link><img src="/images/wish.svg" alt="wishlist" /></Link>
            </div>
            <div className="product-card-img">
                <img src="/images/watch.jpg" alt="watch" />
            </div>
            <div className="product-content ps-3 py-4">
                <h6 className="pb-1">Sony</h6>
                <h5 className="text-dark">New Sony Smart Watch Lorem ipsum dolor sit.</h5>
                <ReactStars
                    count={5}
                    size={24}
                    value="3" 
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className="pt-1 text-dark">Price:- $206.97</p>
            </div>

            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link><img src="/images/prodcompare.svg" alt="compare" /></Link>
                    <Link><img src="/images/add-cart.svg" alt="add-cart" /></Link>
                    <Link><img src="/images/view.svg" alt="view" /></Link>
                </div>
            </div>

        </Link>

        
      </div>
    </>
  )
}

export default ProductCard

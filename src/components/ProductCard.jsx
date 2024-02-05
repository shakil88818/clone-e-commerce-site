import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from "react-router-dom";

import wish from '/images/wish.svg'
import prodcompare from '/images/prodcompare.svg'
import add_cart from '/images/add-cart.svg'
import view from '/images/view.svg'

const ProductCard = (props) => {
  const {grid} = props
  let location = useLocation();
  console.log(location)
  return (
    <>
      <div className={`${location.pathname == "/ourstore" ? `gr-${grid}` : "col-3"} `}>
        <Link to='/product/:id' className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <Link><img src={wish} alt="wishlist" /></Link>
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
                    value={3} 
                    edit={false}
                    activeColor="#ffd700"
                />
                <p className="pt-1 text-dark">Price:- $206.97</p>
            </div>

            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <Link><img src={prodcompare} alt="compare" /></Link>
                    <Link><img src={add_cart} alt="add-cart" /></Link>
                    <Link><img src={view} alt="view" /></Link>
                </div>
            </div>

        </Link>

        
      </div>

      
    </>
  )
}

export default ProductCard

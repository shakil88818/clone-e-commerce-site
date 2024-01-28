import BreadCrumb from "../components/BreadCrumb"
import MetaTitle from "../components/MetaTitle"

const Wishlist = () => {
  return (
    <>
        <MetaTitle title={"Wishlist"} />
        <BreadCrumb title="Wishlist" />
        <div className="wishlist-wrapper py-5 home-wrapper-2">
            <div className="container-xxl">
                <div className="row">

                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img className="img-fluid position-absolute wishlist-cross" src="/images/cross.svg" alt="cross" />
                            <img className="" src="/images/watch.jpg" alt="watch" />
                        </div>

                        <div className="px-3">
                            <h4 className="title pt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
                            <p className="price-red">$100.00</p>
                        </div>
                        
                    </div>

                    <div className="col-3">
                        <div className="wishlist-card position-relative">
                            <img className="img-fluid position-absolute wishlist-cross" src="/images/cross.svg" alt="cross" />
                            <img className="" src="/images/watch.jpg" alt="watch" />
                        </div>

                        <div className="px-3">
                            <h4 className="title pt-3">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</h4>
                            <p className="price-red">$100.00</p>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
        </div>
    </>
  )
}

export default Wishlist

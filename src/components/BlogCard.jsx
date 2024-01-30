import { Link } from "react-router-dom"


const BlogCard = () => {
  return (
    <>
        <div className="blog-card">
            <div className="blog-card-img">
                <img className="img-fluid w-100 rounded-3" src="/images/blog-1.jpg" alt="blog1" />
            </div>
            <div className="blog-content px-3 py-4">
                <p>27 jan 2024</p>
                <h6>This is a blog card used for srmart</h6>
                <p className="b">Lorem ipsum dolor sit  Lorem ipsum dolor sit amet consectetur adipisicing..</p>
                <Link to='/blog/:id' className="button">Read More</Link>
            </div>
        </div>
    </>
  )
}

export default BlogCard

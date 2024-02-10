import BlogCard from "../components/BlogCard"
import BreadCrumb from "../components/BreadCrumb"
import Container from "../components/Container"
import MetaTitle from "../components/MetaTitle"

const Blog = () => {
  return (
    <>
        <MetaTitle title={"Blog"} />
        <BreadCrumb title="Blog" />
        <Container class1="blog-wrapper py-4 home-wrapper-2">
                <div className="row">
                    <div className="col-3">
                        <div className="filter-card mb-3">
                            <h3 className="filter-title">Find By Catagories</h3>
                            <ul className="ps-0 mb-0">
                            <li>Watch</li>
                            <li>TV</li>
                            <li>Laptop</li>
                            <li>Camera</li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-9">
                        <div className="row">
                            <div className="col-6 mb-3">
                                <BlogCard/>
                            </div>

                            <div className="col-6 mb-3">
                                <BlogCard/>
                            </div>

                            <div className="col-6 mb-3">
                                <BlogCard/>
                            </div>

                            <div className="col-6 mb-3">
                                <BlogCard/>
                            </div>
                        </div>
                    </div>
                </div>
        </Container>

    </>
  )
}

export default Blog

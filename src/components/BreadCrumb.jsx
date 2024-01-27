import { Link } from "react-router-dom"

const BreadCrumb = ({title}) => {
  return (
    <>
      <div className="bread-crumb py-4">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <p className="mb-0 text-center">
                        <Link className="text-dark" to='/'>Home &nbsp;</Link>/ {title}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BreadCrumb

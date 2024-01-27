import { Link } from "react-router-dom"

const BreadCrumb = ({title}) => {
  return (
    <>
      <div className="bread-crumb">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <p>
                        <Link to='/'>Home &nbsp;</Link>/ {title}
                    </p>
                </div>
            </div>
        </div>
      </div>
    </>
  )
}

export default BreadCrumb

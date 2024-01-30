import { Link } from "react-router-dom"
import BreadCrumb from "../components/BreadCrumb"
import MetaTitle from "../components/MetaTitle"

const ForgotPassword = () => {
  return (
    <>
        <MetaTitle title={"Forgot Password"} />
        <BreadCrumb title="Forgot Password" />

        <div className="forgot-password-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
            <div className="row">
              <div className="login-box">
                <div className="login-card forgot-pass">
                  <h6 className="text-center mb-3">Reset Your Password</h6>
                  <p className="text-center mb-3">we will send you an email reset your password</p>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="Enter your Email"
                    />
                  </div>


                  <div className="d-flex align-items-center flex-column justify-content-center gap-15">
                    <button className="button border-0" type="submit">Submit</button>
                    <Link to="/login" className="text-dark">Cancel</Link>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ForgotPassword

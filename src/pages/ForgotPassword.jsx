import { Link } from "react-router-dom"
import BreadCrumb from "../components/BreadCrumb"
import MetaTitle from "../components/MetaTitle"
import Container from "../components/Container"
import CustomInput from "../components/CustomInput"

const ForgotPassword = () => {
  return (
    <>
        <MetaTitle title={"Forgot Password"} />
        <BreadCrumb title="Forgot Password" />
        <Container class1="forgot-password-wrapper home-wrapper-2 py-5">
            <div className="row">
              <div className="login-box">
                <div className="login-card forgot-pass">
                  <h6 className="text-center mb-3">Reset Your Password</h6>
                  <p className="text-center mb-3">we will send you an email reset your password</p>
                  
                  <CustomInput 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="Enter your Email"                 
                  />

                  <div className="d-flex align-items-center flex-column justify-content-center gap-15">
                    <button className="button border-0" type="submit">Submit</button>
                    <Link to="/login" className="text-dark">Cancel</Link>
                  </div>

                </div>
              </div>
            </div>
        </Container>
    </>
  )
}

export default ForgotPassword

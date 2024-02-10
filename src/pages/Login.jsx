import { Link } from "react-router-dom"
import BreadCrumb from "../components/BreadCrumb"
import MetaTitle from "../components/MetaTitle"
import Container from "../components/Container"
import CustomInput from "../components/CustomInput"

const Login = () => {
  return (
    <>
        <MetaTitle title={"Login"} />
        <BreadCrumb title="Login" />
        <Container class1="login-wrapper home-wrapper-2 py-5">
            <div className="row">
              <div className="">
                <div className="login-card ">
                  <h5 className="text-center mb-3">login</h5>

                  <CustomInput 
                      type="email" 
                      name="email"
                      className="form-control" 
                      id="email" 
                      placeholder="Enter your Email"
                  />

                  <CustomInput 
                      type="password" 
                      name="password"
                      className="form-control" 
                      id="password" 
                      placeholder="Enter your password"
                  />
                  
                  <p>
                    <Link to="/forgot-password" className="mb-2">Forgot your password?</Link>
                  </p>

                  <div className="d-flex align-items-center justify-content-center gap-15">
                    <button className="button border-0">Log in</button>
                    <Link to="/sign-up" className="button border-0 signup">Sign Up</Link>
                  </div>

                </div>
              </div>
            </div>
        </Container>
      
    </>
  )
}

export default Login

import { Link } from "react-router-dom"
import BreadCrumb from "../components/BreadCrumb"
import MetaTitle from "../components/MetaTitle"

const Login = () => {
  return (
    <>
        <MetaTitle title={"Login"} />
        <BreadCrumb title="Login" />

        <div className="login-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="login-box">
                <div className="login-card ">
                  <h4 className="text-center mb-3">login</h4>
                  <div className="mb-3">
                    <input 
                      type="email" 
                      className="form-control" 
                      id="email" 
                      placeholder="Enter your Email"
                    />
                  </div>

                  <div className="mb-3">
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      placeholder="Enter your password"
                    />
                  </div>

                  <p>
                    <Link to="/forgot-password" className="mb-2">Forgot your password?</Link>
                  </p>

                  <div className="d-flex align-items-center justify-content-center gap-15">
                    <button className="button border-0">Log in</button>
                    <button className="button border-0 signup">Sign Up</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  )
}

export default Login

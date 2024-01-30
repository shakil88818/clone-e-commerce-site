
import BreadCrumb from "../components/BreadCrumb"
import MetaTitle from "../components/MetaTitle"

const Signup = () => {
  return (
    <>
        <MetaTitle title={"Sign up"} />
        <BreadCrumb title="Sign Up" />

        <div className="login-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="login-box">
                <div className="login-card ">
                  <h5 className="text-center mb-3">Create Account</h5>

                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="FirstName" 
                      placeholder="First Name"
                    />
                  </div>

                  <div className="mb-3">
                    <input 
                      type="text" 
                      className="form-control" 
                      id="lastName" 
                      placeholder="Last Name"
                    />
                  </div>

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


                  <div className="d-flex align-items-center justify-content-center gap-15">
                    <button className="button border-0">Create</button>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default Signup

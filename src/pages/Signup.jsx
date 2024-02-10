
import BreadCrumb from "../components/BreadCrumb"
import Container from "../components/Container"
import CustomInput from "../components/CustomInput"
import MetaTitle from "../components/MetaTitle"

const Signup = () => {
  return (
    <>
        <MetaTitle title={"Sign up"} />
        <BreadCrumb title="Sign Up" />
        <Container class1="login-wrapper home-wrapper-2 py-5">
            <div className="row">
              <div className="login-box">
                <div className="login-card ">
                  <h5 className="text-center mb-3">Create Account</h5>

                  <CustomInput                       
                    type="text"
                    name="firstname"
                    className="form-control" 
                    id="FirstName" 
                    placeholder="First Name"
                  />

                  <CustomInput                       
                      type="text" 
                      name="lastName"
                      className="form-control" 
                      id="lastName" 
                      placeholder="Last Name"
                  />

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

                  <div className="d-flex align-items-center justify-content-center gap-15">
                    <button className="button border-0">Create</button>
                  </div>

                </div>
              </div>
            </div>
        </Container>
    </>
  )
}

export default Signup

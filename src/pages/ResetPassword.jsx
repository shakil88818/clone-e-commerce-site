
import BreadCrumb from "../components/BreadCrumb"
import Container from "../components/Container"
import CustomInput from "../components/CustomInput"
import MetaTitle from "../components/MetaTitle"

const ResetPassword = () => {
  return (
    <>
        <MetaTitle title={"Reset password"} />
        <BreadCrumb title="Reset password" />
        <Container class1="login-wrapper home-wrapper-2 py-5">
            <div className="row">
              <div className="">
                <div className="login-card ">
                  <h5 className="text-center mb-3">Reset Password</h5>

                  <CustomInput 
                      type="password" 
                      name="password"
                      className="form-control" 
                      id="password" 
                      placeholder="password"
                  />
                  <CustomInput 
                      type="password"
                      name="confirmPassword"
                      className="form-control" 
                      id="confirm-password" 
                      placeholder="confirm password"
                  />                  

                  <div className="d-flex align-items-center justify-content-center gap-15">
                    <button className="button border-0">Ok</button>
        
                  </div>

                </div>
              </div>
            </div>
        </Container>
    </>
  )
}

export default ResetPassword


import BreadCrumb from "../components/BreadCrumb"
import MetaTitle from "../components/MetaTitle"

const ResetPassword = () => {
  return (
    <>
        <MetaTitle title={"Reset password"} />
        <BreadCrumb title="Reset password" />

        <div className="login-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="">
                <div className="login-card ">
                  <h5 className="text-center mb-3">Reset Password</h5>


                  <div className="mb-3">
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      placeholder="password"
                    />
                  </div>

                  
                  <div className="mb-3">
                    <input 
                      type="password" 
                      className="form-control" 
                      id="password" 
                      placeholder="confirm password"
                    />
                  </div>


                  <div className="d-flex align-items-center justify-content-center gap-15">
                    <button className="button border-0">Ok</button>
        
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ResetPassword

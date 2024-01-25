


const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-6">
              <div className="d-flex align-items-center gap-10">
              <img src="/images/newsletter.png" alt="newsletter"/>
              <h4 className="text-white mb-0">Sign Up For Newsletter</h4>
              </div>
            </div>

            <div className="col-5">
              <div className="input-group">
                <input 
                  type="text" 
                  className="form-control py-1" 
                  placeholder="Your email address..." 
                  aria-label="Your email address..." 
                  aria-describedby="basic-addon2" 
                />
                <span className="input-group-text text-white" id="basic-addon2">
                  Subscribe
                </span>
              </div>
            </div>
            

          </div>
        </div>

      </footer>

      <footer className="py-4"></footer>

      <footer className="py-4">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <p className="text-white text-center mb-0">&copy; {new Date().getFullYear()} powered by SRMART || Shakil Khan </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

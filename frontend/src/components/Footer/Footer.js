import React from 'react'

export default function Footer() {
  return (
    <div>
      {/* <div className="inc:_footer.html"> */}
      {/* ================== Footer  ================== */}
      <footer>
        <div className="container">
          {/*footer showroom*/}
          <div className="footer-showroom">
            <div className="row">
              <div className="col-sm-8">
                <h2>Worship in any of our branch</h2>
                <p>2 Tiwalade Street, Ladipo/shogunle Lagos, Nigeria 10001, NGR</p>
                <p>
                  Mon - Sat: 10 am - 6 pm &nbsp; &nbsp; | &nbsp; &nbsp; Sun: 12pm -
                  2 pm
                </p>
              </div>
              <div className="col-sm-4 text-center">
                <a href onClick={(e) => { e.preventDefault() }} className="btn btn-clean">
                  <span className="icon icon-map-marker" /> Get directions
                </a>
                <div className="call-us h4">
                  <span className="icon icon-phone-handset" /> +234 803 941 5912
                </div>
              </div>
            </div>
          </div>
          {/*footer links*/}
          <div className="footer-links">
            <div className="row">
              <div className="col-sm-4 col-md-2">
                <h5>Download Messages</h5>
                <ul>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }}>Brand</a>
                  </li>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }}>Product</a>
                  </li>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }}>Category</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-2">
                <h5>Resources</h5>
                <ul>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }}>Design</a>
                  </li>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }}>Projects</a>
                  </li>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }} >Sales</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-4 col-md-2">
                <h5>About the Ministry</h5>
                <ul>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }} >About</a>
                  </li>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }} >News</a>
                  </li>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }} >Contact</a>
                  </li>
                </ul>
              </div>
              <div className="col-sm-12 col-md-6">
                <h5>Sign up for our newsletter</h5>
                <p>
                  <i>
                    Add your email address to sign up for our monthly emails and to
                    receive promotional offers.
                  </i>
                </p>
                <div className="form-group form-newsletter">
                  <input
                    className="form-control"
                    type="text"
                    name="email"
                    defaultValue
                    placeholder="Email address"
                  />
                  <input
                    type="submit"
                    className="btn btn-clean btn-sm"
                    defaultValue="Subscribe"
                  />
                </div>
              </div>
            </div>
          </div>
          {/*footer social*/}
          <div className="footer-social">
            <div className="row">
              <div className="col-sm-6">
                <a
                  href="https://themeforest.net/item/mobel-furniture-website-template/20382155"
                  target="_blank"  rel="noopener noreferrer"
                >
                  <i className="fa fa-download" /> Download a free ebook
                </a>{" "}
                &nbsp; | <a href onClick={(e) => { e.preventDefault() }} >Sitemap</a> &nbsp; | &nbsp;{" "}
                <a href onClick={(e) => { e.preventDefault() }} >Privacy policy</a>
              </div>
              <div className="col-sm-6 links">
                <ul>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }} >
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }} >
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }} >
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }} >
                      <i className="fa fa-youtube" />
                    </a>
                  </li>
                  <li>
                    <a href onClick={(e) => { e.preventDefault() }} >
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>

    // </div>
  )
}

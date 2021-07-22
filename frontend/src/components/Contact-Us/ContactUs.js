import React, { Component } from 'react'
import gall2 from '../../assets/images/gallery-2.jpg'

export default class ContactUs extends Component {
  render() {
    return (
      <div>
        <>
          <section
            className="main-header"
            style={{ backgroundImage: `url(${gall2})` }}
          >
            <header>
              <div className="container text-center">
                <h2 className="h2 title">Contact</h2>
                <ol className="breadcrumb breadcrumb-inverted">
                  <li>
                    <a href="/#region ">
                      <span className="icon icon-home" />
                    </a>
                  </li>
                  <li>
                    <a className="active" href="/contact-us">
                      Contact
                    </a>
                  </li>
                </ol>
              </div>
            </header>
          </section>
          {/* ========================  Contact ======================== */}
          <section className="contact">
            {/* === Goolge map === */}
            <div id="map" />
            <div className="container">
              <div className="row">
                <div className="col-sm-10 col-sm-offset-1 col-md-10 col-md-offset-1">
                  <div className="contact-block">
                    <div className="contact-info">
                      <div className="row">
                        <div className="col-sm-4">
                          <figure className="text-center">
                            <span className="icon icon-map-marker" />
                            <figcaption>
                              <strong>Where are we?</strong>
                              <span>
                                2 Tiwalade Street, Ladipo/shogunle Lagos, <br />
                                Nigeria 10001, NGR
                              </span>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="col-sm-4">
                          <figure className="text-center">
                            <span className="icon icon-phone" />
                            <figcaption>
                              <strong>Call us</strong>
                              <span>
                                <strong>T</strong> +234 806 355 3603 <br />
                                <strong>F</strong> +234 806 355 3603
                              </span>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="col-sm-4">
                          <figure className="text-center">
                            <span className="icon icon-clock" />
                            <figcaption>
                              <strong>Working hours</strong>
                              <span>
                                <strong>Mon</strong> - Sat: 10 am - 6 pm <br />
                                <strong>Sun</strong> 12pm - 2 pm
                              </span>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                    <div className="banner">
                      <div className="row">
                        <div className="col-md-offset-1 col-md-10 text-center">
                          <h2 className="title">Send an email</h2>
                          <p>
                            Thanks for your interest in getting to know or talk to us. We believe in
                            helping to get your spiritual needs met, which form the major reason why we exist. Please
                            use this form if you have any questions about any of our programmes or need counselling
                            and we'll get back to you very soon.
                          </p>
                          <div className="contact-form-wrapper">
                            <a href="/#region "
                              className="btn btn-clean open-form"
                              data-text-open="Contact us via form"
                              data-text-close="Close form"
                            >
                              Contact us via form
                            </a>
                            <div className="contact-form clearfix">
                              <form
                                id="sendmail"
                                name="sendmail"
                                action="http://www.elathemes.com/themes/mobel/sendmail.php"
                                method="post"
                              >
                                <div className="row">
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        id="Name"
                                        name="Name"
                                        type="text"
                                        defaultValue
                                        className="form-control"
                                        placeholder="Your name"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-6">
                                    <div className="form-group">
                                      <input
                                        id="Email"
                                        name="Email"
                                        type="email"
                                        defaultValue
                                        className="form-control"
                                        placeholder="Your email"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <input
                                        id="Subject"
                                        name="Subject"
                                        type="text"
                                        defaultValue
                                        className="form-control"
                                        placeholder="Subject"
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-12">
                                    <div className="form-group">
                                      <textarea
                                        id="Comment"
                                        name="Comment"
                                        className="form-control"
                                        placeholder="Your message"
                                        rows={10}
                                        defaultValue={""}
                                      />
                                    </div>
                                  </div>
                                  <div className="col-md-12 text-center">
                                    <input
                                      type="submit"
                                      className="btn btn-clean"
                                      defaultValue="Send message"
                                    />
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="contact-info">
                      <div className="row">
                        <div className="col-xs-6 col-sm-4">
                          <figure>
                            <figcaption>
                              <strong>Counselling</strong>
                              <span>
                                <strong>T</strong> +234 806 355 3603 <br />
                                <strong>F</strong> +234 803 941 5912
                              </span>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="col-xs-6 col-sm-4">
                          <figure>
                            <figcaption>
                              <strong>Enquiry</strong>
                              <span>
                                <strong>T</strong> +234 806 355 3603 <br />
                                <strong>F</strong> +234 803 941 5912
                              </span>
                            </figcaption>
                          </figure>
                        </div>
                        <div className="col-xs-6 col-sm-4">
                          <figure>
                            <figcaption>
                              <strong>Support</strong>
                              <span>
                                <strong>T</strong> +234 806 355 3603 <br />
                                <strong>F</strong> +234 803 941 5912
                              </span>
                            </figcaption>
                          </figure>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/*col-sm-8*/}
              </div>{" "}
              {/*/row*/}
            </div>
            {/*/container*/}
          </section>
        </>

      </div>
    )
  }
}

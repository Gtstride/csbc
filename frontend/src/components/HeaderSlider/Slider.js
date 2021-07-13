import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Slider = () => {
  return (
    <div>
      <section className="header-content">
        <div className="owl-slider">
          {/* === slide item === */}
          <div className="item"
          // style={{ backgroundImage: "url(../src/assets/images/gallery-1.jpg)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Modern furniture theme
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  Modern &amp; powerfull template. <br /> Clean design &amp; reponsive
                  layout. Google fonts integration
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a
                    href="https://themeforest.net/item/mobel-furniture-website-template/20382155"
                    target="_blank"
                    className="btn btn-main"
                  >
                    <i className="icon icon-cart" /> Buy this template
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* === slide item === */}
          <div
            className="item galla-2"
          // style={{ backgroundImage: "url(assets/images/gallery-2.jpg)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Mobile ready!
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  Unlimited Choices. Unbeatable Prices. Free Shipping.
                </div>
                <div className="animated" data-animation="fadeInUp">
                  Furniture category icon fonts!
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a href="category.html" className="btn btn-clean">
                    Get insipred
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* === slide item === */}
          <div
            className="item galla-3"
          // style={{ backgroundImage: "url(assets/images/gallery-2.jpg)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Mobile ready!
                </h2>
                <div className="animated" data-animation="fadeInUp">
                  Unlimited Choices. Unbeatable Prices. Free Shipping.
                </div>
                <div className="animated" data-animation="fadeInUp">
                  Furniture category icon fonts!
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a href="category.html" className="btn btn-clean">
                    What More do you require
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* === slide item === */}
          <div
            className="item glla-4"
          // style={{ backgroundImage: "url(assets/images/gallery-3.jpg)" }}
          >
            <div className="box">
              <div className="container">
                <h2 className="title animated h1" data-animation="fadeInDown">
                  Very Animate.css Friend.
                </h2>
                <div className="desc animated" data-animation="fadeInUp">
                  Combine with animate.css. Or just use your own!.
                </div>
                <div className="desc animated" data-animation="fadeInUp">
                  Bunch of typography effects.
                </div>
                <div className="animated" data-animation="fadeInUp">
                  <a
                    href="https://themeforest.net/item/mobel-furniture-website-template/20382155"
                    target="_blank"
                    className="btn btn-clean"
                  >
                    Buy this template
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*/owl-slider*/}
      </section>

    </div>
  )
}

export default Slider

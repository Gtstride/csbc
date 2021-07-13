import React from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from "../../assets/images/logo.png";
import blog from "../../assets/images/blog-2.jpg";
import product1 from "../../assets/images/product-1.png";
import product2 from "../../assets/images/product-2.png";
import product3 from "../../assets/images/product-2.png";
import product4 from "../../assets/images/product-2.png";

const Navbar = () => {
  return (
    <div>
      {/* <div className="inc:_header.html"> */}
      <nav className="navbar-fixed">
        <div className="container">
          {/* ==========  Top navigation ========== */}
          <div className="navigation navigation-top clearfix">
            <ul>
              {/*add active class for current page*/}
              <li>
                <a href="#">
                  <i className="fa fa-facebook" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <i className="fa fa-twitter" />
                </a>
              </li>
              <li>
                <a href="/#">
                  <i className="fa fa-youtube" />
                </a>
              </li>
              {/*Currency selector*/}
              <li className="nav-settings">
                <a href="javascript:void(0);" className="nav-settings-value">
                  {" "}
                  USD $
                </a>
                <ul className="nav-settings-list">
                  <li>USD $</li>
                  <li>EUR €</li>
                  <li>CHF Fr.</li>
                  <li>GBP £</li>
                </ul>
              </li>
              {/*Language selector*/}
              <li className="nav-settings">
                <a href="/#" className="nav-settings-value">
                  {" "}
                  ENG
                </a>
                <ul className="nav-settings-list">
                  <li>ENG</li>
                  <li>GER</li>
                  <li>لعربية</li>
                  <li>עִבְרִית</li>
                </ul>
              </li>
              <li>
                <a href="#" className="open-login">
                  <i className="icon icon-user" />
                </a>
              </li>
              <li>
                <a href="#" className="open-search">
                  <i className="icon icon-magnifier" />
                </a>
              </li>
              <li>
                <a href="#" className="open-cart">
                  <i className="icon icon-cart" />
                  <span>3</span>
                </a>
              </li>
            </ul>
          </div>
          {/*/navigation-top*/}
          {/* ==========  Main navigation ========== */}
          <div className="navigation navigation-main">
            {/* Setup your logo here*/}

            <a href="#"
              className="logo"
            >
              <img src={logo} alt="Logo" />
            </a>
            {/* Mobile toggle menu */}
            <a href="/" className="open-menu"> <i className="icon icon-menu" /> </a>
            {/* Convertible menu (mobile/desktop)*/}
            <div className="floating-menu">
              {/* Mobile toggle menu trigger*/}
              <div className="close-menu-wrapper">
                <span className="close-menu">
                  <i className="icon icon-cross" />
                </span>
              </div>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                {/* Multi-content dropdown */}
                <li>
                  <a href="/">
                    Pages{" "}
                    <span className="open-dropdown">
                      <i className="fa fa-angle-down" />
                    </span>
                  </a>
                  <div className="navbar-dropdown">
                    <div className="navbar-box">
                      {/* box-1 (left-side)*/}
                      <div className="box-1">
                        <div className="box">
                          <div className="h2">Find your inspiration</div>
                          <div className="clearfix">
                            <p>
                              Homes that differ in terms of style, concept and
                              architectural solutions have been furnished by Furniture
                              Factory. These spaces tell of an international lifestyle
                              that expresses modernity, research and a creative
                              spirit.
                            </p>
                            <a
                              className="btn btn-clean btn-big"
                              href="http://www.elathemes.com/themes/mobel/products-grid.html"
                            >
                              Shop now
                            </a>
                          </div>
                        </div>
                      </div>
                      {/* box-2 (right-side)*/}
                      <div className="box-2">
                        <div className="box clearfix">
                          <div className="row">
                            <div className="col-md-4">
                              <ul>
                                <li className="label">Homepage</li>
                                <li>
                                  <a href="/#endregion">
                                    Home - Slider
                                  </a>
                                </li>
                                <li>
                                  <a href="/#">
                                    Home - Tabsy gallery
                                  </a>
                                </li>
                                <li>
                                  <a href="#?">
                                    Home - Slider full screen
                                  </a>
                                </li>
                                <li>
                                  <a href="#?">
                                    Home - Info icons
                                  </a>
                                </li>
                                <li>
                                  <a href="#/">
                                    Home - Xmas
                                  </a>
                                </li>
                                <li>
                                  <a href="http://www.elathemes.com/themes/mobel/index-rtl.html">
                                    Home - RTL{" "}
                                    <span className="label label-warning">New</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="http://www.elathemes.com/themes/mobel/index-5.html">
                                    Onepage
                                  </a>
                                </li>
                                <li>
                                  <a href="http://www.elathemes.com/themes/mobel/index-6.html">
                                    Onepage - Filters{" "}
                                    <span className="label label-warning">
                                      Isotope
                                    </span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4">
                              <ul>
                                <li className="label">Blog</li>
                                <li>
                                  <a href="http://www.elathemes.com/themes/mobel/blog-grid.html">
                                    Blog grid
                                  </a>
                                </li>
                                <li>
                                  <a href="http://www.elathemes.com/themes/mobel/blog-list.html">
                                    Blog list
                                  </a>
                                </li>
                                <li>
                                  <a href="http://www.elathemes.com/themes/mobel/blog-grid-fullpage.html">
                                    Blog fullpage
                                  </a>
                                </li>
                                <li>
                                  <a href="http://www.elathemes.com/themes/mobel/ideas.html">
                                    Blog ideas
                                  </a>
                                </li>
                                <li>
                                  <a href="http://www.elathemes.com/themes/mobel/article.html">
                                    Blog article
                                  </a>
                                </li>
                              </ul>
                            </div>
                            <div className="col-md-4">
                              <ul>
                                <li className="label">Pages</li>
                                <li>
                                  <a href="about.html">
                                    About us
                                  </a>
                                </li>
                                <li>
                                  <a href="contact.html">
                                    Contact
                                  </a>
                                </li>
                                <li>
                                  <a href="login.html">
                                    Login &amp; Register{" "}
                                    <span className="label label-warning">New</span>
                                  </a>
                                </li>
                              </ul>
                              <ul>
                                <li className="label">Extras</li>
                                <li>
                                  <a href="http://www.elathemes.com/themes/mobel/shortcodes.html">
                                    Shortcodes
                                  </a>
                                </li>
                                <li>
                                  <a href="http://www.elathemes.com/themes/mobel/email-receipt.html">
                                    Email template{" "}
                                    <span className="label label-warning">New</span>
                                  </a>
                                </li>
                                <li>
                                  <a href="http://www.elathemes.com/themes/mobel/404.html">
                                    Not found 404{" "}
                                    <span className="label label-warning">New</span>
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          {/*/row*/}
                        </div>
                        {/*/box*/}
                      </div>
                      {/*/box-2*/}
                    </div>
                    {/*/navbar-box*/}
                  </div>
                  {/*/navbar-dropdown*/}
                </li>
                {/* Single dropdown*/}
                <li>
                  <a href="http://www.elathemes.com/themes/mobel/index.html#">
                    Shop{" "}
                    <span className="open-dropdown">
                      <i className="fa fa-angle-down" />
                    </span>
                  </a>
                  <div className="navbar-dropdown navbar-dropdown-single">
                    <div className="navbar-box">
                      {/* box-2 (without 'box-1', box-2 will be displayed as full width)*/}
                      <div className="box-2">
                        <div className="box clearfix">
                          <ul>
                            <li className="label">Shop</li>
                            <li>
                              <a href="http://www.elathemes.com/themes/mobel/products-grid.html">
                                Products grid
                              </a>
                            </li>
                            <li>
                              <a href="http://www.elathemes.com/themes/mobel/products-list.html">
                                Products list
                              </a>
                            </li>
                            <li>
                              <a href="http://www.elathemes.com/themes/mobel/category.html">
                                Products intro
                              </a>
                            </li>
                            <li>
                              <a href="http://www.elathemes.com/themes/mobel/products-topbar.html">
                                Products topbar
                              </a>
                            </li>
                            <li>
                              <a href="http://www.elathemes.com/themes/mobel/product.html">
                                Product overview
                              </a>
                            </li>
                          </ul>
                          <ul>
                            <li className="label">Shop Isotope</li>
                            <li>
                              <a href="http://www.elathemes.com/themes/mobel/products-grid-isotope.html">
                                Products filters{" "}
                                <span className="label label-warning">New</span>
                              </a>
                            </li>
                            <li>
                              <a href="http://www.elathemes.com/themes/mobel/products-topbar-isotope.html">
                                Products topbar{" "}
                                <span className="label label-warning">New</span>
                              </a>
                            </li>
                          </ul>
                          <ul>
                            <li className="label">Checkout</li>
                            <li>
                              <a href="http://www.elathemes.com/themes/mobel/checkout-1.html">
                                Checkout - Cart items
                              </a>
                            </li>
                            <li>
                              <a href="http://www.elathemes.com/themes/mobel/checkout-2.html">
                                Checkout - Delivery
                              </a>
                            </li>
                            <li>
                              <a href="http://www.elathemes.com/themes/mobel/checkout-3.html">
                                Checkout - Payment
                              </a>
                            </li>
                            <li>
                              <a href="http://www.elathemes.com/themes/mobel/checkout-4.html">
                                Checkout - Receipt
                              </a>
                            </li>
                          </ul>
                        </div>
                        {/*/box*/}
                      </div>
                      {/*/box-2*/}
                    </div>
                    {/*/navbar-box*/}
                  </div>
                  {/*/navbar-dropdown*/}
                </li>

                {/* Furniture icons in dropdown*/}
                <li>
                  <a href="#?">
                    Icons{" "}
                    <span className="open-dropdown">
                      <i className="fa fa-angle-down" />
                    </span>
                  </a>
                  <div className="navbar-dropdown">
                    <div className="navbar-box">
                      {/* box-1 (left-side)*/}
                      <div className="box-1">
                        <div className="image">
                          <img
                            src={blog}
                            alt="Lorem ipsum"
                          />
                        </div>
                        <div className="box">
                          <div className="h2">Best ideas</div>
                          <div className="clearfix">
                            <p>
                              Homes that differ in terms of style, concept and
                              architectural solutions have been furnished by Furniture
                              Factory. These spaces tell of an international lifestyle
                              that expresses modernity, research and a creative
                              spirit.
                            </p>
                            <a
                              className="btn btn-clean btn-big"
                              href="http://www.elathemes.com/themes/mobel/ideas.html"
                            >
                              Explore
                            </a>
                          </div>
                        </div>
                      </div>
                      {/*/box-1*/}
                      {/* box-2 (right-side)*/}
                      <div className="box-2">
                        <div className="clearfix categories">
                          <div className="row">
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="#?">
                                <figure>
                                  <i className="f-icon f-icon-sofa" />
                                  <figcaption>Sofa</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-armchair" />
                                  <figcaption>Armchairs</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-chair" />
                                  <figcaption>Chairs</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-dining-table" />
                                  <figcaption>Dining tables</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-media-cabinet" />
                                  <figcaption>Media storage</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-table" />
                                  <figcaption>Tables</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-bookcase" />
                                  <figcaption>Bookcase</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-bedroom" />
                                  <figcaption>Bedroom</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-nightstand" />
                                  <figcaption>Nightstand</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-children-room" />
                                  <figcaption>Children room</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-kitchen" />
                                  <figcaption>Kitchen</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-bathroom" />
                                  <figcaption>Bathroom</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-wardrobe" />
                                  <figcaption>Wardrobe</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-shoe-cabinet" />
                                  <figcaption>Shoe cabinet</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-office" />
                                  <figcaption>Office</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-bar-set" />
                                  <figcaption>Bar sets</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-lightning" />
                                  <figcaption>Lightning</figcaption>
                                </figure>
                              </a>
                            </div>
                            {/*icon item*/}
                            <div className="col-sm-3 col-xs-6">
                              <a href="javascript:void(0);">
                                <figure>
                                  <i className="f-icon f-icon-carpet" />
                                  <figcaption>Carpet</figcaption>
                                </figure>
                              </a>
                            </div>
                          </div>
                          {/*/row*/}
                        </div>
                        {/*/categories*/}
                      </div>
                      {/*/box-2*/}
                    </div>
                    {/*/navbar-box*/}
                  </div>
                  {/*/navbar-dropdown*/}
                </li>
                {/* Mega menu dropdown */}
                <li>
                  <a href="http://www.elathemes.com/themes/mobel/index.html#">
                    Megamenu{" "}
                    <span className="open-dropdown">
                      <i className="fa fa-angle-down" />
                    </span>
                  </a>
                  <div className="navbar-dropdown">
                    <div className="navbar-box">
                      <div className="box-2">
                        <div className="box clearfix">
                          <div className="row">
                            <div className="clearfix">
                              <div className="col-md-3">
                                <ul>
                                  <li className="label">Seating</li>
                                  <li>
                                    <a href="javascript:void(0);">Benches</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Submenu{" "}
                                      <span className="label label-warning">New</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Chaises</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Recliners</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3">
                                <ul>
                                  <li className="label">Storage</li>
                                  <li>
                                    <a href="javascript:void(0);">Bockcases</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Closets</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Wardrobes</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Dressers{" "}
                                      <span className="label label-success">
                                        Trending
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Sideboards </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3">
                                <ul>
                                  <li className="label">Tables</li>
                                  <li>
                                    <a href="javascript:void(0);">Consoles</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Desks</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Dining tables</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Occasional tables
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3">
                                <ul>
                                  <li className="label">Chairs</li>
                                  <li>
                                    <a href="javascript:void(0);">Dining Chairs</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Office Chairs</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Lounge Chairs
                                      <span className="label label-warning">
                                        Offer
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Stools</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                            <div className="clearfix">
                              <div className="col-md-3">
                                <ul>
                                  <li className="label">Kitchen</li>
                                  <li>
                                    <a href="javascript:void(0);">Kitchen types</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Kitchen elements
                                      <span className="label label-info">50%</span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Bars</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Wall decoration</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3">
                                <ul>
                                  <li className="label">Accessories</li>
                                  <li>
                                    <a href="javascript:void(0);">Coat Racks</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Lazy bags{" "}
                                      <span className="label label-success">
                                        Info
                                      </span>
                                    </a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3">
                                <ul>
                                  <li className="label">Beds</li>
                                  <li>
                                    <a href="javascript:void(0);">Beds</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Sofabeds</a>
                                  </li>
                                </ul>
                              </div>
                              <div className="col-md-3">
                                <ul>
                                  <li className="label">Entertainment</li>
                                  <li>
                                    <a href="javascript:void(0);">
                                      Wall units{" "}
                                      <span className="label label-warning">
                                        Popular
                                      </span>
                                    </a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Media sets</a>
                                  </li>
                                  <li>
                                    <a href="javascript:void(0);">Decoration</a>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/*/box*/}
                      </div>
                      {/*/box-2*/}
                    </div>
                    {/*/navbar-box*/}
                  </div>
                  {/*/navbar-dropdown*/}
                </li>
                {/* Simple menu link*/}
                <li>
                  <a href="http://www.elathemes.com/themes/mobel/shortcodes.html">
                    Shortcodes
                  </a>
                </li>
              </ul>
            </div>
            {/*/floating-menu*/}
          </div>
          {/*/navigation-main*/}
          {/* ==========  Search wrapper ========== */}
          <div className="search-wrapper">
            {/* Search form */}
            <input className="form-control" placeholder="Search..." />
            <button className="btn btn-main btn-search">Go!</button>
            {/* Search results - live search */}
            <div className="search-results">
              <div className="search-result-items">
                <div className="title h4">
                  Products{" "}
                  <a
                    href="http://www.elathemes.com/themes/mobel/index.html#"
                    className="btn btn-clean-dark btn-xs"
                  >
                    View all
                  </a>
                </div>
                <ul>
                  <li>
                    <a href="http://www.elathemes.com/themes/mobel/index.html#">
                      <span className="id">42563</span>
                      <span className="name">Green corner</span>{" "}
                      <span className="category">Sofa</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.elathemes.com/themes/mobel/index.html#">
                      <span className="id">42563</span>
                      <span className="name">Laura</span>{" "}
                      <span className="category">Armchairs</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.elathemes.com/themes/mobel/index.html#">
                      <span className="id">42563</span>
                      <span className="name">Nude</span>{" "}
                      <span className="category">Dining tables</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.elathemes.com/themes/mobel/index.html#">
                      <span className="id">42563</span>
                      <span className="name">Aurora</span>{" "}
                      <span className="category">Nightstands</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.elathemes.com/themes/mobel/index.html#">
                      <span className="id">42563</span>
                      <span className="name">Dining set</span>{" "}
                      <span className="category">Kitchen</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.elathemes.com/themes/mobel/index.html#">
                      <span className="id">42563</span>
                      <span className="name">Seat chair</span>{" "}
                      <span className="category">Bar sets</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/*/search-result-items*/}
              <div className="search-result-items">
                <div className="title h4">
                  Blog{" "}
                  <a
                    href="http://www.elathemes.com/themes/mobel/index.html#"
                    className="btn btn-clean-dark btn-xs"
                  >
                    View all
                  </a>
                </div>
                <ul>
                  <li>
                    <a href="http://www.elathemes.com/themes/mobel/index.html#">
                      <span className="id">01 Jan</span>{" "}
                      <span className="name">Creating the Perfect Gallery Wall </span>
                      <span className="category">Interior ideas</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.elathemes.com/themes/mobel/index.html#">
                      <span className="id">12 Jan</span>{" "}
                      <span className="name">
                        Making the Most Out of Your Kids Old Bedroom
                      </span>{" "}
                      <span className="category">Interior ideas</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.elathemes.com/themes/mobel/index.html#">
                      <span className="id">28 Dec</span>{" "}
                      <span className="name">Have a look at our new projects!</span>
                      <span className="category">Modern design</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.elathemes.com/themes/mobel/index.html#">
                      <span className="id">31 Sep</span>{" "}
                      <span className="name">
                        Decorating When You're Starting Out or Starting Over
                      </span>{" "}
                      <span className="category">Best of 2017</span>
                    </a>
                  </li>
                  <li>
                    <a href="http://www.elathemes.com/themes/mobel/index.html#">
                      <span className="id">22 Sep</span>{" "}
                      <span className="name">
                        The 3 Tricks that Quickly Became Rules
                      </span>{" "}
                      <span className="category">Tips for you</span>
                    </a>
                  </li>
                </ul>
              </div>
              {/*/search-result-items*/}
            </div>
            {/*/search-results*/}
          </div>
          {/* ==========  Login wrapper ========== */}
          <div className="login-wrapper">
            <form>
              <div className="h4">Sign in</div>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
              </div>
              <div className="form-group">
                <a
                  href="http://www.elathemes.com/themes/mobel/index.html#forgotpassword"
                  className="open-popup"
                >
                  Forgot password?
                </a>
                <a
                  href="http://www.elathemes.com/themes/mobel/index.html#createaccount"
                  className="open-popup"
                >
                  Don't have an account?
                </a>
              </div>
              <button type="submit" className="btn btn-block btn-main">
                Submit
              </button>
            </form>
          </div>
          {/* ==========  Cart wrapper ========== */}
          <div className="cart-wrapper">
            <div className="checkout">
              <div className="clearfix">
                {/*cart item*/}
                <div className="row">
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <a href="#">
                        <img src={product1} alt="product-1" />
                      </a>
                    </div>
                    <div className="title">
                      <div>
                        <a href="http://www.elathemes.com/themes/mobel/product.html">
                          Green corner
                        </a>
                      </div>
                      <small>Green corner</small>
                    </div>
                    <div className="quantity">
                      <input
                        type="number"
                        defaultValue={2}
                        className="form-control form-quantity"
                      />
                    </div>
                    <div className="price">
                      <span className="final">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                    {/*delete-this-item*/}
                    <span className="icon icon-cross icon-delete" />
                  </div>
                  {/*cart item*/}
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <a href="#">
                        <img src={product2} alt="Product-2" />
                      </a>
                    </div>
                    <div className="title">
                      <div>
                        <a href="http://www.elathemes.com/themes/mobel/product.html">
                          Green corner
                        </a>
                      </div>
                      <small>Green corner</small>
                    </div>
                    <div className="quantity">
                      <input
                        type="number"
                        defaultValue={2}
                        className="form-control form-quantity"
                      />
                    </div>
                    <div className="price">
                      <span className="final">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                    {/*delete-this-item*/}
                    <span className="icon icon-cross icon-delete" />
                  </div>
                  {/*cart item*/}
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <a href="#">
                        <img src={product3} alt="Product" />
                      </a>
                    </div>
                    <div className="title">
                      <div>
                        <a href="http://www.elathemes.com/themes/mobel/product.html">
                          Green corner
                        </a>
                      </div>
                      <small>Green corner</small>
                    </div>
                    <div className="quantity">
                      <input
                        type="number"
                        defaultValue={2}
                        className="form-control form-quantity"
                      />
                    </div>
                    <div className="price">
                      <span className="final">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                    {/*delete-this-item*/}
                    <span className="icon icon-cross icon-delete" />
                  </div>
                  {/*cart item*/}
                  <div className="cart-block cart-block-item clearfix">
                    <div className="image">
                      <a href="#">
                        <img src={product4} alt="Product" />
                      </a>
                    </div>
                    <div className="title">
                      <div>
                        <a href="http://www.elathemes.com/themes/mobel/product.html">
                          Green corner
                        </a>
                      </div>
                      <small>Green corner</small>
                    </div>
                    <div className="quantity">
                      <input
                        type="number"
                        defaultValue={2}
                        className="form-control form-quantity"
                      />
                    </div>
                    <div className="price">
                      <span className="final">$ 1.998</span>
                      <span className="discount">$ 2.666</span>
                    </div>
                    {/*delete-this-item*/}
                    <span className="icon icon-cross icon-delete" />
                  </div>
                </div>
                <hr />
                {/*cart prices */}
                <div className="clearfix">
                  <div className="cart-block cart-block-footer clearfix">
                    <div>
                      <strong>Discount 15%</strong>
                    </div>
                    <div>
                      <span>$ 159,00</span>
                    </div>
                  </div>
                  <div className="cart-block cart-block-footer clearfix">
                    <div>
                      <strong>Shipping</strong>
                    </div>
                    <div>
                      <span>$ 30,00</span>
                    </div>
                  </div>
                  <div className="cart-block cart-block-footer clearfix">
                    <div>
                      <strong>VAT</strong>
                    </div>
                    <div>
                      <span>$ 59,00</span>
                    </div>
                  </div>
                </div>
                <hr />
                {/*cart final price */}
                <div className="clearfix">
                  <div className="cart-block cart-block-footer clearfix">
                    <div>
                      <strong>Total</strong>
                    </div>
                    <div>
                      <div className="h4 title">$ 1259,00</div>
                    </div>
                  </div>
                </div>
                {/*cart navigation */}
                <div className="cart-block-buttons clearfix">
                  <div className="row">
                    <div className="col-xs-6">
                      <a
                        href="http://www.elathemes.com/themes/mobel/products-grid.html"
                        className="btn btn-clean-dark"
                      >
                        Continue shopping
                      </a>
                    </div>
                    <div className="col-xs-6 text-right">
                      <a
                        href="http://www.elathemes.com/themes/mobel/checkout-1.html"
                        className="btn btn-main"
                      >
                        <span className="icon icon-cart" /> Checkout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/*/checkout*/}
          </div>
          {/*/cart-wrapper*/}
        </div>
        {/*/container*/}
      </nav>
      {/* </div> */}

    </div>
  )
}

export default Navbar

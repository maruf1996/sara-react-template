import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const MobileMenu = ({ headerLogImg }) => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isMobileNavOpen ? "hidden" : "";
  }, [isMobileNavOpen]);
  return (
    <div>
      <div className="mobile-header">
        <div className="container-full">
          <div className="mobile-header__container">
            <div className="p-left">
              <div className="logo">
                <Link to="/">
                  <img src={headerLogImg} className="w-100" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="p-right">
              <button
                id="nav-opn-btn"
                onClick={() => setMobileNavOpen(true)}
                aria-label="Name"
              >
                <i className="fa-solid fa-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
      <aside id="offcanvas-nav" className={isMobileNavOpen ? "open" : ""}>
        <nav className="m-nav">
          <div className="m-nav-top">
            <div className="logo">
              <Link to="/">
                <img src={headerLogImg} className="w-100" alt="logo" />
              </Link>
            </div>
            <button id="nav-cls-btn" onClick={() => setMobileNavOpen(false)}>
              <i className="fa-solid fa-xmark"></i>
            </button>
          </div>

          <ul className="nav-links">
            <li className="dropdown">
              <Link to="#">
                Home
                <span>
                  <svg
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.00391 1L6.00391 5L11.0039 1"
                      stroke="#28303F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <ul className="d-menu">
                <li>
                  <Link to="/">Home-01</Link>
                </li>
                <li>
                  <Link to="/home-two">Home-02</Link>
                </li>
                <li>
                  <Link to="/home-three">Home-03</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="/services">Service</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>

            <li className="dropdown">
              <Link to="#">
                Pages
                <span>
                  <svg
                    width="12"
                    height="6"
                    viewBox="0 0 12 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.00391 1L6.00391 5L11.0039 1"
                      stroke="#28303F"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
              <ul className="d-menu">
                <li>
                  <Link to="/blog-details" className="text_lg">
                    Blog Details
                  </Link>
                </li>
                <li>
                  <Link to="/blog-list-view" className="text_lg">
                    Blog List View
                  </Link>
                </li>
                <li>
                  <Link to="/contuct-us" className="text_lg">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text_lg">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/pricing" className="text_lg">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link to="/services-detais" className="text_lg">
                    Service Details
                  </Link>
                </li>
                <li>
                  <Link to="/single-member" className="text_lg">
                    Single Member
                  </Link>
                </li>
                <li>
                  <Link to="/team" className="text_lg">
                    Team Member
                  </Link>
                </li>
                <li>
                  <Link to="/testimonial" className="text_lg">
                    Testimonial
                  </Link>
                </li>
                <li>
                  <Link to="/404" className="text_lg">
                    404
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="blog-grid">Blog</Link>
            </li>
          </ul>
        </nav>
      </aside>
    </div>
  );
};

export default MobileMenu;

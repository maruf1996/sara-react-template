import { Link } from "react-router";
import { useEffect } from "react";
import MobileMenu from "./MobileMenu";
import headerLogImg from "../assets/images/logo-2.svg";
import Select from "react-select";

const NavbarTwo = () => {
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const menuBg = document.querySelector(".menu_bg");

      if (menuBg) {
        if (scrollTop > 50) {
          menuBg.classList.add("nav-bg");
        } else {
          menuBg.classList.remove("nav-bg");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const languageOptions = [
    { value: "Eng", label: "ENG" },
    { value: "Ban", label: "BAN" },
    { value: "Ind", label: "IND" },
  ];

  return (
    <>
      <header className="header header--two">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3 col-xl-3 col-xxl-3">
              <ul className="header_contact">
                <li>
                  <a href="tel:+17077970462" className="text_base">
                    <span>Call us </span>+1 707 797 0462
                  </a>
                </li>
              </ul>
            </div>

            <div className="col-lg-6 col-xl-6 col-xxl-6">
              <div className="header_offer_main">
                <div className="header_txt">
                  <p>
                    <span>Offer</span> is going on till friday $1.99/mo.
                  </p>
                </div>
                <span className="header_txt_btn">
                  <i className="fa-solid fa-angle-right"></i>
                </span>
              </div>
            </div>

            <div className="col-lg-3 col-xl-3 col-xxl-3">
              <div className="header_right">
                <div className="header_luang_btn">
                  <Select
                    options={languageOptions}
                    defaultValue={languageOptions[0]}
                    classNamePrefix="custom-select"
                    isSearchable={false}
                  />
                </div>
                <ul className="header_right_social_icon">
                  <li>
                    <a
                      href="https://www.tiktok.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <i className="fa-brands fa-tiktok"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <i className="fa-brands fa-instagram fa-fw"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/?lang=en"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <i className="fa-brands fa-twitter fa-fw"></i>
                      </span>
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.pinterest.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <span>
                        <i className="fa-brands fa-pinterest fa-fw"></i>
                      </span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="menu_bg">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-10 col-xl-10 col-xxl-10">
                <div className="menu_bg_left">
                  <div className="header_logo">
                    <Link to="/">
                      <img src={headerLogImg} alt="logo" />
                    </Link>
                  </div>
                  <ul className="menu">
                    <li>
                      <Link to="#" className="text_lg">
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
                      <ul>
                        <li>
                          <Link to="/" className="text_lg">
                            Home-1
                          </Link>
                        </li>
                        <li>
                          <Link to="/home-two" className="text_lg">
                            Home-2
                          </Link>
                        </li>
                        <li>
                          <Link to="/home-three" className="text_lg">
                            Home-3
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/services" className="text_lg">
                        Service
                      </Link>
                    </li>
                    <li>
                      <Link to="/about" className="text_lg">
                        About Us
                      </Link>
                    </li>
                    <li>
                      <Link to="#" className="text_lg">
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
                      <ul>
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
                          <Link to="/contact-us" className="text_lg">
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
                          <Link to="/services-details" className="text_lg">
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
                      <Link to="/blog-grid" className="text_lg">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2 col-xl-2 col-xxl-2">
                <div className="menu_btn">
                  <Link className="sara-btn sara-btn_blue" to="/contact-us">
                    Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileMenu headerLogImg={headerLogImg}></MobileMenu>
    </>
  );
};

export default NavbarTwo;

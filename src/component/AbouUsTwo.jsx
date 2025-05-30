import React from "react";
// Image imports
import aboutPosOne from "../assets/images/about-pos-two.svg";
import aboutPosTwo from "../assets/images/about-pos-two-2.svg";
import aboutImg1 from "../assets/images/about_us-two-1.webp";
import aboutImg2 from "../assets/images/about_us-two-2.webp";
import textPos1 from "../assets/images/about-pos-5.svg";
import textPos2 from "../assets/images/about-pos-6.svg";
import unionImg from "../assets/images/hero-union.png";
import checkIcon from "../assets/images/a-check.svg";
import { Link } from "react-router-dom";

const AbouUsTwo = () => {
  return (
    <section className="about_us about_us--two">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 col-xxl-6" data-aos="fade-right">
            <div className="about_us_two_thumb_main">
              <div className="about_two-pos-one">
                <img src={aboutPosOne} alt="thumb" />
              </div>
              <div className="about_two-pos-two">
                <img src={aboutPosTwo} alt="thumb" />
              </div>

              <div className="about_us_two_thumb">
                <img src={aboutImg1} alt="thumb" />
              </div>
              <div className="about_us_two_thumb_two">
                <img src={aboutImg2} alt="thumb" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 about_pl">
            <div className="text_pos_thumb_main">
              <div className="text_pos_thumb_one">
                <img src={textPos1} alt="thumb" />
              </div>
              <div className="text_pos_thumb_two">
                <img src={textPos2} alt="thumb" />
              </div>
              <div className="text_pos_thumb_three">
                <img src={unionImg} alt="thumb" />
              </div>
            </div>

            <div className="about_head">
              <h2
                className="main_titel_two"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                We offer Real-time <span> Business Grow </span>Solutions
              </h2>

              <div
                className="about_two_item"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="about_two_item_txt">
                  <h3 className="text_5xl">$7bil+</h3>
                  <p className="text_lg">Project Handover</p>
                </div>
                <div className="about_two_item_txt">
                  <h3 className="text_5xl">1.9mil+</h3>
                  <p className="text_lg">Happy customers</p>
                </div>
              </div>
            </div>

            <ul className="about_list">
              <li data-aos="fade-up" data-aos-delay="300">
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Various analysis options.
              </li>
              <li data-aos="fade-up" data-aos-delay="400">
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Page Load (time, size, number of requests).
              </li>
              <li data-aos="fade-up" data-aos-delay="500">
                <span>
                  <img src={checkIcon} alt="icon" />
                </span>
                Big data analysis.
              </li>
            </ul>

            <div
              className="about_us_btn"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              <Link
                to="/about"
                className="sara-btn__border sara-btn__border--2"
              >
                Explore all
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AbouUsTwo;

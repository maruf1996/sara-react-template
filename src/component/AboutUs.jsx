import React from "react";
import aboutThumb from "../assets/images/abouyus-thumb.webp";
import pos1 from "../assets/images/about-pos-1.svg";
import pos2 from "../assets/images/about-pos-2.svg";
import pos3 from "../assets/images/about-pos-3.svg";
import pos4 from "../assets/images/about-pos-4.svg";
import pos5 from "../assets/images/about-pos-5.svg";
import pos6 from "../assets/images/about-pos-6.svg";
import heroUnion from "../assets/images/hero-union.png";
import checkIcon from "../assets/images/check.svg";

const AboutUs = () => {
  return (
    <section className="about_us">
      <div className="container">
        <div className="row align-items-center flex-column-reverse flex-lg-row">
          <div className="col-lg-6 col-xxl-6" data-aos="fade-right">
            <div className="about_us_thumb_main">
              <div className="about_us_thumb">
                <img src={aboutThumb} alt="thumb" />
              </div>

              <div className="about_pos_thumb">
                <img src={pos1} alt="thumb" />
              </div>
              <div className="about_pos_thumb_two">
                <img src={pos2} alt="thumb" />
              </div>
              <div className="about_pos_thumb_three">
                <img src={pos3} alt="thumb" />
              </div>
              <div className="about_pos_thumb_four">
                <img src={pos4} alt="thumb" />
              </div>
            </div>
          </div>

          <div className="col-lg-6 about_pl">
            <div className="text_pos_thumb_main">
              <div className="text_pos_thumb_one">
                <img src={pos5} alt="thumb" />
              </div>
              <div className="text_pos_thumb_two">
                <img src={pos6} alt="thumb" />
              </div>
              <div className="text_pos_thumb_three">
                <img src={heroUnion} alt="thumb" />
              </div>
            </div>

            <div className="about_head">
              <h2
                className="main_titel"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                We offer Real-time <span> Business Grow </span> Solutions
              </h2>

              <p className="text_lg" data-aos="fade-up" data-aos-delay="200">
                This list encompasses a broad range of services that can help
                businesses manage and optimize their IT infrastructure, enhance
                their security posture, support their digital transformation.
              </p>
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
              <a href="/about" className="sara-btn__border">
                Explore all
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

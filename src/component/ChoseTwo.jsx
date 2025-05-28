import React from "react";
import choseThumb1 from "../assets/images/chose-two-thumb-1.webp";
import choseThumb2 from "../assets/images/chose-two-thumb-2.webp";
import circle2 from "../assets/images/circle-2.svg";
import circle1 from "../assets/images/circle-1.svg";
import revenue from "../assets/images/revenue.svg";
import vic from "../assets/images/about-3-vic.svg";
import shape from "../assets/images/shape.svg";
import innerCC from "../assets/images/inner-c-c.svg";
import innerCC2 from "../assets/images/inner-c-c-2.svg";
import innerCC3 from "../assets/images/inner-c-c-3.svg";
import innerC1 from "../assets/images/inner-c-1.svg";
import heroPos1 from "../assets/images/hero-pos-1.png";

const ChoseTwo = ({ addClass }) => {
  return (
    <section className={`chose_two ${addClass || ""}`}>
      <div className="container">
        <div className="container">
          <div className="row align-items-center flex-column-reverse flex-lg-row">
            <div className="col-lg-6 col-xxl-6">
              <div className="chose_two_head">
                <h2
                  className="main_titel_three"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  For Next Renewable <br />
                  <span>SEO Ranking </span> Revolution
                </h2>
                <p className="text_lg" data-aos="fade-up" data-aos-delay="200">
                  Your Comprehensive Solution for Optimizing Website SEO
                  Performance and Achieving Tangible Search Engine Ranking
                  Results.
                </p>
              </div>

              <div className="chose_renge_main">
                <div
                  className="chose_renge_item"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h6>
                    Trusted Professionals <span>90%</span>
                  </h6>
                  <div className="chose_renge_ber"></div>
                </div>
                <div
                  className="chose_renge_item"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h6>
                    Innovative Solutions<span>80%</span>
                  </h6>
                  <div className="chose_renge_ber"></div>
                </div>
                <div
                  className="chose_renge_item"
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h6>
                    Security Advices<span>85%</span>
                  </h6>
                  <div className="chose_renge_ber"></div>
                </div>
              </div>
            </div>

            <div
              className="col-lg-6 col-xxl-6"
              data-aos="fade-left"
              data-aos-delay="600"
            >
              <div className="chose_two_thumb_main">
                <div className="chose_two_thumb_item">
                  <div className="chose_two_thumb">
                    <img src={choseThumb1} alt="thumb" />
                  </div>

                  <div className="chose_two_thumb_two">
                    <img src={choseThumb2} alt="thumb" />
                    <div className="chose_circle_thumb_main">
                      <div className="chose_circle_thumb">
                        {addClass == "inner_chose" ? (
                          <img src={innerCC} alt="thumb" />
                        ) : (
                          <img src={circle2} alt="thumb" />
                        )}
                      </div>
                      <div className="chose_circle_thumb_two">
                        {addClass == "inner_chose" ? (
                          <img src={innerCC2} alt="thumb" />
                        ) : (
                          <img src={circle1} alt="thumb" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="revenue-pos">
                    {addClass == "inner_chose" ? (
                      <img src={heroPos1} alt="thumb" />
                    ) : (
                      <img src={revenue} alt="revenue" />
                    )}
                  </div>

                  <div className="chose_pos_thumb_three">
                    {addClass == "inner_chose" ? (
                      <img src={innerCC3} alt="thumb" />
                    ) : (
                      <img src={vic} alt="thumb" />
                    )}
                  </div>

                  <div className="chose_pos_sheap">
                    {addClass == "inner_chose" ? (
                      <img src={innerC1} alt="thumb" />
                    ) : (
                      <img src={shape} alt="thumb" />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChoseTwo;

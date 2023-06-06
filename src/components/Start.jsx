import React from "react";
import { Row, Col } from "react-bootstrap";
import star_a from "../assets/img/star_a.svg";
import star_b from "../assets/img/star_b.svg";
import star_bg_effect_1 from "../assets/img/star_bg_effect_1.svg";

const Start = () => {
  return (
    <section className="start_bg_box py-5 position-relative">
      <span className="star_bg_effect_1 position-absolute">
        <img src={star_bg_effect_1} alt="star_bg_effect_1" />
      </span>
      <span className="star_bg_effect_2 position-absolute">
        <img src={star_bg_effect_1} alt="star_bg_effect_1" />
      </span>
      <div className="container py-5">
        <div
          className="star_box p-sm-5 p-2 overflow-hidden position-relative"
          data-aos="flip-down"
          data-aos-duration="3000"
          >
          <span className="position-absolute star_a_img">
            <img src={star_a} alt="star_a" />
          </span>
          <span className="position-absolute star_b_img">
            <img src={star_b} alt="star_b" />
          </span>
          <Row className="align-items-center">
            <Col lg={5} className="position-relative z_5">
              <p className="fw_700 ff_Rubik fs_2xl clr_white">
                Start mining now
              </p>
              <p className="fw_400 ff_Rubik fs_sm clr_white me-5 pe-4">
                Join now with CRAPPO to get the latest news and start mining now
              </p>
            </Col>
            <Col lg={7} className="position-relative z_5">
              <div className="d-flex flex-column flex-sm-row align-items-center mt-3 mt-lg-0">
                <input
                  className="w-100 fw_400 ff_Rubik fs_sm clr_white input_box me-2 me-sm-5 pb-2"
                  type="email"
                  placeholder="Enter your email"
                />
                <button className="fw_500 ff_Rubik fs_md clr_blue Subscribe_btn mt-3">
                  Subscribe
                </button>
              </div>
            </Col>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default Start;

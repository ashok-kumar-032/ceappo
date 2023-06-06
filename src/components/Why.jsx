import React from "react";
import { Row, Col } from "react-bootstrap";
import why_img from "../assets/img/why_img.webp";
import hero_bg from "../assets/img/hero_bg.svg";
import why_bg_1 from "../assets/img/why_bg_1.svg";
import why_bg_2 from "../assets/img/why_bg_2.svg";

const Why = () => {
  return (
    <section className="bg_blue py-lg-5 position-relative overflow-hidden">
      <span className="why_bg position-absolute d-none d-xl-block">
        <img src={hero_bg} alt="hero_bg" />
      </span>
      <span className="why_bg_1 position-absolute d-none d-sm-block">
        <img src={why_bg_1} alt="why_bg_1" />
      </span>
      <span className="why_bg_2 position-absolute d-none d-sm-block">
        <img src={why_bg_2} alt="why_bg_2" />
      </span>
      <div className="container py-lg-5 mt-5">
        <Row className="d-flex flex-xl-row text-xl-start text-center">
          <Col
            xl={7}
            className="mt-lg-4"
            data-aos="fade-down-right"
            data-aos-duration="3000"
            data-aos-delay="600"
          >
            <img className="hero_img_w" src={why_img} alt="why_img " />
          </Col>
          <Col
            xl={5}
            className=" d-flex align-items-center align-items-xl-start flex-column mt-4 mt-xl-0"
            data-aos="fade-up-left"
            data-aos-duration="3000"
            data-aos-delay="600"
          >
            <p className="fw_700 ff_Rubik fs_3xl clr_white">
              Why you should choose CRAPPO
            </p>
            <p className="fw_400 ff_Rubik fs_sm clr_light_white max_w_400 pt-1">
              Experience the next generation cryptocurrency platform. No
              financial borders, extra fees, and fake reviews.
            </p>
            <button className="fw_500 ff_Rubik fs_md clr_white learn_btn mt-3 all_btn overflow-hidden position-relative">
              Learn More
            </button>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Why;

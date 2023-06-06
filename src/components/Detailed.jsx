import React from "react";
import { Col, Row } from "react-bootstrap";
import detailed from "../assets/img/detailed.webp";
const Detailed = () => {
  return (
    <section className="bg_dark_blue py-lg-5 position-relative">
      <img
        src={detailed}
        alt="detailed"
        className="w-50 position-absolute start-0 d-none d-xl-block"
        data-aos="fade-right"
        data-aos-duration="3000"
      />
      <div className="container py-5 mb-lg-5">
        <Row className="pb-xxl-5 flex-lg-row align-items-center">
          <Col lg={7} xs={12} data-aos="fade-right" data-aos-duration="3000">
            <img src={detailed} alt="detailed" className="w-100 d-xl-none" />
          </Col>
          <Col
            lg={5}
            xs={12}
            className="ps-lg-5 pb-lg-5 pb-4 mb-lg-5 pt-4 pt-lg-5 text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start"
            data-aos="fade-left"
            data-aos-duration="2000"
          >
            <p className="fw_700 fs_2xl ff_Rubik clr_white mt-lg-4">
              Detailed Statistics
            </p>
            <p className="fw_400 fs_sm ff_Rubik clr_light_white max_w_400 py-3">
              View all mining related information in realtime, at any point at
              any location and decide which polls you want to mine in.
            </p>
            <button className="fw_500 clr_white ff_rubic fs_md learn_btn rounded-pill border-0 bg_blue2 all_btn overflow-hidden position-relative">
              Learn More
            </button>
          </Col>
        </Row>
      </div>
    </section>
  );
};
export default Detailed;

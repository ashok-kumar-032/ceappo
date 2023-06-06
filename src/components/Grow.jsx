import React from "react";
import { Col, Row } from "react-bootstrap";
import Table from "../assets/img/Table.svg";
import grow_bg from "../assets/img/grow_bg.svg";

const Grow = () => {
  return (
    <section className="bg_dark_blue position-relative py-3 py-lg-5">
      <span className="position-absolute grow_bg d-none d-lg-block">
        <img src={grow_bg} alt="grow_bg" />
      </span>
      <div className="container position-relative z_5">
        <Row className="pb-lg-5 flex-column-reverse flex-lg-row align-items-center">
          <Col
            lg={5}
            xs={12}
            className="ps-lg-5 pb-lg-5 pb-4 mb-lg-5 pt-4 pt-lg-5 text-center text-lg-start d-flex flex-column align-items-center align-items-lg-start"
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="300"
          >
            <p className="fw_700 fs_2xl ff_Rubik clr_white mt-lg-4">
              Grow your profit and track your investments
            </p>
            <p className="fw_400 fs_sm ff_Rubik clr_light_white max_w_400 py-lg-3">
              Use advanced analytical tools. Clear TradingView charts let you
              track current and historical profit investments.
            </p>
            <button className="fw_500 clr_white ff_rubic fs_md learn_btn rounded-pill border-0 bg_blue2 all_btn overflow-hidden position-relative">
              Learn More
            </button>
          </Col>
          <Col
            lg={7}
            xs={12}
            data-aos="fade-up"
            data-aos-duration="3000"
            data-aos-delay="600"
          >
            <img src={Table} alt="Table" className="w-100" />
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Grow;

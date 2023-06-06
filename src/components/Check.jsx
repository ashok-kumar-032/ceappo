import React from "react";

export const Check = () => {
  return (
    <section className="bg_blue pt-5">
      <div className="container">
        <div
          className="d-flex flex-column align-items-center"
          data-aos="flip-down"
          data-aos-duration="3000"
        >
          <p className="text-center ff_rubic text-white fw_700 fs_3xl mb-0">
            Check how much you can earn
          </p>
          <p className="fw_400 ff_Rubik fs_md clr_light_white text-center max_w_550 pt-3 mb-0">
            Let’s check your hash rate to see how much you will earn today,
            Exercitation veniam consequat sunt nostrud amet.
          </p>
        </div>
        <div
          className="my_container"
          data-aos="fade-right"
          data-aos-duration="3000"
        >
          <div className="check_box d-flex flex-column flex-lg-row justify-content-between align-items-center p-5 mt-lg-5 mt-3">
            <div className="d-flex check_input w_350">
              <input
                type="text"
                className="border-0 fw_400 ff_Rubik fs_lg clr_blue bg_off_white w-100 check"
                placeholder="Enter your hash rate"
              />
            </div>
            <div className="d-flex mt-3 mt-lg-0">
              <div className="border_bottom_option">
                <select className="border-0 fw_400 ff_Rubik fs_lg clr_blue bg_off_white w-100">
                  <option
                    value="someOption"
                    className="fw_400 ff_Rubik fs_lg clr_blue mb-0"
                  >
                    TH/s
                  </option>
                  <option
                    value="otherOption"
                    className="fw_400 ff_Rubik fs_lg clr_blue"
                  >
                    Other option
                  </option>
                </select>
              </div>
            </div>
            <button className="fw_500 ff_Rubik fs_md clr_white caltulate_btn mt-3 mt-lg-0 all_btn overflow-hidden position-relative">
              Calculate
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Check;

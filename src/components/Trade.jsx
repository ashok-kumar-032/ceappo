import React from "react";
import { Col, Row } from "react-bootstrap";
import Slider from "react-slick";
const Trade = () => {
  var settings = {
    dots: false,
    infinite: false,
    autoPlay: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          dots: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1008,
        settings: {
          slidesToShow: 2,
          dots: true,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          dots: true,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className="bg_trade">
      <div className="container pb-lg-5 mb-lg-5">
        <div
          className="my_container"
          data-aos="fade-left"
          data-aos-duration="3000"
        >
          <div className="trade_box p-lg-5 p-3">
            <p className="fw_500 fs_sm ff_Rubik clr_light_blue ">
              ESTIMATED 24 HOUR REVENUE:
            </p>
            <p className="fw_700 ff_Rubik fs_2xl clr_blue">
              0.055 130 59 ETH <span className="clr_light_blue">($1275)</span>
            </p>
            <p className="fw_400 fs_sm ff_Rubik clr_grey">
              Revenue will change based on mining difficulty and Ethereum price.
            </p>
          </div>
        </div>
        <div
          className="d-flex justify-content-center pt-lg-5 mt-3"
          data-aos="flip-down"
          data-aos-duration="3000"
        >
          <p className="mb-0 fw_700 ff_Rubik fs_3xl text-center clr_blue max_w_705">
            Trade securely and market the high growth cryptocurrencies.
          </p>
        </div>
        <Slider {...settings} className="mt-lg-5 mt-3">
          <div
            className="p-3"
            data-aos="fade-down"
            data-aos-duration="3000"
            data-aos-delay="300"
          >
            <div className="bit_box p-3 py-5 d-flex flex-column align-items-center w-100 btn_hover">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#C4C4C4" />
                <g clip-path="url(#clip0_1_17807)">
                  <path
                    d="M78.8034 49.6733C73.459 71.1133 51.7368 84.1464 30.3275 78.8018C8.88683 73.4574 -4.14629 51.7361 1.19839 30.3271C6.54277 8.88708 28.2334 -4.14605 49.674 1.19864C71.0834 6.51177 84.1481 28.233 78.8034 49.6733Z"
                    fill="url(#paint0_linear_1_17807)"
                  />
                  <path
                    d="M59.0449 35.0159C59.8262 29.7034 55.7949 26.8284 50.2324 24.9221L52.0449 17.7034L47.6699 16.6096L45.9199 23.6409C44.7637 23.3596 43.5762 23.0784 42.3887 22.8284L44.1387 15.7659L39.7637 14.6721L37.9824 21.8596C37.0137 21.6409 36.0762 21.4221 35.1699 21.2034V21.1721L29.1074 19.6721L27.9512 24.3596C27.9512 24.3596 31.2012 25.1096 31.1387 25.1409C32.9199 25.5784 33.2324 26.7659 33.1699 27.7034L31.1074 35.9221C31.2324 35.9534 31.3887 35.9846 31.5762 36.0784C31.4199 36.0471 31.2637 36.0159 31.1074 35.9534L28.2324 47.4534C28.0137 47.9846 27.4512 48.7971 26.2324 48.4846C26.2637 48.5471 23.0449 47.7034 23.0449 47.7034L20.8574 52.7346L26.5762 54.1721C27.6387 54.4534 28.6699 54.7034 29.7012 54.9846L27.8887 62.2659L32.2637 63.3596L34.0762 56.1409C35.2637 56.4534 36.4512 56.7659 37.5762 57.0471L35.7949 64.2346L40.1699 65.3284L41.9824 58.0471C49.4824 59.4534 55.1074 58.8909 57.4512 52.1096C59.3574 46.6721 57.3574 43.5159 53.4199 41.4534C56.3262 40.7971 58.4824 38.8909 59.0449 35.0159ZM49.0137 49.0784C47.6699 54.5159 38.4824 51.5784 35.5137 50.8284L37.9199 41.1721C40.8887 41.9221 50.4512 43.3909 49.0137 49.0784ZM50.3887 34.9221C49.1387 39.8909 41.5137 37.3596 39.0449 36.7346L41.2324 27.9846C43.7012 28.6096 51.6699 29.7659 50.3887 34.9221Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_17807"
                    x1="39.9784"
                    y1="-0.0189558"
                    x2="39.9784"
                    y2="79.9922"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9AA4B" />
                    <stop offset="1" stop-color="#F7931A" />
                  </linearGradient>
                  <clipPath id="clip0_1_17807">
                    <rect width="80" height="80" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className=" d-flex align-items-center pt-4">
                <p className="mb-0 fw_700 fs_2xl ff_Rubik clr_blue">Bitcoin</p>
                <p className="fw_500 fs_md ff_Rubik clr_grey opacity_07 ps-2 mb-0">
                  BTC
                </p>
              </div>
              <p className="fw_400 fs_sm ff_Rubik clr_grey pt-3 text-center">
                Digital currency in which a record of transactions is
                maintained.
              </p>
              {/* btn arrow */}
              <button className="p-3 rounded-pill d-flex bg-white btn_arrow">
                <span className="pt-1 ps-2 pe-4 d-none fw_500 ff_Rubik fs_md clr_white mb-0">
                  Start mining
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="white" />
                  <path
                    d="M14.4999 20.9999C14.3683 21.0007 14.2379 20.9755 14.116 20.9257C13.9942 20.8759 13.8834 20.8026 13.7899 20.7099C13.6962 20.617 13.6218 20.5064 13.571 20.3845C13.5203 20.2626 13.4941 20.1319 13.4941 19.9999C13.4941 19.8679 13.5203 19.7372 13.571 19.6154C13.6218 19.4935 13.6962 19.3829 13.7899 19.2899L17.0999 15.9999L13.9199 12.6899C13.7337 12.5026 13.6291 12.2491 13.6291 11.9849C13.6291 11.7207 13.7337 11.4673 13.9199 11.2799C14.0129 11.1862 14.1235 11.1118 14.2454 11.061C14.3672 11.0103 14.4979 10.9841 14.6299 10.9841C14.762 10.9841 14.8927 11.0103 15.0145 11.061C15.1364 11.1118 15.247 11.1862 15.3399 11.2799L19.1999 15.2799C19.3832 15.4669 19.4858 15.7182 19.4858 15.9799C19.4858 16.2417 19.3832 16.493 19.1999 16.6799L15.1999 20.6799C15.1102 20.7769 15.0021 20.855 14.882 20.91C14.7618 20.9649 14.632 20.9955 14.4999 20.9999Z"
                    fill="#3671E9"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="p-3"
            data-aos="fade-down"
            data-aos-duration="3000"
            data-aos-delay="600"
          >
            <div className="bit_box p-3 py-5 d-flex flex-column align-items-center w-100 btn_hover">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#1181E8" />
                <g clip-path="url(#clip0_1_17836)">
                  <path
                    d="M39.8898 51.9385L25.1553 43.243L39.8808 64.0015L54.6228 43.243L39.8808 51.9385H39.8898ZM40.1088 16L25.3803 40.4455L40.1088 49.156L54.8433 40.4545L40.1088 16Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_17836">
                    <rect
                      width="48"
                      height="48"
                      fill="white"
                      transform="translate(16 16)"
                    />
                  </clipPath>
                </defs>
              </svg>

              <div className=" d-flex align-items-center pt-4">
                <p className="mb-0 fw_700 fs_2xl ff_Rubik clr_blue">Ethereum</p>
                <p className="fw_500 fs_md ff_Rubik clr_grey opacity_07 ps-2 mb-0">
                  ETH
                </p>
              </div>
              <p className="fw_400 fs_sm ff_Rubik clr_grey pt-3 text-center">
                Blockchain technology to create and run decentralized digital
                applications.
              </p>
              {/* btn arrow */}
              <button className="p-3 rounded-pill d-flex bg-white btn_arrow">
                <span className="pt-1 ps-2 pe-4 d-none fw_500 ff_Rubik fs_md clr_white mb-0">
                  Start mining
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="white" />
                  <path
                    d="M14.4999 20.9999C14.3683 21.0007 14.2379 20.9755 14.116 20.9257C13.9942 20.8759 13.8834 20.8026 13.7899 20.7099C13.6962 20.617 13.6218 20.5064 13.571 20.3845C13.5203 20.2626 13.4941 20.1319 13.4941 19.9999C13.4941 19.8679 13.5203 19.7372 13.571 19.6154C13.6218 19.4935 13.6962 19.3829 13.7899 19.2899L17.0999 15.9999L13.9199 12.6899C13.7337 12.5026 13.6291 12.2491 13.6291 11.9849C13.6291 11.7207 13.7337 11.4673 13.9199 11.2799C14.0129 11.1862 14.1235 11.1118 14.2454 11.061C14.3672 11.0103 14.4979 10.9841 14.6299 10.9841C14.762 10.9841 14.8927 11.0103 15.0145 11.061C15.1364 11.1118 15.247 11.1862 15.3399 11.2799L19.1999 15.2799C19.3832 15.4669 19.4858 15.7182 19.4858 15.9799C19.4858 16.2417 19.3832 16.493 19.1999 16.6799L15.1999 20.6799C15.1102 20.7769 15.0021 20.855 14.882 20.91C14.7618 20.9649 14.632 20.9955 14.4999 20.9999Z"
                    fill="#3671E9"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="p-3"
            data-aos="fade-down"
            data-aos-duration="3000"
            data-aos-delay="900"
          >
            <div className="bit_box p-3 py-5 d-flex flex-column align-items-center w-100 btn_hover">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_17821)">
                  <circle cx="40" cy="40" r="40" fill="white" />
                  <path
                    d="M40 0C32.0888 0 24.3552 2.34596 17.7772 6.74121C11.1992 11.1365 6.07234 17.3836 3.04484 24.6927C0.0173314 32.0017 -0.774802 40.0444 0.768607 47.8036C2.31202 55.5628 6.12165 62.6902 11.7157 68.2843C17.3098 73.8784 24.4372 77.688 32.1964 79.2314C39.9556 80.7748 47.9983 79.9827 55.3074 76.9552C62.6164 73.9277 68.8635 68.8008 73.2588 62.2228C77.6541 55.6448 80 47.9112 80 40C80 29.3913 75.7857 19.2172 68.2843 11.7157C60.7828 4.21427 50.6087 0 40 0V0ZM39.1267 12.26H47.74C47.9162 12.2602 48.09 12.3012 48.2477 12.3796C48.4055 12.4581 48.543 12.5719 48.6495 12.7123C48.756 12.8527 48.8286 13.0158 48.8616 13.1888C48.8947 13.3619 48.8873 13.5403 48.84 13.71L42.0733 36.77L48.4234 34.83L47.0634 39.4467L40.65 41.3133L36.49 55.36H58.7433C58.9197 55.361 59.0935 55.4027 59.251 55.482C59.4086 55.5613 59.5457 55.6759 59.6515 55.817C59.7574 55.958 59.8292 56.1217 59.8613 56.2951C59.8935 56.4685 59.885 56.647 59.8367 56.8167L57.8967 63.4833C57.8038 63.8005 57.6107 64.079 57.3463 64.2773C57.082 64.4756 56.7605 64.583 56.43 64.5833H22.4433L28.1867 45.1767L21.8334 47.11L23.2333 42.5733L29.6 40.64L37.6734 13.3733C37.7619 13.0545 37.952 12.7733 38.2149 12.5723C38.4778 12.3714 38.7991 12.2617 39.13 12.26H39.1267Z"
                    fill="#59C19C"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1_17821">
                    <rect width="80" height="80" fill="white" />
                  </clipPath>
                </defs>
              </svg>

              <div className=" d-flex align-items-center pt-4">
                <p className="mb-0 fw_700 fs_2xl ff_Rubik clr_blue">Litecoin</p>
                <p className="fw_500 fs_md ff_Rubik clr_grey opacity_07 ps-2 mb-0">
                  LTC
                </p>
              </div>
              <p className="fw_400 fs_sm ff_Rubik clr_grey pt-3 text-center">
                Cryptocurrency that enables instant payments to anyone in the
                world.
              </p>
              {/* btn arrow */}
              <button className="p-3 rounded-pill d-flex bg-white btn_arrow">
                <span className="pt-1 ps-2 pe-4 d-none fw_500 ff_Rubik fs_md clr_white mb-0">
                  Start mining
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="white" />
                  <path
                    d="M14.4999 20.9999C14.3683 21.0007 14.2379 20.9755 14.116 20.9257C13.9942 20.8759 13.8834 20.8026 13.7899 20.7099C13.6962 20.617 13.6218 20.5064 13.571 20.3845C13.5203 20.2626 13.4941 20.1319 13.4941 19.9999C13.4941 19.8679 13.5203 19.7372 13.571 19.6154C13.6218 19.4935 13.6962 19.3829 13.7899 19.2899L17.0999 15.9999L13.9199 12.6899C13.7337 12.5026 13.6291 12.2491 13.6291 11.9849C13.6291 11.7207 13.7337 11.4673 13.9199 11.2799C14.0129 11.1862 14.1235 11.1118 14.2454 11.061C14.3672 11.0103 14.4979 10.9841 14.6299 10.9841C14.762 10.9841 14.8927 11.0103 15.0145 11.061C15.1364 11.1118 15.247 11.1862 15.3399 11.2799L19.1999 15.2799C19.3832 15.4669 19.4858 15.7182 19.4858 15.9799C19.4858 16.2417 19.3832 16.493 19.1999 16.6799L15.1999 20.6799C15.1102 20.7769 15.0021 20.855 14.882 20.91C14.7618 20.9649 14.632 20.9955 14.4999 20.9999Z"
                    fill="#3671E9"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div
            className="p-3"
            data-aos="fade-down"
            data-aos-duration="3000"
            data-aos-delay="1200"
          >
            <div className="bit_box p-3 py-5 d-flex flex-column align-items-center w-100 btn_hover">
              <svg
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="40" cy="40" r="40" fill="#C4C4C4" />
                <g clip-path="url(#clip0_1_17807)">
                  <path
                    d="M78.8034 49.6733C73.459 71.1133 51.7368 84.1464 30.3275 78.8018C8.88683 73.4574 -4.14629 51.7361 1.19839 30.3271C6.54277 8.88708 28.2334 -4.14605 49.674 1.19864C71.0834 6.51177 84.1481 28.233 78.8034 49.6733Z"
                    fill="url(#paint0_linear_1_17807)"
                  />
                  <path
                    d="M59.0449 35.0159C59.8262 29.7034 55.7949 26.8284 50.2324 24.9221L52.0449 17.7034L47.6699 16.6096L45.9199 23.6409C44.7637 23.3596 43.5762 23.0784 42.3887 22.8284L44.1387 15.7659L39.7637 14.6721L37.9824 21.8596C37.0137 21.6409 36.0762 21.4221 35.1699 21.2034V21.1721L29.1074 19.6721L27.9512 24.3596C27.9512 24.3596 31.2012 25.1096 31.1387 25.1409C32.9199 25.5784 33.2324 26.7659 33.1699 27.7034L31.1074 35.9221C31.2324 35.9534 31.3887 35.9846 31.5762 36.0784C31.4199 36.0471 31.2637 36.0159 31.1074 35.9534L28.2324 47.4534C28.0137 47.9846 27.4512 48.7971 26.2324 48.4846C26.2637 48.5471 23.0449 47.7034 23.0449 47.7034L20.8574 52.7346L26.5762 54.1721C27.6387 54.4534 28.6699 54.7034 29.7012 54.9846L27.8887 62.2659L32.2637 63.3596L34.0762 56.1409C35.2637 56.4534 36.4512 56.7659 37.5762 57.0471L35.7949 64.2346L40.1699 65.3284L41.9824 58.0471C49.4824 59.4534 55.1074 58.8909 57.4512 52.1096C59.3574 46.6721 57.3574 43.5159 53.4199 41.4534C56.3262 40.7971 58.4824 38.8909 59.0449 35.0159ZM49.0137 49.0784C47.6699 54.5159 38.4824 51.5784 35.5137 50.8284L37.9199 41.1721C40.8887 41.9221 50.4512 43.3909 49.0137 49.0784ZM50.3887 34.9221C49.1387 39.8909 41.5137 37.3596 39.0449 36.7346L41.2324 27.9846C43.7012 28.6096 51.6699 29.7659 50.3887 34.9221Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_1_17807"
                    x1="39.9784"
                    y1="-0.0189558"
                    x2="39.9784"
                    y2="79.9922"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#F9AA4B" />
                    <stop offset="1" stop-color="#F7931A" />
                  </linearGradient>
                  <clipPath id="clip0_1_17807">
                    <rect width="80" height="80" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              <div className=" d-flex align-items-center pt-4">
                <p className="mb-0 fw_700 fs_2xl ff_Rubik clr_blue">Bitcoin</p>
                <p className="fw_500 fs_md ff_Rubik clr_grey opacity_07 ps-2 mb-0">
                  BTC
                </p>
              </div>
              <p className="fw_400 fs_sm ff_Rubik clr_grey pt-3 text-center">
                Digital currency in which a record of transactions is
                maintained.
              </p>
              {/* btn arrow */}
              <button className="p-3 rounded-pill d-flex bg-white btn_arrow">
                <span className="pt-1 ps-2 pe-4 d-none fw_500 ff_Rubik fs_md clr_white mb-0">
                  Start mining
                </span>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="white" />
                  <path
                    d="M14.4999 20.9999C14.3683 21.0007 14.2379 20.9755 14.116 20.9257C13.9942 20.8759 13.8834 20.8026 13.7899 20.7099C13.6962 20.617 13.6218 20.5064 13.571 20.3845C13.5203 20.2626 13.4941 20.1319 13.4941 19.9999C13.4941 19.8679 13.5203 19.7372 13.571 19.6154C13.6218 19.4935 13.6962 19.3829 13.7899 19.2899L17.0999 15.9999L13.9199 12.6899C13.7337 12.5026 13.6291 12.2491 13.6291 11.9849C13.6291 11.7207 13.7337 11.4673 13.9199 11.2799C14.0129 11.1862 14.1235 11.1118 14.2454 11.061C14.3672 11.0103 14.4979 10.9841 14.6299 10.9841C14.762 10.9841 14.8927 11.0103 15.0145 11.061C15.1364 11.1118 15.247 11.1862 15.3399 11.2799L19.1999 15.2799C19.3832 15.4669 19.4858 15.7182 19.4858 15.9799C19.4858 16.2417 19.3832 16.493 19.1999 16.6799L15.1999 20.6799C15.1102 20.7769 15.0021 20.855 14.882 20.91C14.7618 20.9649 14.632 20.9955 14.4999 20.9999Z"
                    fill="#3671E9"
                  />
                </svg>
              </button>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Trade;

import React, { useEffect, useState } from "react";
// import nav_logo from "../assets/img/nav_logo.webp";
const Loading = () => {
  setTimeout(() => {
    document.getElementById("none").classList.add("d-none");
    document.body.classList.remove("overflow-hidden");
  }, 3000);
  return (
    <div
      id="none"
      className="loading_back min-vh-100 w-100 position-fixed top-0 start-0 loading"
    >
      <div className="d-flex justify-content-center align-items-center min-vh-100 bg_effect">
        <span className="preloaderAnimation d-flex align-items-center pointer justify-content-center justify-content-sm-start">
          <svg
            width="60"
            height="60"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20 40C31.0457 40 40 31.0457 40 20C40 8.95431 31.0457 0 20 0C8.95431 0 0 8.95431 0 20C0 31.0457 8.95431 40 20 40Z"
              fill="white"
              fill-opacity="0.1"
            />
            <path
              d="M18.8424 28.0463C14.9125 27.4707 11.8965 24.0828 11.8965 19.9891C11.8965 15.8954 14.9125 12.5075 18.8424 11.9322V7.69238C12.5856 8.29084 7.69238 13.5677 7.69238 19.9891C7.69238 26.4104 12.5856 31.687 18.8424 32.2858V28.0463Z"
              fill="white"
            />
            <path
              d="M26.9983 12L26.8892 12.3711V23.1393L26.9983 23.2483L31.9968 20.2937L26.9983 12Z"
              fill="white"
            />
            <path
              d="M26.9985 12L22 20.2937L26.9985 23.2483V18.0217V12Z"
              fill="white"
            />
            <path
              d="M26.9985 24.8745L26.937 24.9495V28.7853L26.9985 28.965L32 21.9214L26.9985 24.8745Z"
              fill="white"
            />
            <path
              d="M26.9985 28.9651V24.8745L22 21.9214L26.9985 28.9651Z"
              fill="white"
            />
            <path
              d="M26.9985 23.248L31.9969 20.2934L26.9985 18.0215V23.248Z"
              fill="white"
            />
            <path
              d="M22 20.2934L26.9984 23.248V18.0215L22 20.2934Z"
              fill="white"
            />
          </svg>
          <p className="mb-0 ps-3 ff_Inter fw_600 fs_2xl clr_white">CRAPPO</p>
        </span>
      </div>
    </div>
  );
};
export default Loading;

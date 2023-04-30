import React from "react";
import earth from "../assets/img/svg/EARTH.svg";
import map_img from "../assets/img/svg/MAP.svg";

function Target() {
  return (
    <>
      <section className=" py-md-5 py-2 mb-5">
        <div className="container">
          <div className="row justify-content-between align-items-center">
            <div className="col-xl-5 col-md-6">
              <h2 className=" fw-semibold fs_4x5l text_black">
                Your Target Market
              </h2>
              <div className="d-flex align-items-center mt-3">
                <img src={earth} alt="earth" />
                <p className=" mb-0 fw-normal fs_md text_black ms-2 ps-1">
                  Nationwide coverage
                </p>
              </div>
              <p className=" fw-normal fs_md mb-0 text_black opacity-75 mt-2 pe-md-5 mb-2">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters.
              </p>
              <a
                className=" px-5 rounded-2 fw-normal fs_md bg_green  text-white py_12_custom started_btn_hover border_transperent mt-4 d-inline-block"
                href="#">
                Get started
              </a>
            </div>
            <div className="col-xl-5 col-md-6">
              <img
                className=" w-100 mt-4 mt-md-0"
                src={map_img}
                alt="map_img"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Target;

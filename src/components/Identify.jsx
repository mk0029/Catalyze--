import React, { useRef } from "react";

import identify_1 from "../assets/img/png/identify1.png";
import identify_2 from "../assets/img/png/identify2.png";
import identify_3 from "../assets/img/png/identify3.png";
import blue_shadow from "../assets/img/png/identify shadow bg.png";
import green_shadow from "../assets/img/png/green shadow infinity.png";

function Identify() {
  return (
    <>
      <section className=" py-md-5 pb-5 z_index_4 position-relative">
        <img
          className=" position-absolute blue_shadow_position w-50"
          src={blue_shadow}
          alt="blue_shadow"
        />
        <img
          className=" position-absolute green_shadow_pposition"
          src={green_shadow}
          alt="green_shadow"
        />
        <div className="container z_index_4 position-relative border_bottom_custom">
          <h2 className=" text-center fw-semibold fs_4x5l max_width_742 mx-auto z_index_4 position-relative text_black">
            Identify Inherited Properties in your local area that will sell
          </h2>
          <div className="row mt-md-5 pt-3">
            <div className=" col-md-3">
              <p className=" fw-normal fs_xl text_black mb-0 px-xl-5 px-sm-3 px-5 text-center">
                Industry High Prediction Rate
              </p>
            </div>
          </div>
          <div className="row justify-content-md-between justify-content-center mt-sm-3">
            <div className="col-md-3 col-sm-6">
              <div className="text-center h-100 d-flex flex-column justify-content-between">
                <h2 className=" fw-semibold fs_4xl text_black mb-0 mt-3 mt-md-0">
                  40%
                </h2>
                <div className="d-flex justify-content-center">
                  <img
                    className="w_75_sm w_md_100  mt-3 mt-md-0"
                    src={identify_1}
                    alt="identify_1"
                  />
                </div>
                <p className=" fw-normal fs_md text_black mb-0 mt-3 mt-md-0">
                  Roughly 4 out of 10 property leads sell within 12 months.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center h-100 d-flex flex-column justify-content-between mt-4 mt-sm-0">
                <h2 className=" fw-semibold fs_4xl text_black mb-0">$77Bn</h2>
                <div className="d-flex justify-content-center">
                  <img
                    className="w_75_sm w_md_100 mt-3 mt-md-0"
                    src={identify_2}
                    alt="identify_2"
                  />
                </div>
                <p className=" fw-normal fs_md text_black mb-0">
                  Predicted total property value that will sell per year.
                </p>
              </div>
            </div>
            <div className="col-md-3 col-sm-6">
              <div className="text-center h-100 d-flex flex-column justify-content-between mt-5 mt-md-0">
                <h2 className=" fw-semibold fs_4xl text_black mb-0">77%</h2>
                <div className="d-flex justify-content-center">
                  <img
                    className=" w_75_sm w_md_100 mt-md-4"
                    src={identify_3}
                    alt="identify_3"
                  />
                </div>
                <p className=" fw-normal fs_md text_black mb-0 mt-md-4">
                  Of recent seller contacted only one agent before finding the
                  right agent they worked with to sell their home.
                </p>
              </div>
            </div>
          </div>{" "}
        </div>
      </section>
    </>
  );
}

export default Identify;

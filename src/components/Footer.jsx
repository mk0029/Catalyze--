import React, { useEffect, useState } from "react";
import LOGOFOOTER from "../assets/img/png/Foterlogo.png";
import ArrowUpper from "../assets/img/png/UpperArrow.png";

function Footer() {
  const top = () => {
    document.documentElement.scrollTop = 0;
  };
  const [backToTop, setbackToTop] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 100) {
        setbackToTop(true);
      } else {
        setbackToTop(false);
      }
    });
  }, []);
  return (
    <>
      <section className=" bg_DarkBlue rounded-4 pt-5 pb-3 mx-md-3 mb-md-3 mb-2 mx-2 position-relative overflow-hidden">
        <div className="footer_color position-absolute "></div>
        <section className=" position-relative" style={{ zIndex: "2" }}>
          <div className="container">
            <div className="row flex-column-reverse flex-lg-row justify-content-between align-items-center">
              <div className="col-lg-8">
                <div className="row">
                  <div className="col-lg-6">
                    <input
                      className="bg_blue_faded outline_none px-3 rounded-1 py_13_custom w-100 fw-semibold fs_md text_greyLight"
                      type="text"
                      placeholder="Name"
                    />
                    <input
                      className="bg_blue_faded outline_none px-3 rounded-1 py_13_custom w-100 fw-semibold fs_md text_greyLight mt-2"
                      type="text"
                      placeholder="Email"
                    />
                    <div className="d-flex justify-content-lg-between gap-lg-2 gap-3 gap-xl-2  mt-2 flex-wrap justify-content-center justify-content-sm-start">
                      <a
                        className=" fw-semibold fs_md Footer-Btn px-xl-3  px-lg-2   rounded-1 white_space"
                        href="#">
                        <svg
                          className="Svg_Footer_Real1 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16ZM8.5 14C10.0913 14 11.6174 13.3679 12.7426 12.2426C13.8679 11.1174 14.5 9.5913 14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8C2.5 9.5913 3.13214 11.1174 4.25736 12.2426C5.38258 13.3679 6.9087 14 8.5 14Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          className="Svg_Footer_Real2 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="#1AD079"
                          />
                        </svg>
                        Financial Services
                      </a>
                      <a
                        className=" fw-semibold fs_md Footer-Btn px-xl-4  px-lg-2 rounded-1 white_space"
                        href="#">
                        <svg
                          className="Svg_Footer_Real2 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 17 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M8.5 16C6.37827 16 4.34344 15.1571 2.84315 13.6569C1.34285 12.1566 0.5 10.1217 0.5 8C0.5 5.87827 1.34285 3.84344 2.84315 2.34315C4.34344 0.842855 6.37827 0 8.5 0C10.6217 0 12.6566 0.842855 14.1569 2.34315C15.6571 3.84344 16.5 5.87827 16.5 8C16.5 10.1217 15.6571 12.1566 14.1569 13.6569C12.6566 15.1571 10.6217 16 8.5 16ZM8.5 14C10.0913 14 11.6174 13.3679 12.7426 12.2426C13.8679 11.1174 14.5 9.5913 14.5 8C14.5 6.4087 13.8679 4.88258 12.7426 3.75736C11.6174 2.63214 10.0913 2 8.5 2C6.9087 2 5.38258 2.63214 4.25736 3.75736C3.13214 4.88258 2.5 6.4087 2.5 8C2.5 9.5913 3.13214 11.1174 4.25736 12.2426C5.38258 13.3679 6.9087 14 8.5 14Z"
                            fill="white"
                          />
                        </svg>
                        <svg
                          className="Svg_Footer_Real1 pe-2"
                          width="26"
                          height="26"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            opacity="0.7"
                            d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                            fill="#1AD079"
                          />
                        </svg>
                        Real Estate
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <textarea
                      className=" w-100 pt_10_custom pb-5 px-2 rounded-2 bg_blue_faded outline_none fw-semibold fs_md text_greyLight mt-4 mt-lg-0"
                      placeholder="Message.."></textarea>
                    <a
                      className=" py-3 bg_green w-100 d-inline-block text-center fw-semibold mt-1 fs_md text-white rounded-1 submit_btn_hover border_transperent"
                      href="#">
                      Submit
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <h2 className=" fw-semibold fs_4xl text-white mt-4 mt-md-0">
                  Contact us
                </h2>
                <p className=" fw-normal fs_md text-white opacity-75 mt-4">
                  Our Predictive Analytics utilize a combination of event-driven
                  data, historical data.
                </p>
              </div>
            </div>
          </div>
        </section>
        <div className="Fooer_Before_line pt-lg-4 mt-5  px-4 position-relative d-flex justify-content-center"></div>
        <footer className="py-4 mt-4">
          <div className=" container">
            <div className="row">
              <div className="col-lg-4 mb-lg-0 mb-4">
                {" "}
                <div className="d-flex h-100 flex-column justify-content-between">
                  {" "}
                  <div className="d-flex flex-column">
                    <a href="#">
                      <img
                        style={{ maxWidth: "170px" }}
                        className=" mb-1"
                        src={LOGOFOOTER}
                        alt="LOGOFOOTER"
                      />
                    </a>
                    <span>
                      <a
                        className=" fw-semibold fs_md text-white mt-2 d-inline-block"
                        href="#">
                        info@catalyzeai.com{" "}
                        <span className=" d-block"> (941) 867-1761</span>
                      </a>
                    </span>
                  </div>
                  <div className="pt-5 mt-2 d-none d-lg-block">
                    <p className=" ff_Seoge text-white opacity-75 fs_xsm fw-normal mb-0">
                      All rights reserved.©20022 Catalyze AI
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-none d-lg-flex">
                <div className="row justify-content-between w-100">
                  <div className="col-xl-6 col-lg-7 px-0 ">
                    <div className=" d-flex flex-column">
                      {" "}
                      <div
                        className="d-flex flex-column gap-2
                      ">
                        <h3 className=" fs_md ff_Seoge fw-semibold  text-white">
                          Financial Services
                        </h3>
                        <span className="pt-2">
                          <a
                            className=" fs_md ff_Seoge fw-normal  text-white"
                            href="#">
                            Pricing
                          </a>
                        </span>
                        <span>
                          <a
                            className=" fs_md ff_Seoge fw-normal  text-white"
                            href="#">
                            Blog
                          </a>
                        </span>
                      </div>{" "}
                      <div className="pt-5 mt-2 d-none d-lg-block">
                        <a
                          hidden
                          className=" ff_Seoge text-white opacity-75 fs_xsm fw-normal px-2 Footer_LinkAfter d-inline-block  position-relative">
                          Do not sell my data{" "}
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-6 col-5 px-0">
                    <div className="d-flex justify-content-end">
                      {" "}
                      <div
                        className="d-flex flex-column gap-2
                      ">
                        <h3 className=" fs_md ff_Seoge fw-semibold  text-white">
                          Real Estate
                        </h3>
                        <span className="pt-2">
                          <a
                            className=" fs_md ff_Seoge fw-normal  text-white"
                            href="#">
                            Pricing
                          </a>
                        </span>
                        <span>
                          <a
                            className=" fs_md ff_Seoge fw-normal  text-white"
                            href="#">
                            Blog
                          </a>
                        </span>
                      </div>
                    </div>{" "}
                  </div>
                </div>
              </div>
              <div className="col-lg-4 d-lg-flex d-none ">
                <div className="h-100 w-100 d-flex flex-column justify-content-between ">
                  <div className="row">
                    <div className="col-6">
                      <div className="d-flex h-100 justify-content-end">
                        {" "}
                        <h3 className=" fs_md ff_Seoge fw-semibold  text-white">
                          LinkedIn
                        </h3>
                      </div>
                    </div>{" "}
                  </div>{" "}
                  <div className="pt-5 mt-2 d-flex gap-4 justify-content-end d-none d-lg-flex w-100">
                    <a
                      href=""
                      className=" ff_Seoge text-white opacity-75 fs_xsm fw-normal px-2 Footer_LinkAfter d-inline-block  position-relative">
                      Terms & Conditions
                    </a>
                    <a
                      href=""
                      className=" ff_Seoge text-white opacity-75 fs_xsm fw-normal px-2 Footer_LinkAfter d-inline-block  position-relative">
                      Privacy Policy
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="row d-lg-none pb-3  ">
              <div className=" col-sm-4 col-6">
                {" "}
                <div className=" d-flex flex-column">
                  {" "}
                  <div
                    className="d-flex flex-column gap-1
                      ">
                    <h3 className=" fs_md ff_Seoge fw-semibold  text-white">
                      Financial Services
                    </h3>
                    <span className="">
                      <a
                        className=" fs_md ff_Seoge fw-normal  text-white"
                        href="#">
                        Pricing
                      </a>
                    </span>
                    <span>
                      <a
                        className=" fs_md ff_Seoge fw-normal  text-white"
                        href="#">
                        Blog
                      </a>
                    </span>
                  </div>{" "}
                </div>
              </div>
              <div className="col-sm-4 col-6">
                <div
                  className="d-flex flex-column gap-1
                      ">
                  <h3 className=" fs_md ff_Seoge fw-semibold  text-white">
                    Real Estate
                  </h3>
                  <span className="">
                    <a
                      className=" fs_md ff_Seoge fw-normal  text-white"
                      href="#">
                      Pricing
                    </a>
                  </span>
                  <span>
                    <a
                      className=" fs_md ff_Seoge fw-normal  text-white"
                      href="#">
                      Blog
                    </a>
                  </span>
                </div>
              </div>{" "}
              <div className="col-sm-4 mt-sm-0 mt-4   ">
                <h3 className=" fs_md ff_Seoge fw-semibold  text-white text-center me-5 pe-5 pe-sm-0 me-sm-0 text-sm-start">
                  LinkedIn
                </h3>
              </div>
            </div>
            <div className="d-lg-none d-flex flex-column flex-md-row align-items- justify-content-between">
              {" "}
              <div className="pt-2 mt-2 ">
                <p className=" ff_Seoge text-white opacity-75 fs_xsm fw-normal mb-0 px-2">
                  All rights reserved.©20022 Catalyze AI
                </p>
              </div>{" "}
              <div className="d-flex gap-4 justify-content-center mt-3">
                {" "}
                <a
                  href=""
                  className=" ff_Seoge text-white opacity-75 fs_xsm fw-normal px-2 Footer_LinkAfter d-inline-block  position-relative">
                  Do not sell my data{" "}
                </a>
                <div className=" d-flex gap-4 justify-content-end">
                  <a
                    href=""
                    className=" ff_Seoge text-white opacity-75 fs_xsm fw-normal px-2 Footer_LinkAfter d-inline-block  position-relative">
                    Terms & Conditions
                  </a>
                  <a
                    href=""
                    className=" ff_Seoge text-white opacity-75 fs_xsm fw-normal px-2 Footer_LinkAfter d-inline-block  position-relative">
                    Privacy Policy
                  </a>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default Footer;

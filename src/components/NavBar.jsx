import React, { useState } from "react";
import logo from "../assets/img/png/Logo.png";
import Finanse from "../assets/img/png/Finenc.png";
import Real from "../assets/img/png/HomeReailState.png";
import Login from "../assets/img/png/LogIn.png";

function NAvBar() {
  const [navShow, setNavShow] = useState(0);
  if (navShow) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "initial";
  }
  return (
    <>
      <section className="py-2 position-relative ">
        <nav style={{ zIndex: "2", position: "relative" }}>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center w-100">
              <div className="d-flex gap-5 align-items-center justify-content-center">
                <a
                  className="ff_inter fw-bold fs_2xl text-white z_index1 my-2"
                  href="#">
                  <img style={{ maxWidth: "170px" }} src={logo} alt="logo" />
                </a>{" "}
                <ul className="d-flex gap-3 gap-xl-5 ps-4 py-3 list-unstyled d-none d-lg-flex align-items-center mb-0 justify-content-end">
                  <span className="">
                    <a
                      className="h-100 fw-semibold fs_md d-flex align-items-center text-black ps-2 d-inline-block gap-1 "
                      href="#">
                      <img
                        className="range_img_size"
                        src={Finanse}
                        style={{ maxWidth: "25px" }}
                        alt="money"
                      />
                      Finanse Services
                    </a>
                  </span>
                  <span className="">
                    <a
                      className="fw-semibold fs_md text-black d-flex align-items-center ps-2 d-inline-block gap-1"
                      href="#">
                      <img
                        className="range_img_size"
                        src={Real}
                        style={{ maxWidth: "25px" }}
                        alt="Real-estate"
                      />
                      Real Estate
                    </a>
                  </span>
                </ul>
              </div>
              <ul className="d-flex align-items-center mb-0 gap-4 d-none d-lg-flex">
                <span className=" Btn-Header HOVER_BLUE">
                  <a className=" fw-semibold text_green fs_md" href="#">
                    Sign up
                  </a>
                </span>
                <span className="Btn-Header_border HOVER_BLUE">
                  <a className=" fw-semibold text_green fs_md" href="#">
                    Log in{" "}
                    <img src={Login} style={{ maxWidth: "25px" }} alt="go" />
                  </a>
                </span>
              </ul>
              <div
                style={{ zIndex: "1000" }}
                className={
                  navShow
                    ? "threeline d-lg-none cursor_pointer my-2"
                    : "threeline d-lg-none cursor_pointer my-2"
                }
                onClick={() => setNavShow(!navShow)}>
                <a href="#">
                  <div
                    className={
                      navShow ? " falseline1" : "  threelinechild"
                    }></div>
                  <div
                    className={navShow ? "falseline" : " threelinechild"}></div>
                  <div
                    className={
                      navShow ? "falseline3 " : "threelinechild"
                    }></div>
                </a>
              </div>
            </div>
            <div className="d-lg-none d-flex ">
              <div className={` ${navShow ? "NAVSHOW" : " NAVEHIDE"}`}>
                <ul class="ps-0 mb-0 d-flex flex-column py-5 align-items-center min-vh-100 justify-content-center  list-unstyled gap-3  pt-3 transition">
                  <ul className="d-flex flex-column gap-3 gap-xl-5 ps-4 py-3 list-unstyled mb-0 align-items-center">
                    <span className="d-flex align-items-center">
                      <a href="#">
                        <img
                          className="range_img_size"
                          src={Finanse}
                          style={{ maxWidth: "25px" }}
                          alt="money"
                        />
                      </a>{" "}
                      <a
                        className="fw-semibold fs_md text_green ps-2 d-inline-block"
                        href="#">
                        Financial Services
                      </a>
                    </span>
                    <span className="d-flex align-items-center">
                      <a href="#">
                        <img
                          className="range_img_size"
                          src={Real}
                          style={{ maxWidth: "25px" }}
                          alt="Real-estate"
                        />
                      </a>
                      <a
                        className="fw-semibold fs_md text_green ps-2 d-inline-block"
                        href="#">
                        Real Estate
                      </a>
                    </span>
                  </ul>
                  <ul className="d-flex flex-column mb-0 gap-4">
                    <span className=" Btn-Header">
                      <a className="fw-semibold text_green fs_md" href="#">
                        Sign up
                      </a>
                    </span>
                    <span className="Btn-Header_border">
                      <a className=" fw-semibold text_green" href="#">
                        Log in{" "}
                        <img
                          src={Login}
                          style={{ maxWidth: "25px" }}
                          alt="go"
                        />
                      </a>
                    </span>
                  </ul>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default NAvBar;

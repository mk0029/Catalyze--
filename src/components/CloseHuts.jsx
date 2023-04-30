import React from "react";
import home_img from "../assets/img/png/home img.png";
import green_polygon from "../assets/img/svg/GreenLayer.svg";
import lightgreen_polygon from "../assets/img/svg/LightGREENPOLI.svg";
import triangle_img from "../assets/img/svg/Trangle.svg";
import vdo_tag from "../assets/img/svg/vdo tag.svg";

function CloseHuts() {
  return (
    <>
      <section className=" py-5 " style={{ background: "#Fafafa" }}>
        <div className="container">
          <div className="row justify-content-between">
            <div className="col-lg-4 col-sm-6">
              <img className=" w-100" src={home_img} alt="home_img" />
            </div>
            <div className="col-lg-2 col-sm-6 d-lg-none">
              <div className="h-100 d-flex flex-column justify-content-between py-4 mt-sm-4 mt-lg-0 ps-sm-5 ps-lg-0">
                <h2 className=" fw-semibold fs_4x5l text_dark_black mb-0">
                  Close More Deals
                </h2>
                <a
                  className="d-flex align-items-center mt-2 mt-sm-0 book_text_hover px-2 py-2 d-inline-block"
                  href="#">
                  <a
                    className=" fw-semibold fs_md text_green btn-main-header d-inline-block"
                    href="#">
                    Book a demo
                  </a>
                  <a className=" ms-3" href="#">
                    <img src={vdo_tag} alt="vdo_tag" />
                  </a>
                </a>
              </div>
            </div>
            <div className="col-lg-3 col-md-8 col-sm-10">
              <div className=" pe-xl-5 mt-sm-4 mt-lg-0">
                <p className=" fw-normal fs_md text_black opacity-75 mb-0">
                  Leverage big data and artificial intelligence to identify your
                  next Client
                </p>
                <p className=" fw-normal fs_md text_black opacity-75 mb-0 mt-4 pb-2">
                  Compliment your current business development with
                  Unconstrained predictive analytics.
                </p>
                <div className="bg-white rounded-2 py-3 px-4 mt-sm-5 mt-3 position-relative">
                  <img
                    className=" transform_translet_y_custom transform_translet_x_custom"
                    src={triangle_img}
                    alt="triangle_img"
                  />
                  <div className="d-flex align-items-center">
                    <img src={green_polygon} alt="green_polygon" />
                    <p className=" mb-0 fw-normal fs_md text_darkgrey ms-3 ps-1">
                      Unconstrained
                    </p>
                  </div>
                  <div className="d-flex align-items-center mt-3">
                    <img src={lightgreen_polygon} alt="lightgreen_polygon" />
                    <p className=" mb-0 fw-normal fs_md text_darkgrey ms-3 ps-1">
                      Constrained
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-sm-6 d-none d-lg-block">
              <div className="h-100 d-flex flex-column justify-content-between py-4 mt-sm-4 mt-lg-0">
                <h2 className=" fw-semibold fs_4x5l text_dark_black mb-0">
                  Close More Deals
                </h2>

                <a
                  className="d-flex align-items-center mt-2 mt-sm-0 book_text_hover px-2 py-2"
                  href="#">
                  <a
                    className=" fw-semibold fs_md text_green text_hover_green"
                    href="#">
                    Book a demo
                  </a>
                  <a className=" ms-3" href="#">
                    <img src={vdo_tag} alt="vdo_tag" />
                  </a>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default CloseHuts;

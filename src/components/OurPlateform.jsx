import React from "react";
import { Carousel } from "react-bootstrap";
import diamand from "../assets/img/svg/diamand.svg";
import BackGarden from "../assets/img/svg/BackGarden.svg";
import WortH from "../assets/img/svg/Worthourplateform.svg";
import Parcent from "../assets/img/svg/Percentage.svg";
// import green$ from "../assets/img/svg/green$.svg";
import GoarrowWhite from "../assets/img/svg/RightBlack.svg";
import EYEIMG from "../assets/img/svg/EyeImgg.svg";
import CircleIMG from "../assets/img/svg/OURplateform.svg";
import notes from "../assets/img/svg/notes.svg";

function OurPlateform() {
  return (
    <>
      <section id="OurPlateform" className="py-sm-4 pb-4 py-md-5">
        <div className=" container">
          <div className="row d-none d-sm-flex">
            <div className="col-lg-3 p-0 px-1">
              <h2 className=" fw-semibold fs_4x5l text_black">
                Ours <span className="d-inline d-sm-block"> Platform</span>
              </h2>
            </div>
            <div className="col-lg-9 p-0 px-1">
              <div className="row">
                {" "}
                <div className="col-sm-6 p-0 px-1">
                  <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between  mx-auto">
                    <div className="d-flex justify-content-between align-items-center px-1">
                      <h2 className=" ff_Seoge fw-semibold fs_xl text_black">
                        Exclusive
                      </h2>
                      <img
                        style={{ width: "50px" }}
                        src={diamand}
                        alt="Err to load"
                      />
                    </div>
                    <p className=" fw-normal fs_md text_black opacity-75 opacity-75 mb-0 mt-md-0">
                      200 exclusive prospects{" "}
                      <span className="d-lg-block">
                        pushed to your platfrom
                      </span>{" "}
                      monthly.
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 p-0 px-1 mt-4 mt-sm-0">
                  <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between mx -auto">
                    <div className="d-flex justify-content-between align-items-center px-1">
                      <h2 className=" ff_Seoge fw-semibold fs_xl text_black">
                        In your<span className=" d-md-block"> backyard</span>
                      </h2>
                      <img
                        style={{ width: "50px" }}
                        src={BackGarden}
                        alt="Err to load"
                      />
                    </div>
                    <p className=" fw-normal fs_md text_black opacity-75 opacity-75 mb-0 mt-md-0">
                      Radius based leads within 50-miles from
                      <span className="d-lg-block">
                        you, prioritizing those closer to you.
                      </span>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            style={{ padding: "10px 0 0 0 " }}
            className="row d-none d-sm-flex justify-content-center">
            <div className="col-lg-9  p-0 px-1">
              <div className="row">
                {" "}
                <div className="col-sm-6 p-0 px-1">
                  <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between  mx-auto">
                    <div className="d-flex justify-content-between align-items-center px-1">
                      <h2 className=" ff_Seoge fw-semibold fs_xl text_black">
                        High <span className="d-block"> net worth</span>
                      </h2>
                      <img
                        style={{ width: "50px" }}
                        src={WortH}
                        alt="Err to load"
                      />
                    </div>
                    <p className=" fw-normal fs_md text_black opacity-75 opacity-75 mb-0 mt-md-0">
                      Average investable assets of $1.5
                      <span className="d-lg-block">million.</span>
                    </p>
                  </div>
                </div>
                <div className="col-sm-6 p-0 px-1 pe-2 mt-4 mt-sm-0 h-100">
                  <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between mx -auto">
                    <div className="d-flex justify-content-between align-items-center px-1">
                      <h2 className=" ff_Seoge fw-semibold fs_xl text_black">
                        High <span className="d-block"> propensity</span>
                      </h2>
                      <img
                        style={{ width: "50px" }}
                        src={Parcent}
                        alt="Err to load"
                      />
                    </div>
                    <p className=" fw-normal fs_md text_black opacity-75 opacity-75 mb-0 mt-md-0">
                      Our combination of event-driven data,
                      <span className="d-xl-block">
                        historical data, behavioral analytics,
                      </span>{" "}
                      and real-time data results in the{" "}
                      <span className="d-xl-block">
                        highest propensity prospects.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-12 p-0 ps-lg-2 mt-2 mt-lg-0">
              <div className="w-100 h-100 ">
                {" "}
                <div className="Bg_green_doller position-relative">
                  <div className="Text-pricing position-absolute d-flex flex-column justify-content-end pe-xl-4">
                    <div className=" d-flex align-content-end justify-content-between pb-5 w-100 align-items-center ps-3 pe-4">
                      {" "}
                      <p
                        href="#"
                        className="fw-semibold fs_md text-white ps-4 mb-0 cursor_pointer">
                        View pricing
                      </p>
                      <a href="#">
                        {" "}
                        <img
                          className=""
                          style={{ width: "25px" }}
                          src={GoarrowWhite}
                          alt="arrow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" row d-sm-none pb-2">
            <div className="col-lg-3 p-sm-0 px-sm-1">
              <h2 className="ps-sm-2 fw-semibold fs_4x5l text_black">
                Ours <span className="d-block"> Platform</span>
              </h2>
            </div>
          </div>
          <Carousel className="d-sm-none rounded-2">
            <Carousel.Item className="rounded-2">
              <div className="col-sm-6 p-0 px-1 rounded-2">
                <div className="cards_bg py-md-5 py-3 px-md-5 rounded-2 px-3 d-flex flex-column justify-content-between  mx-auto">
                  <div className="d-flex justify-content-between align-items-center px-1">
                    <h2 className=" ff_Seoge fw-semibold fs_xl text_black">
                      Exclusive
                    </h2>
                    <img
                      style={{ width: "50px" }}
                      src={diamand}
                      alt="Err to load"
                    />
                  </div>
                  <p className=" fw-normal fs_md text_black opacity-75 opacity-75 mb-0 mt-md-0">
                    200 exclusive prospects{" "}
                    <span className="d-lg-block">pushed to your platfrom</span>{" "}
                    monthly.
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-sm-6 p-0 px-1 ">
                <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between mx -auto">
                  <div className="d-flex justify-content-between align-items-center px-1">
                    <h2 className=" ff_Seoge fw-semibold fs_xl text_black">
                      In your backyard
                    </h2>
                    <img
                      style={{ width: "50px" }}
                      src={BackGarden}
                      alt="Err to load"
                    />
                  </div>
                  <p className=" fw-normal fs_md text_black opacity-75 opacity-75 mb-0 mt-md-0">
                    Radius based leads within 50-miles from
                    <span className="d-lg-block">
                      you, prioritizing those closer to you.
                    </span>{" "}
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-sm-6 p-0 px-1">
                <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between  mx-auto">
                  <div className="d-flex justify-content-between align-items-center px-1">
                    <h2 className=" ff_Seoge fw-semibold fs_xl text_black">
                      High <span className="d-block"> net worth</span>
                    </h2>
                    <img
                      style={{ width: "50px" }}
                      src={WortH}
                      alt="Err to load"
                    />
                  </div>
                  <p className=" fw-normal fs_md text_black opacity-75 opacity-75 mb-0 mt-md-0">
                    Average investable assets of $1.5
                    <span className="d-lg-block">million.</span>
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-sm-6 p-0 px-1 pe-2">
                <div className="cards_bg py-md-5 py-3 px-md-5 px-3 d-flex flex-column justify-content-between mx -auto">
                  <div className="d-flex justify-content-between align-items-center px-1">
                    <h2 className=" ff_Seoge fw-semibold fs_xl text_black">
                      High <span className="d-block"> propensity</span>
                    </h2>
                    <img
                      style={{ width: "50px" }}
                      src={Parcent}
                      alt="Err to load"
                    />
                  </div>
                  <p className=" fw-normal fs_md text_black opacity-75 opacity-75 mb-0 mt-md-0">
                    Our combination of event-driven data,
                    <span className="d-xl-block">
                      historical data, behavioral analytics,
                    </span>{" "}
                    and real-time data results in the{" "}
                    <span className="d-xl-block">
                      highest propensity prospects.
                    </span>
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
          <div className=" row d-sm-none py-2 mx-1 ">
            <div className="col-lg-3 col-12 p-0 ps-lg-2 mt-2 mt-lg-0">
              <div className="w-100 h-100 ">
                {" "}
                <div className="card_bg_img position-relative">
                  <div className="text_on_card position-absolute d-flex flex-column justify-content-end pe-xl-4">
                    <div className=" d-flex align-content-end justify-content-between pb-5 w-100 align-items-center ps-3 pe-4">
                      {" "}
                      <p
                        href="#"
                        className="fw-semibold fs_md text-white ps-4 mb-0 cursor_pointer">
                        View pricing
                      </p>
                      <a href="#">
                        {" "}
                        <img
                          className=""
                          style={{ width: "25px" }}
                          src={GoarrowWhite}
                          alt="arrow"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row mt-5 pt-5 d-none d-md-flex ">
            <div className="col-md-4 hover_shaddow_green">
              <div className="d-flex flex-column align-items-center h-100">
                <img style={{ width: "80px" }} src={EYEIMG} alt="Err to load" />
                <p className=" fw-normal fs_md text_black opacity-75 text-center mb-0 mt-2">
                  Harness the power of 30 million data points to reach your
                  highest converting target market
                </p>
              </div>
            </div>
            <div className="col-md-4 hover_shaddow_green">
              <div className="d-flex flex-column align-items-center h-100">
                <img
                  style={{ width: "80px" }}
                  src={CircleIMG}
                  alt="Err to load"
                />
                <p className=" fw-normal fs_md text_black opacity-75 text-center mb-0 mt-2">
                  Increase your marketingdollars{" "}
                  <span className="d-lg-block"> ROI</span>
                </p>
              </div>
            </div>
            <div className="col-md-4 hover_shaddow_green">
              <div className="d-flex flex-column align-items-center h-100">
                <img style={{ width: "80px" }} src={notes} alt="Err to load" />
                <p className=" fw-normal fs_md text_black opacity-75 text-center mb-0 mt-2">
                  A top of funnel marketing solution to{" "}
                  <span className=" d-xl-block ">
                    fill your prospect pipeline
                  </span>
                </p>
              </div>
            </div>
          </div>
          <Carousel className="d-md-none my-5 slider_bottom">
            <Carousel.Item>
              {" "}
              <div className="col-md-4">
                <div
                  style={{ height: "140px" }}
                  className="d-flex flex-column align-items-center">
                  <img
                    style={{ width: "80px" }}
                    src={EYEIMG}
                    alt="Err to load"
                  />
                  <p className=" fw-normal fs_md text_black opacity-75 text-center mb-0 mt-2">
                    Harness the power of 30 million data points to reach your
                    highest converting target market
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-md-4">
                <div
                  style={{ height: "140px" }}
                  className="d-flex flex-column align-items-center">
                  <img
                    style={{ width: "80px" }}
                    src={CircleIMG}
                    alt="Err to load"
                  />
                  <p className=" fw-normal fs_md text_black opacity-75 text-center mb-0 mt-2">
                    Increase your marketingdollars{" "}
                    <span className="d-lg-block"> ROI</span>
                  </p>
                </div>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              {" "}
              <div className="col-md-4">
                <div
                  style={{ height: "140px" }}
                  className="d-flex flex-column align-items-center">
                  <img
                    style={{ width: "80px" }}
                    src={notes}
                    alt="Err to load"
                  />
                  <p className=" fw-normal fs_md text_black opacity-75 text-center mb-0 mt-2">
                    A top of funnel marketing solution to{" "}
                    <span className=" d-xl-block ">
                      fill your prospect pipeline
                    </span>
                  </p>
                </div>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </section>
    </>
  );
}

export default OurPlateform;

import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PrevArrow from "../assets//img/svg/PrevArrow.svg";
import NextArrow from "../assets//img/svg/NextAerrow.svg";
import { sliderData } from "../assets/MYjs.js/Slider";
function UserSays() {
  var settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    arrows: false,
    autoplaySpeed: 3000,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const SliderControls = useRef();
  return (
    <>
      <section id="Usersays" className=" py-lg-5 py-sm-4 position-relative">
        <div className=" position-absolute greenlayer"></div>
        {/* <div className=" position-absolute bluelayer"></div> */}
        <div className="py-5">
          <div className="container position-relative" style={{ zIndex: "1" }}>
            <div className="d-flex justify-content-between align-items-center pb-5">
              <img
                onClick={() => SliderControls.current.slickPrev()}
                src={PrevArrow}
                alt="Err to load"
              />
              <h2 className=" ff_Seoge fs_4x5l fw-semibold text_black">
                See what our users say{" "}
              </h2>
              <img
                onClick={() => SliderControls.current.slickNext()}
                src={NextArrow}
                alt="Err to load"
              />
            </div>
            <Slider ref={SliderControls} {...settings}>
              {sliderData.map((data) => {
                return (
                  <div className="p-1">
                    <div className="py-5 px-4 bg-white rounded-3">
                      <div className="d-flex align-items-center gap-3 pb-5 px-2">
                        <div className="Circle-User d-flex justify-content-center align-items-center">
                          <h5 className="p-3  ff_Seoge fs_md fw-semibold  mb-0">
                            {data.Text1}
                          </h5>
                        </div>
                        <div>
                          <h2 className=" ff_Seoge fs_xl fw-semibold mb-0 text_black">
                            {data.Text2}
                          </h2>
                          <h3 className=" ff_Seoge fw-normal fs_xsm text_black">
                            {data.Text3}
                          </h3>
                        </div>
                      </div>
                      <p className=" ff_Seoge fs_md fw-normal text_black px-2 opacity-75">
                        {data.Text4}
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
}

export default UserSays;

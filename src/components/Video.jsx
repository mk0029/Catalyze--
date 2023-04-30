import React, { useState } from "react";
import Playbtn from "../assets/img/png/tabler_player-play.png";
import Pousebtn from "../assets/img/svg/pause.jpg";
import Videoplay from "../assets/MP4//ASUS OLED Care Screensaver (Full Black)(1080P_HD).mp4";
import { useRef } from "react";
function Video() {
  const videoRef = useRef(null);
  const videoHandler = (control) => {
    if (control === "play") {
      videoRef.current.play();
    } else if (control === "pause") {
      videoRef.current.pause();
    }
  };
  const [play, setplay] = useState(0);

  return (
    <>
      <section id="Video" className="mb-5">
        <div className="container">
          <div className="my-lg-5 py-sm-5 py-3 position-relative">
            <div
              className="video-Bluelayer position-absolute "
              style={{ zIndex: "-1" }}></div>
            <div
              style={{ zIndex: "-1" }}
              className="video-Greenlayer position-absolute"></div>
            <div className="Video-box mb-5 mx-auto position-relative">
              <div className="video-overlay"></div>

              <div
                className=" d-flex flex-column justify-content-center align-items-center h-100 gap-5 position-relative "
                style={{ zIndex: "2" }}>
                <h2 className=" fs_4x9l ff_Seoge fw-semibold text-white">
                  Watch a demo
                </h2>
                <div>
                  {play ? (
                    <span
                      //   style={{ zIndex: "12" }}
                      className=" position-relative"
                      onClick={() => {
                        videoHandler("pause");
                        setplay(!play);
                      }}>
                      <img
                        className="Playbtn"
                        src={Pousebtn}
                        alt="Err to load"
                      />
                    </span>
                  ) : (
                    <span
                      //   style={{ zIndex: "12" }}
                      className=" position-relative"
                      onClick={() => {
                        videoHandler("play");
                        setplay(!play);
                      }}>
                      <img
                        className="Playbtn"
                        src={Playbtn}
                        alt="Err to load"
                      />
                    </span>
                  )}

                  <video
                    className={play ? " opacity-100 zn2" : "opacity-0 zn1"}
                    ref={videoRef}
                    width="100%"
                    height="100%"
                    style={{
                      transition: "all 300ms ease-in-out",
                      position: "absolute",
                      left: "0",
                      top: "0",
                      zIndex: "3",
                    }}
                    src={Videoplay} //"https://www.youtube.com/embed/Ya_hnuFjRa8"
                  ></video>
                </div>
                <p className=" fs_lg ff_Seoge fw-semibold text-white">
                  Catalyze AI is a predictive analytics business development
                  platform
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Video;

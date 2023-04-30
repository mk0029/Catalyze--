import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import NAvBar from "./components/NavBar";
import Loader from "./components/Loader";
import Header from "./components/Header";
import Video from "./components/Video";
import Identify from "./components/Identify";
import CloseHuts from "./components/CloseHuts";
import OurApproch from "./components/OurApproch";
import Target from "./components/Target";
import UserSays from "./components/UserSays";
import GetStarted from "./components/GetStarted";
import OurPlateform from "./components/OurPlateform";
import Footer from "./components/Footer";
import { Loaderr } from "./assets/MYjs.js/Loaderr";
import Try from "./components/Try";

function App() {
  return (
    <>
      <Loaderr />
      <div
        className=" position-relative  d-flex flex-column "
        style={{ overflowX: "hidden", overflowY: "initial" }}>
        <div className="bg_nave_layer position-absolute"></div>
        <div
          className="my-3 mx-3"
          style={{ zIndex: "123", background: "white" }}>
          <NAvBar />
        </div>
        <Header />
        <Identify />
        <Video />
        <OurPlateform /> <OurApproch />
        <CloseHuts /> <GetStarted />
        <UserSays />
        <Target />
        <Footer />
      </div>
      {/* <Try /> */}
    </>
  );
}

export default App;

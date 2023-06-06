import logo from "./logo.svg";
import "./App.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Digital from "./components/Digital";
import Why from "./components/Why";
import Start from "./components/Start";
import Footer from "./components/Footer";
import Check from "./components/Check";
import Market from "./components/Market";
import Detailed from "./components/Detailed";
import Trade from "./components/Trade";
import Grow from "./components/Grow";
import Loading from "./components/Loading";
import BackToTop from "./components/BackToTop";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({ once: true, disable: "mobile" });
  }, []);
  return (
    <div className="App overflow-hidden">
      <Header />
      <Digital />
      <Why />
      <Check />
      <Trade />
      <Market />
      <Detailed />
      <Grow />
      <Start />
      <Footer />
      {/* <Loading /> */}
      <BackToTop />
    </div>
  );
}

export default App;

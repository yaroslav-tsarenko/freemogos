import Header from "../components/Header";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./LandingPage.css";

const LandingPage = () => {
  return (
    <div className="landingpage">
      <Header />
      <main className="background">
        <FrameComponent1 />
        <FrameComponent />
      </main>
      <Footer />
    </div>
  );
};

export default LandingPage;

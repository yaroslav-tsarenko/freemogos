import Header from "../components/Header";
import FAQContent from "../components/FAQContent";
import Footer1 from "../components/Footer1";
import "./FAQ.css";

const FAQ = () => {
  return (
    <div className="faq">
      <Header
        headerAlignSelf="stretch"
        headerFlex="unset"
        buttonLinkTextDecoration="unset"
        buttonLinkTextDecoration1="unset"
        linkLogTextDecoration="unset"
      />
      <div className="questions">
        <div className="background1">
          <div className="question-content">
            <div className="question-heading">
              <b className="heading-3">Got any questions?</b>
              <div className="we-are-here">We are here to help you</div>
            </div>
          </div>
          <img
            className="faq-banner-oehyt2fmpng-icon"
            loading="lazy"
            alt=""
            src="/faqbanneroehyt2fmpng@2x.png"
          />
        </div>
      </div>
      <main className="f-a-q">
        <FAQContent />
      </main>
      <Footer1 />
    </div>
  );
};

export default FAQ;

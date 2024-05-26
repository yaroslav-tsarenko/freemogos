import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import "./About.css";

const About = () => {
  return (
    <div className="about">
      <FrameComponent3 />
      <main className="about-inner">
        <FrameComponent2 />
      </main>
      <footer className="footer2">
        <div className="footer-content2">
          <div className="link-mogo-logo-5ep1xz9ysvg-parent">
            <img
              className="link-mogo-logo-5ep1xz9ysvg2"
              loading="lazy"
              alt=""
              src="/link--mogo-logo5ep1xz9ysvg-1.svg"
            />
            <div className="subscription-form1">
              <div className="form-input2">
                <div className="your-email-address2">Your email address</div>
              </div>
              <button className="button3">
                <div className="subscribe2">Subscribe</div>
              </button>
            </div>
          </div>
          <div className="privacy-container-wrapper">
            <div className="privacy-container">
              <div className="privacy-content">
                <div className="privacy2">Privacy</div>
                <div className="vertical-divider7" />
              </div>
              <div className="link-button-blog-parent">
                <b className="link-button6">Blog</b>
                <div className="terms-content-wrapper">
                  <div className="terms-content">
                    <div className="terms2">Terms</div>
                    <div className="terms-divider1">
                      <div className="vertical-divider8" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-content">
                <div className="about-links">
                  <b className="link-button7">About us</b>
                  <b className="link-button8">FAQ</b>
                </div>
                <div className="legal-notice-parent">
                  <div className="legal-notice3">Legal Notice</div>
                  <div className="legal-divider1">
                    <div className="vertical-divider9" />
                  </div>
                  <div className="askifreegroupcom3">ask@ifreegroup.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-divider-parent">
          <div className="horizontal-divider2" />
          <div className="copyright-wrapper">
            <p className="copyright-20242">
              Copyright © 2024 iFREE GROUP Inc. All rights reserved.
            </p>
            <div className="socials">
              <div className="follow-us2">Follow us:</div>
              <img
                className="link-image4"
                loading="lazy"
                alt=""
                src="/link--image.svg"
              />
              <img
                className="link-image5"
                loading="lazy"
                alt=""
                src="/link--image-1.svg"
              />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

import Header from "../components/Header";
import "./ContactUS.css";

const ContactUS = () => {
  return (
    <div className="contactus">
      <Header
        headerAlignSelf="stretch"
        headerFlex="unset"
        buttonLinkTextDecoration="unset"
        buttonLinkTextDecoration1="unset"
        linkLogTextDecoration="unset"
      />
      <main className="content">
        <section className="customer-support">
          <div className="customer-support-content">
            <b className="heading-2">Customer Support</b>
            <div className="background2">
              <div className="support-info">
                <div className="were-here-to-help-parent">
                  <div className="were-here-to">We're here to help</div>
                  <div className="support-contact">
                    <div className="cs-support">CS Support:</div>
                    <div className="live-chat">
                      <div className="askifreegroupcom1">
                        ask@ifreegroup.com
                      </div>
                      <div className="link-247">24/7 Live Chat</div>
                    </div>
                  </div>
                  <p className="th-floor-north-container">
                    <span className="th-floor-north">
                      8th floor, North Tower, Alibaba
                    </span>
                    <span className="center-88-dingxin">
                      Center, 88 DingXin Road, HaiZhu,
                    </span>
                    <span className="guangzhou-china">Guangzhou, China</span>
                  </p>
                </div>
              </div>
              <img
                className="about2-5pbnwojmpng-icon"
                loading="lazy"
                alt=""
                src="/about25pbnwojmpng@2x.png"
              />
            </div>
          </div>
          <div className="partner">
            <h1 className="heading-21">Partner With Us</h1>
            <div className="background3">
              <div className="partner-info">
                <b className="why-join-us">Why join us?</b>
                <p className="it-is-our-container">
                  <span>
                    <span className="it-is-our">
                      It is our mission to bring the ultimate roaming experience
                      to our users at favourable prices. We can offer various
                    </span>
                    <span className="cooperation-models-for">
                      cooperation models for our partners that best fit your
                      needs.
                    </span>
                    <span className="provide-worldwide-high">
                      - Provide worldwide high quality connectivity for your
                      users wherever they are
                    </span>
                    <span className="wide-choice-of">
                      -Wide choice of products to offer your users
                    </span>
                    <span className="earn-attractive-commissions">
                      - Earn attractive commissions with MOGO
                    </span>
                    <span className="interested-please-provide">
                      Interested? Please provide the information below and our
                      team will contact you soon.
                    </span>
                  </span>
                </p>
              </div>
              <div className="partner-form">
                <div className="form-fields">
                  <b className="contact-us-now">Contact us now</b>
                  <div className="input">
                    <div className="company-name">Company Name</div>
                  </div>
                  <input
                    className="input1"
                    placeholder="Company Website (optional)"
                    type="text"
                  />
                  <input
                    className="input2"
                    placeholder="Country/ Region"
                    type="text"
                  />
                  <div className="input3">
                    <div className="name-of-contact">Name of Contact</div>
                  </div>
                  <div className="input4">
                    <div className="container">
                      <div className="email">Email</div>
                    </div>
                  </div>
                  <div className="textarea" />
                </div>
                <div className="agreement">
                  <div className="agreement-border-parent">
                    <div className="agreement-border">
                      <div className="border" />
                    </div>
                    <div className="agreement-content">
                      <div className="l-have-read">
                        l have read and agreed to the
                      </div>
                      <div className="affiliate-program-operating">
                        Affiliate Program Operating Agreement
                      </div>
                    </div>
                  </div>
                </div>
                <div className="submit-button">
                  <button className="button1">
                    <div className="send">Send</div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <img className="link-icon" alt="" src="/link.svg" />
      <footer className="footer1">
        <div className="footer-content1">
          <div className="footer-top">
            <img
              className="link-mogo-logo-5ep1xz9ysvg1"
              loading="lazy"
              alt=""
              src="/link--mogo-logo5ep1xz9ysvg-1.svg"
            />
            <div className="newsletter">
              <div className="form-input1">
                <div className="your-email-address1">Your email address</div>
              </div>
              <button className="button2">
                <a className="subscribe1">Subscribe</a>
              </button>
            </div>
          </div>
          <div className="footer-links1">
            <div className="links-container1">
              <div className="privacy-link1">
                <a className="privacy1">Privacy</a>
                <div className="vertical-divider4" />
              </div>
              <div className="blog-link">
                <b className="link-button3">Blog</b>
                <div className="terms-link1">
                  <div className="terms-container">
                    <div className="terms1">Terms</div>
                    <div className="terms-divider">
                      <div className="vertical-divider5" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-faq">
                <div className="about-faq-links1">
                  <b className="link-button4">About us</b>
                  <b className="link-button5">FAQ</b>
                </div>
                <div className="legal">
                  <div className="legal-notice2">Legal Notice</div>
                  <div className="legal-divider">
                    <div className="vertical-divider6" />
                  </div>
                  <div className="askifreegroupcom2">ask@ifreegroup.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="divider-container1">
          <div className="horizontal-divider1" />
        </div>
        <div className="copyright">
          <p className="copyright-20241">
            Copyright © 2024 iFREE GROUP Inc. All rights reserved.
          </p>
          <div className="social">
            <div className="follow-us1">Follow us:</div>
            <img
              className="link-image2"
              loading="lazy"
              alt=""
              src="/link--image.svg"
            />
            <img
              className="link-image3"
              loading="lazy"
              alt=""
              src="/link--image-1.svg"
            />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ContactUS;

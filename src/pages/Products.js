import Header from "../components/Header";
import SearchContainer from "../components/SearchContainer";
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      <Header
        headerAlignSelf="stretch"
        headerFlex="unset"
        buttonLinkTextDecoration="unset"
        buttonLinkTextDecoration1="unset"
        linkLogTextDecoration="unset"
      />
      <main className="search-container-wrapper">
        <SearchContainer />
      </main>
      <footer className="footer">
        <div className="footer-content">
          <div className="top-footer">
            <img
              className="link-mogo-logo-5ep1xz9ysvg"
              loading="lazy"
              alt=""
              src="/link--mogo-logo5ep1xz9ysvg-1.svg"
            />
            <div className="subscription-form">
              <div className="form-input">
                <div className="your-email-address">Your email address</div>
              </div>
              <button className="button">
                <div className="subscribe">Subscribe</div>
              </button>
            </div>
          </div>
          <div className="footer-links">
            <div className="links-container">
              <div className="privacy-link">
                <a className="privacy">Privacy</a>
                <div className="vertical-divider" />
              </div>
              <div className="blog-terms-links">
                <b className="link-button">Blog</b>
                <div className="terms-link-container">
                  <div className="terms-link">
                    <div className="terms">Terms</div>
                    <div className="divider-container">
                      <div className="vertical-divider1" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="about-faq-links">
                <div className="about-faq-container">
                  <b className="link-button1">About us</b>
                  <b className="link-button2">FAQ</b>
                </div>
                <div className="legal-notice">
                  <div className="legal-notice1">Legal Notice</div>
                  <div className="vertical-divider2">
                    <div className="vertical-divider3" />
                  </div>
                  <div className="askifreegroupcom">ask@ifreegroup.com</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="horizontal-divider-container">
          <div className="horizontal-divider" />
        </div>
        <div className="copyright-social">
          <p className="copyright-2024">
            Copyright © 2024 iFREE GROUP Inc. All rights reserved.
          </p>
          <div className="social-links">
            <div className="follow-us">Follow us:</div>
            <img
              className="link-image"
              loading="lazy"
              alt=""
              src="/link--image.svg"
            />
            <img
              className="link-image1"
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

export default Products;

import "./FooterLeft.css";

const FooterLeft = ({ className = "" }) => {
  return (
    <div className={`footer-left ${className}`}>
      <div className="link-mogo-logo-5ep1xz9ysvg-group">
        <img
          className="link-mogo-logo-5ep1xz9ysvg4"
          alt=""
          src="/link--mogo-logo5ep1xz9ysvg-1.svg"
        />
        <div className="subscription-form2">
          <div className="form-input3">
            <div className="your-email-address3">Your email address</div>
          </div>
          <button className="button6">
            <div className="subscribe3">Subscribe</div>
          </button>
        </div>
      </div>
      <div className="footer-links2">
        <div className="link-column-one">
          <div className="privacy-link2">
            <div className="privacy3">Privacy</div>
            <div className="vertical-divider10" />
          </div>
          <div className="link-column-two">
            <b className="link-button11">Blog</b>
            <div className="terms-link2">
              <div className="terms-parent">
                <div className="terms3">Terms</div>
                <div className="divider-two">
                  <div className="vertical-divider11" />
                </div>
              </div>
            </div>
          </div>
          <div className="link-column-three">
            <div className="about-faq1">
              <b className="link-button12">About us</b>
              <b className="link-button13">FAQ</b>
            </div>
            <div className="legal1">
              <div className="legal-notice4">Legal Notice</div>
              <div className="divider-four">
                <div className="vertical-divider12" />
              </div>
              <div className="askifreegroupcom4">ask@ifreegroup.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default FooterLeft;

import FooterLeft from "./FooterLeft";
import PropTypes from "prop-types";
import "./Footer1.css";

const Footer1 = ({ className = "" }) => {
  return (
    <footer className={`footer4 ${className}`}>
      <FooterLeft />
      <div className="copyright1">
        <div className="horizontal-divider4" />
        <div className="copyright-content">
          <div className="copyright-20244">
            Copyright © 2024 iFREE GROUP Inc. All rights reserved.
          </div>
          <div className="social2">
            <div className="follow-us4">Follow us:</div>
            <img
              className="link-image8"
              loading="lazy"
              alt=""
              src="/link--image.svg"
            />
            <img
              className="link-image9"
              loading="lazy"
              alt=""
              src="/link--image-1.svg"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};


export default Footer1;

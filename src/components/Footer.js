import FooterLeft from "./FooterLeft";
import PropTypes from "prop-types";
import "./Footer.css";

const Footer = ({ className = "" }) => {
  return (
    <footer className={`footer3 ${className}`}>
      <FooterLeft />
      <div className="horizontal-divider-wrapper">
        <div className="horizontal-divider3" />
      </div>
      <div className="copyright-2024-ifree-group-i-parent">
        <p className="copyright-20243">
          Copyright © 2024 iFREE GROUP Inc. All rights reserved.
        </p>
        <div className="social1">
          <div className="follow-us3">Follow us:</div>
          <img
            className="link-image6"
            loading="lazy"
            alt=""
            src="/link--image.svg"
          />
          <img className="link-image7" alt="" src="/link--image-1.svg" />
        </div>
      </div>
      <div className="button7">
        <img
          className="ai-3rb8dxspng-icon"
          loading="lazy"
          alt=""
          src="/ai-3rb8dxspng@2x.png"
        />
      </div>
      <img className="link-icon3" alt="" src="/link-2.svg" />
    </footer>
  );
};



export default Footer;

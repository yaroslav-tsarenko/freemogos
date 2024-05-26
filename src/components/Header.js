import { useMemo } from "react";
import "./Header.css";

const Header = ({
  className = "",
  headerAlignSelf,
  headerFlex,
  buttonLinkTextDecoration,
  buttonLinkTextDecoration1,
  linkLogTextDecoration,
}) => {
  const headerStyle = useMemo(() => {
    return {
      alignSelf: headerAlignSelf,
      flex: headerFlex,
    };
  }, [headerAlignSelf, headerFlex]);

  const buttonLinkStyle = useMemo(() => {
    return {
      textDecoration: buttonLinkTextDecoration,
    };
  }, [buttonLinkTextDecoration]);

  const buttonLink1Style = useMemo(() => {
    return {
      textDecoration: buttonLinkTextDecoration1,
    };
  }, [buttonLinkTextDecoration1]);

  const linkLogStyle = useMemo(() => {
    return {
      textDecoration: linkLogTextDecoration,
    };
  }, [linkLogTextDecoration]);

  return (
    <header className={`header ${className}`} style={headerStyle}>
      <div className="link-mogo-logo-5ep1xz9ysvg-wrapper">
        <img
          className="link-mogo-logo-5ep1xz9ysvg3"
          loading="lazy"
          alt=""
          src="/link--mogo-logo5ep1xz9ysvg.svg"
        />
      </div>
      <div className="header-buttons">
        <div className="header-button-container">
          <b className="button-link">Redeem</b>
        </div>
        <div className="button-products-wrapper">
          <a className="button-products">Products</a>
        </div>
        <div className="header-button-container1">
          <b className="button-link1" style={buttonLinkStyle}>
            Data plan
          </b>
        </div>
        <div className="header-button-container2">
          <b className="button-link2">FAQ</b>
        </div>
        <div className="header-button-container3">
          <b className="button-link3" style={buttonLink1Style}>
            Contact
          </b>
        </div>
        <button className="button4">
          <div className="link-log" style={linkLogStyle}>
            Log in
          </div>
        </button>
      </div>
    </header>
  );
};


export default Header;

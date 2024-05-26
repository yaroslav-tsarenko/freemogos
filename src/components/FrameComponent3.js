import Header from "./Header";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`header-wrapper ${className}`}>
      <Header
        headerAlignSelf="unset"
        headerFlex="1"
        buttonLinkTextDecoration="none"
        buttonLinkTextDecoration1="none"
        linkLogTextDecoration="none"
      />
    </div>
  );
};


export default FrameComponent3;

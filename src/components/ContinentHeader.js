import { useMemo } from "react";
import "./ContinentHeader.css";

const ContinentHeader = ({
  className = "",
  oceania,
  aupng,
  australia,
  gB,
  spacer,
  days,
  propMinWidth,
  propWidth,
  propDisplay,
  propMinWidth1,
  propGap,
  propMinWidth2,
  propDebugCommit,
  propDebugCommit1,
  propMinWidth3,
}) => {
  const oceaniaStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const australiaStyle = useMemo(() => {
    return {
      width: propWidth,
      display: propDisplay,
      minWidth: propMinWidth1,
    };
  }, [propWidth, propDisplay, propMinWidth1]);

  const planDataSizeStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const gB2Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
      debugCommit: propDebugCommit,
    };
  }, [propMinWidth2, propDebugCommit]);

  const spacerStyle = useMemo(() => {
    return {
      debugCommit: propDebugCommit1,
    };
  }, [propDebugCommit1]);

  const days3Style = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className={`continent-header ${className}`}>
      <b className="oceania" style={oceaniaStyle}>
        {oceania}
      </b>
      <div className="backgroundbordershadow17">
        <div className="country-image-container">
          <img className="aupng-icon" loading="lazy" alt="" src={aupng} />
          <div className="country-name-container">
            <div className="container13">
              <div className="australia" style={australiaStyle}>
                {australia}
              </div>
            </div>
          </div>
        </div>
        <div className="plan-price">
          <div className="starting-from8">Starting from</div>
          <div className="plan-data-size" style={planDataSizeStyle}>
            <div className="gb8" style={gB2Style}>
              {gB}
            </div>
            <div className="spacer" style={spacerStyle}>
              {spacer}
            </div>
          </div>
        </div>
        <div className="days11" style={days3Style}>
          {days}
        </div>
      </div>
    </div>
  );
};


export default ContinentHeader;

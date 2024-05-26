import { useMemo } from "react";
import "./Background.css";

const Background = ({
  className = "",
  capng,
  canada,
  gB,
  prop,
  prop1,
  days,
  propPadding,
  propAlignSelf,
  propWidth,
  propDisplay,
  propMarginLeft,
  propDisplay1,
  propWidth1,
  propMinWidth,
}) => {
  const backgroundStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const canadaStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
      width: propWidth,
      display: propDisplay,
    };
  }, [propAlignSelf, propWidth, propDisplay]);

  const offerCardDataSizeContainerStyle = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
    };
  }, [propMarginLeft]);

  const gBStyle = useMemo(() => {
    return {
      display: propDisplay1,
      width: propWidth1,
    };
  }, [propDisplay1, propWidth1]);

  const daysStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={`background4 ${className}`} style={backgroundStyle}>
      <div className="offer-card-flags">
        <img className="capng-icon" alt="" src={capng} />
      </div>
      <h1 className="canada" style={canadaStyle}>
        {canada}
      </h1>
      <div
        className="offer-card-data-size-container"
        style={offerCardDataSizeContainerStyle}
      >
        <div className="offer-card-data-size-inner-con">
          <div className="gb" style={gBStyle}>
            {gB}
          </div>
        </div>
        <div className="div">{prop}</div>
        <s className="s">{prop1}</s>
      </div>
      <div className="offer-card-days-container">
        <div className="days" style={daysStyle}>
          {days}
        </div>
      </div>
    </div>
  );
};


export default Background;

import { useMemo } from "react";
import "./BackgroundBorderShadow.css";

const BackgroundBorderShadow = ({
  className = "",
  globalpng,
  regionalP,
  countries,
  gB,
  prop,
  days,
  propAlignSelf,
  propFlex,
  propMinWidth,
  propGap,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
}) => {
  const container1Style = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const regionalPStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const countries1Style = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDivStyle = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const gB1Style = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const divStyle = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const days2Style = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  return (
    <div className={`backgroundbordershadow16 ${className}`}>
      <div className="frame-parent5">
        <div className="frame-parent6">
          <div className="globalpng-parent">
            <img
              className="globalpng-icon"
              loading="lazy"
              alt=""
              src={globalpng}
            />
            <div className="frame-wrapper">
              <div className="container-parent">
                <div className="container12" style={container1Style}>
                  <div className="regional-p" style={regionalPStyle}>
                    {regionalP}
                  </div>
                </div>
                <div className="countries1" style={countries1Style}>
                  {countries}
                </div>
              </div>
            </div>
          </div>
          <div className="starting-from7">Starting from</div>
        </div>
        <div className="gb-parent1" style={frameDivStyle}>
          <div className="gb7" style={gB1Style}>
            {gB}
          </div>
          <div className="div6" style={divStyle}>
            {prop}
          </div>
        </div>
      </div>
      <div className="days10" style={days2Style}>
        {days}
      </div>
    </div>
  );
};



export default BackgroundBorderShadow;

import { useMemo } from "react";
import "./BackgroundBorderShadow2.css";

const BackgroundBorderShadow2 = ({
  className = "",
  packageAsiaPacificpng,
  asiaPacific,
  countries,
  gB,
  asiaPacificDataAmountEmpt,
  days,
  propAlignSelf,
  propFlex,
  propMinWidth,
  propMinWidth1,
  propMinWidth2,
}) => {
  const containerStyle = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const asiaPacificStyle = useMemo(() => {
    return {
      flex: propFlex,
    };
  }, [propFlex]);

  const countriesStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const asiaPacificDataStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const days1Style = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  return (
    <div className={`backgroundbordershadow15 ${className}`}>
      <div className="asia-pacific-flags">
        <img
          className="package-asia-pacificpng-icon1"
          loading="lazy"
          alt=""
          src={packageAsiaPacificpng}
        />
        <div className="asia-pacific-flags-sub-contain">
          <div className="asia-pacific-flags-labels">
            <div className="container11" style={containerStyle}>
              <div className="asia-pacific" style={asiaPacificStyle}>
                {asiaPacific}
              </div>
            </div>
            <div className="countries" style={countriesStyle}>
              {countries}
            </div>
          </div>
        </div>
      </div>
      <div className="starting-from-parent3">
        <div className="starting-from6">Starting from</div>
        <div className="asia-pacific-data-amount">
          <div className="gb6">{gB}</div>
          <div className="asia-pacific-data" style={asiaPacificDataStyle}>
            {asiaPacificDataAmountEmpt}
          </div>
        </div>
      </div>
      <div className="days9" style={days1Style}>
        {days}
      </div>
    </div>
  );
};



export default BackgroundBorderShadow2;

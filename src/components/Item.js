import { useMemo } from "react";
import "./Item.css";

const Item = ({
  className = "",
  prop,
  mOGOESIMWasLaunchedInMOGO,
  eligibleForIOSDevices,
  propWidth,
  propFlex,
  propMinWidth,
  propDebugCommit,
  propMarginLeft,
  propWidth1,
  propAlignSelf,
  propMinWidth1,
}) => {
  const itemStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
      minWidth: propMinWidth,
      debugCommit: propDebugCommit,
      marginLeft: propMarginLeft,
    };
  }, [propWidth, propFlex, propMinWidth, propDebugCommit, propMarginLeft]);

  const frameDiv1Style = useMemo(() => {
    return {
      width: propWidth1,
      alignSelf: propAlignSelf,
    };
  }, [propWidth1, propAlignSelf]);

  const placeholderStyle = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  return (
    <div className={`item ${className}`} style={itemStyle}>
      <div className="purchase-detail-wrapper" style={frameDiv1Style}>
        <div className="purchase-detail">
          <div className="placeholder" style={placeholderStyle}>
            {prop}
          </div>
          <p className="mogo-esim-was-container">
            <span>
              <span className="mogo-esim-was">{mOGOESIMWasLaunchedInMOGO}</span>
              <span className="eligible-for-ios">{eligibleForIOSDevices}</span>
            </span>
          </p>
        </div>
      </div>
      <div className="border1" />
      <div className="backgroundborder">
        <div className="background54" />
      </div>
    </div>
  );
};


export default Item;

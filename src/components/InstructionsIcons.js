import "./InstructionsIcons.css";

const InstructionsIcons = ({
  className = "",
  homeDataPlanLeft7UxzClBUp,
  selectESIMDataPlan,
}) => {
  return (
    <div className={`instructions-icons ${className}`}>
      <img
        className="home-data-plan-left-7uxzclbup-icon"
        loading="lazy"
        alt=""
        src={homeDataPlanLeft7UxzClBUp}
      />
      <div className="instruction-labels">
        <b className="select-esim-data">{selectESIMDataPlan}</b>
      </div>
    </div>
  );
};

export default InstructionsIcons;

import React from "react";
import Wrapper from "../assets/wrappers/MoreInfo";

const MoreInfo = () => {
  return (
    <Wrapper>
      <div className="more-info-container">
        <h4 className="more-info-title">More Information</h4>
        <p className="more-info-subtitle">
          Let's help bring your amazing idea to life{" "}
        </p>
        <p>📧 bryantanksley@gmail.com</p>
        <p>📱 +1 (512) 256-4820</p>
      </div>
    </Wrapper>
  );
};

export default MoreInfo;

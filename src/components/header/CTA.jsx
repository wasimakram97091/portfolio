import React from "react";
import CV from "../../assets/Wasim_Akram_Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Download CV
      </a>
    </div>
  );
};

export default CTA;
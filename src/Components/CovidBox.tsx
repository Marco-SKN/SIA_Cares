import React from "react";
import info_logo from "../image/information.png";

const CovidBox = () => {
  const handleClick = () => {
    window.open(
      "https://www.singaporeair.com/en_UK/sg/travel-info/precautionary-measures/"
    );
  };

  return (
    <div className="covid_container">
      <img src={info_logo} />
      <div className="covid_info">
        <div>
          <b>Covid-19 Information Centre</b>
          <p>
            All you need to know about booking confidently and travelling
            safely.
          </p>
        </div>
        <button onClick={handleClick}>FIND OUT MORE</button>
      </div>
    </div>
  );
};

export default CovidBox;

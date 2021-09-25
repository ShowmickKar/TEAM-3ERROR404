/*
 * Call the API and display positional data in plain text format in this component
 * Use the CELESTRAK API
 */

import React from "react";

const Debris = ({
  OBJECT_NAME,
  NORAD_CAT_ID,
  OBJECT_TYPE,
  PERIOD,
  INCLINATION,
  APOGEE,
  PERIGEE,
  ECCENTRICITY,
  MEAN_MOTION,
  TLE_LINE1,
  TLE_LINE2,
}) => {
  return <li className="debris">
    <h3>Name: {OBJECT_NAME}</h3>
    <p>Period: {PERIOD}</p>
    <p>Inclination: {INCLINATION}</p>
    <p>Mean Motion: {MEAN_MOTION}</p>
  </li>;
};

const DebrisList = () => {
  var data = require("../data/data.json");

  return (
    <ul className='debris-list'>
      {data.map((debris) => {
        return (
          <Debris
            key={debris["OBJECT_ID"]}
            OBJECT_NAME={debris["OBJECT_NAME"]}
            NORAD_CAT_ID={debris["NORAD_CAT_ID"]}
            OBJECT_TYPE={debris["OBJECT_TYPE"]}
            PERIOD={debris["PERIOD"]}
            INCLINATION={debris["INCLINATION"]}
            APOGEE={debris["APOGEE"]}
            PERIGEE={debris["PERIGEE"]}
            ECCENTRICITY={debris["ECCENTRICITY"]}
            MEAN_MOTION={debris["MEAN_MOTION"]}
            TLE_LINE1={debris["TLE_LINE1"]}
            TLE_LINE2={debris["TLE_LINE2"]}></Debris>
        );
      })}
    </ul>
  );
};

const PositionalData = () => {
  return (
    <div>
      <h2>Debris List</h2>
      <DebrisList />
    </div>
  );
};

export default PositionalData;

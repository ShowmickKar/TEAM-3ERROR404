/*
 * Call the API and display positional data in plain text format in this component
 * Use the CELESTRAK API
 */

import React from "react";

// Sample attributes for one object
const sampleData = {
  OBJECT_ID: "1959-001A",
  OBJECT_NAME: "VANGUARD 2",
  NORAD_CAT_ID: "11",
  OBJECT_TYPE: "PAYLOAD",
  PERIOD: "121.487",
  INCLINATION: "32.8725",
  APOGEE: "2940.509",
  PERIGEE: "554.137",
  ECCENTRICITY: "0.1468454",
  MEAN_MOTION: "11.85307269",
  TLE_LINE1:
    "1    11U 59001A   16238.87762969 +.00000360 +00000-0 +18250-3 0  9999",
  TLE_LINE2:
    "2    11 032.8725 238.6809 1468454 317.6718 031.9228 11.85307269109784",
  LAUNCH_DATE: "1959-02-17",
  LAUNCH_SITE: "AIR FORCE EASTERN TEST RANGE",
  OWNER: "UNITED STATES OF AMERICA",
  ORBIT_TYPE: "Low Earth Orbit",
  OPERATIONAL_STATUS: "Unknown",
};

const PositionalData = () => {
  return (
    <div>
      positional data
    </div>
  );
};

export default PositionalData;

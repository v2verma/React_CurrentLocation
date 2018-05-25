import React from "react";
import { render } from "react-dom";
import Demo from "./currentLoc";
// import Geocode from "react-geocode";

// Geocode.setApiKey("AIzaSyCdWDO_nosAWXA4Tab2gsdYDukXdqv1W1Q");

// // Enable or disable logs. Its optional.
// Geocode.enableDebug();

// // Get address from latidude & longitude.
// Geocode.fromLatLng("12.9", "77.5").then(
//   response => {
//     const address = response.results[0].formatted_address;
//     console.log(address);
//   },
//   error => {
//     console.error(error);
//   }
// );

const App = () => (
  <div>
    <Demo />
  </div>
);

render(<App />, document.getElementById("root"));

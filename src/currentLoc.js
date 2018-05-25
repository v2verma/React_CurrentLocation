import React from "react";
import { geolocated } from "react-geolocated";
import Geocode from "react-geocode";

const LOC_API_KEY = "AIzaSyCdWDO_nosAWXA4Tab2gsdYDukXdqv1W1Q";

Geocode.setApiKey(LOC_API_KEY);


class Demo extends React.Component {
  constructor(props) {
    super(props);

    this.state = { town: "" };
  }

  componentDidUpdate(prevProps) {
    console.log(this.props);
    if (prevProps.coords !== this.props.coords) {
      console.log("one time")
      Geocode.fromLatLng(this.props.coords.latitude, this.props.coords.longitude).then(
        response => {
          const address = response.results[0].formatted_address;
          for (var i = 0; i < response.results[0].address_components.length; i++) {
            for (var j = 0; j < response.results[0].address_components[i].types.length; j++) {
              if (response.results[0].address_components[i].types[j] == "locality") {
                var city = response.results[0].address_components[i].long_name;
                break;
              }
            }
          }
          this.setState({ town: response.results[0].address_components[5].long_name})
          console.log(response.results[0].address_components[5].long_name);
        },
        error => {
          console.error(error);
        }
      );
    }
  }

  render() {
    return (
      <div>
        Your Current City is: <b>{this.state.town}</b>
      </div>
    );
  }
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false
  },
  userDecisionTimeout: 5000
})(Demo);

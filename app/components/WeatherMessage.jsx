var React = require('react');

var WeatherMessage = ({temp, location}) => {
  return (
    <div>
      <h3>It is {temp}C in {location}.</h3>
    </div>
  );
};

module.exports = WeatherMessage;

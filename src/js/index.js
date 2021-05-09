import { DOMSelectors } from "./DOM";

//const key = "f8c359893525fec83d43904a9eda906d";
const query = async function () {
  try {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=f8c359893525fec83d43904a9eda906d&units=f&query=${zipcodeValue}`
    );
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};
const init = function () {
  let zipcodeValue;
  const apiKey = `f8c359893525fec83d43904a9eda906d`;

  const getData = async function () {
    try {
      const response = await fetch(
        `http://api.weatherstack.com/current?access_key=f8c359893525fec83d43904a9eda906d&units=f&query=${zipcodeValue}`
      );
      const info = await response.json();
      console.log(info);
      return info;
    } catch (error) {
      console.log(error);
      alert("Hey something went wrong");
    }
  };

  const displayInfo = async function () {
    console.log(cityValue);
  };
  zipcodeValue = DOMSelectors.zipcodeInput.value;
};
const weatherDetails = function (data) {
  const city = data.name;
  const temperature = data.temperature;

  displayWeather([city, temperature, description()]);
}; // description needs to be called to return the value;

var displayWeather = function (input) {
  $("h1").text(input[0]);
  $("h2").html(input[1].celsius);
  $("h3").text(input[2]);
};

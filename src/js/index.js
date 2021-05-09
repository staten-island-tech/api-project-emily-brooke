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
      const data = await response.json(weatherDetails);
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      alert("Hey something went wrong");
    }
  };
  const displayData = async function () {
    console.log(zipcodeValue);
    let city = data.name;
    let temperature = data.temperature;
    let description = data.description;

    displayWeather([city, temperature, description]);
  };
  document
    .querySelector("#submitBtn")
    .addEventListener("click", function (event) {
      zipcodeValue = DOMSelectors.zipcodeInput.value;
      event.preventDefault();
      //getData();
      // displayData();
      zipcodeValue = DOMSelectors.zipcodeInput.value;
      console.log(zipcodeValue);
      const response = getData(query);
      const currentData = response.current;
    });
};

init();

let weatherDetails = function (data) {
  let city = data.name;
  let temperature = data.temperature;
  let description = data.description;

  displayWeather([city, temperature, description]);
}; // description needs to be called to return the value

const displayWeather = function (input) {
  $("h3").text(input[0]);
  $("h4").html(input[1].fahrenheit);
  $("h5").text(input[2]);
};
//$("form").submit(location.zipCode);

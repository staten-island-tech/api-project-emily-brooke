import { DOMSelectors } from "./DOM";

//const key = "f8c359893525fec83d43904a9eda906d";

const init = function () {
  let zipcodeValue;
  const apiKey = `07c745252f5b4d0ca7cdab8e4ffcd178`;
  // const query = async function () {
  //   try {
  //     const response = await fetch(
  //       `https://api.weatherbit.io/v2.0/current?&postal_code=${zipcodeValue}&country=US&key=07c745252f5b4d0ca7cdab8e4ffcd178&units=I`
  //     );
  //   } catch (error) {
  //     console.log(error);
  //     alert("Hey something went wrong");
  //   }
  // };
  const getData = async function () {
    try {
      const response = await fetch(
        `https://api.weatherbit.io/v2.0/current?&postal_code=${zipcodeValue}&country=US&key=07c745252f5b4d0ca7cdab8e4ffcd178&units=I`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
      alert("Please enter a valid ZIPCODE!!!");
    }
  };
  const displayData = function (data) {
    //const response = await getData(query);
    //console.log(data);
    DOMSelectors.contentArea.innerHTML = "";
    const city = data.data[0].city_name;
    const state = data.data[0].state_code;
    const temperature = data.data[0].temp;
    const description = data.data[0].weather.description;
    console.log(city, state, temperature, description);
    //displayData([city, state, temperature, description]);
    //const insertData = function () {
    //   DOMSelectors.contentArea.innerHTML = "";
    const response = function (displayData) {
      if (temperature >= 75) {
        return `Sun's out, legs out. Very hot day.`;
      } else if (temperature >= 60) {
        return `The temperature's nice, but not completely hot. You can wear shorts but it might get a bit chilly later on.`;
      } else {
        return `Are you insane? It's chilly out.`;
      }
    };
    DOMSelectors.contentArea.insertAdjacentHTML(
      "afterbegin",
      `<div class="info">
                  <h3> ${city}, ${state} </h3>
                  <p><span>Weather: </span> ${temperature} °F</p>
                  <p><span>Description: </span>${description}</p>
                  <p><span>${response(displayData)}</span></p>
          </div>`
    );
    //insertData();
  };
  //};
  document
    .querySelector("#submitBtn")
    .addEventListener("click", async function (event) {
      zipcodeValue = DOMSelectors.zipcodeInput.value;
      event.preventDefault();
      console.log(zipcodeValue);
      const infoPromise = getData();
      const info = await infoPromise;
      displayData(info);
      // infoPromise.then(function (info) {
      //   displayData(info);
      // });
      //waits on promise, when it gets promise back it gets info
      //can't use await unless in async function; shut up function if you make the entire function an async function
    });

  // let weatherDetails = function (data) {
  //   let city = data.name;
  //   let temperature = data.temperature;
  //   let description = data.description;

  //   displayWeather([city, temperature, description]);
  // }; // description needs to be called to return the value
};

init();

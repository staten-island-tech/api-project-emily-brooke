import { DOMSelectors } from "./DOM";
import { genres } from "./genre";

//const key = "f8c359893525fec83d43904a9eda906d";
const query = async function () {
  try {
    const response = await fetch(
      `http://api.weatherstack.com/current?access_key=f8c359893525fec83d43904a9eda906d&units=f&query=${searchParams}`
    );
  } catch (error) {
    console.log(error);
    alert("Hey something went wrong");
  }
};

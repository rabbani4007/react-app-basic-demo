import React, { useState, useEffect } from "react";
import axios from "axios";
import { WeatherData } from "./types";
import ReactLoading from "react-loading";

const weather_api_key = '7558e2a72b3df83c411c37edd85b220d';
const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>();
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function getWeatherByCity(city: string) {
    setLoading(true);
    setError("");
    setWeatherData(undefined);
    let endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weather_api_key}`;

    await axios
      .get<WeatherData>(endpoint)
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
        setLoading(false);
      })
      .catch((ex) => {
        const error =
          ex.response.status === 404
            ? "Resource Not found"
            : "An unexpected error has occurred";
        setError(error);
        setLoading(false);
      });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (city && city.length > 0) {
      getWeatherByCity(city);
    }
  }

  return (
    <div className="jumbotron">
      <h1 className="display-4">Weather app!</h1>

      <hr className="my-4" />
      <p>Enter city name and press search button</p>
      <div className="lead">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col">
              <input
                type="text"
                name="txtSearch"
                autoComplete="on"
                className="form-control form-control-dark"
                placeholder="Search city"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
                required
              />
            </div>
            <div className="col">
              <button className="btn btn-primary" type="submit" role="button">
                Search
              </button>

              <i className="bi-sunset"></i>
            </div>
          </div>
        </form>
      </div>
      {loading ? (
        <div style={{ marginLeft: "45%" }}>
          Loading...
          <ReactLoading type="bars" color="green" />
        </div>
      ) : null}
      {weatherData && weatherData.weather.length > 0 ? (
        <div>
          <br />
          <div className="row">
            <div className="col">
              <h1>
                {weatherData.name} - {weatherData.sys.country}
              </h1>
            </div>
          </div>
          <div className="row">
            <div className="col">
              <div>
                <p className="heading" style={{ textTransform: "uppercase" }}>
                  {weatherData.weather[0].description}
                </p>
                <p className="title">
                  <img
                    src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}.png`}
                    alt=""
                  />
                </p>
              </div>
            </div>

            <div className="col">
              <div>
                <p className="heading">TEMP</p>
                <div className="title">
                  <p className="mb-2">{weatherData.main.temp}K</p>
                  <p className="mb-2">
                    {(weatherData.main.temp * 1.8 - 459.67).toFixed(2)}
                    <sup>&#8457;</sup>
                  </p>
                  <p>
                    {(weatherData.main.temp - 273.15).toFixed(2)}
                    <sup>&#8451;</sup>
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div>
                <p className="heading">HUMIDITY</p>
                <p className="title">{weatherData.main.humidity}</p>
              </div>
            </div>
            <div className="col">
              <div>
                <p className="heading">PRESSURE</p>
                <p className="title">{weatherData.main.pressure}</p>
              </div>
            </div>
            <div className="col">
              <div>
                <p className="heading">WIND</p>
                <p className="title">{weatherData.wind.speed} m/s</p>
              </div>
            </div>
            <div className="col">
              <div>
                <p className="heading">Sunrise</p>
                <p className="title">
                  <i className="bi bi-sunrise"></i>
                  {new Date(weatherData.sys.sunrise * 1000).toLocaleTimeString(
                    "en-IN"
                  )}
                </p>
              </div>
              <div>
                <p className="heading">Sunset</p>
                <p className="title">
                  <i className="bi bi-sunset"></i>
                  {new Date(weatherData.sys.sunset * 1000).toLocaleTimeString(
                    "en-IN"
                  )}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {error.length > 0 ? (
        <div>
          <br />
          <div className="alert alert-danger" role="alert">
            {error}
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WeatherComponent;

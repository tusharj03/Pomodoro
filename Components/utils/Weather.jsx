"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Image from "next/image";

import loading from "../../public/loading-light.gif";
import { AiOutlineSearch, AiOutlineUp, AiOutlineDown } from "react-icons/ai";

const Weather = () => {
  const apiKey = process.env.NEXT_PUBLIC_WEATHER_APIKEY;
  const [weatherData, setWeatherData] = useState([{}]);
  const [city, setCity] = useState("");
  const [icon, setIcon] = useState("01d");
  const [loader, setLoader] = useState(true);
  const [searchCity, setSearchCity] = useState();
  const [cityError, setCityError] = useState(false);
  const [isToggle, setIsToggle] = useState(false);
  const [temperatureFahrenheit, setTemperatureFahrenheit] = useState(0);

  const weatherAPI_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&APPID=${apiKey}`;
  const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

  const getLocation = async () => {
    try {
      setLoader(true);
      const location = await axios.get("https://ipapi.co/json");
      setCity(location.data.city);
    } catch (error) {
      setLoader(false);
      console.error(error);
    }
  };

  const getWeather = async () => {
    try {
      setCityError(false);
      setLoader(true);
      setSearchCity("");

      if (city.length === 0) {
        setLoader(false);
        console.error("Empty City");
        return;
      }

      const response = await axios.get(weatherAPI_URL);

      if (response && response.status === 404) {
        setLoader(false);
        setCityError(true);
        setWeatherData([{}]);
        console.error("Error Occurred - Not Found");
        return;
      }

      if (response && response.data) {
        setWeatherData(response.data);
        const { main } = response.data;

        if (main) {
          const temperatureF = main.temp;
          setTemperatureFahrenheit(Math.round(temperatureF));
          const iconCode = response.data.weather[0].icon;
          setIcon(iconCode);
        }

        setLoader(false);
      }
    } catch (error) {
      setLoader(false);
      setCityError(true);
      console.error("An error occurred, please try again");
    }
  };

  const handleChange = (e) => {
    setSearchCity(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(searchCity);
  };

  useEffect(() => {
    getLocation();
  }, []);

  useEffect(() => {
    if (city.length > 0) {
      getWeather();
    }
  }, [city]);

  return (
    <div className="weather-wrapper">
      {loader ? (
        <Image
          src={loading}
          alt="weather-icon"
          width={30}
          height={30}
          quality={100}
          className="loader"
        />
      ) : (
        <>
          <div className="weather">
            {!cityError && (
              <p className="weather-details">
                {weatherData && weatherData.name}
                <Image
                  src={iconURL}
                  alt="weather-icon"
                  width={50}
                  height={50}
                  quality={100}
                  className="weather-icon"
                />
                {temperatureFahrenheit} &#8457;
              </p>
            )}

            {cityError && <p className="weather-details">No such city</p>}

            <button
              alt="weather-search-input-btn"
              className="btn search-toggle-btn"
              onClick={() => setIsToggle(!isToggle)}
            >
              {isToggle ? <AiOutlineUp /> : <AiOutlineDown />}
            </button>
          </div>

          {isToggle && (
            <form className="weather-search" onSubmit={handleSubmit}>
              <input
                type="text"
                className="weather-search-input"
                placeholder="Search City"
                aria-label="Search City"
                value={searchCity}
                onChange={handleChange}
                name="searchCity"
              />

              <button
                alt="weather-search-btn"
                type="submit"
                className="weather-search-btn"
              >
                <AiOutlineSearch className="weather-search-btn--icon" />
              </button>
            </form>
          )}
        </>
      )}
    </div>
  );
};

export default Weather;

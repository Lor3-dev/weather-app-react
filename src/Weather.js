import React from "react";
export default function Weather() {
  return (
    <div className="weather-app-wrapper">
      <div className="weather-app row justify-content-center">
        <div className="row main-info">
          <div className="col-4 p-0 overview">
            <ul className="p-0">
              <li className="main-city" id="city">
                Burgos
              </li>
              <li>
                Last updated: Saturday, 22:00<span id="date"></span>
              </li>
              <li id="description">Clear sky</li>
            </ul>
          </div>
          <div className="col-4 p-0 overview">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
              alt="sunny"
              id="icon"
            />
          </div>
          <div className="col-4 p-0 description text-end">
            <div className="">
              <div>
                <span className="temp" id="temperature">
                  10
                </span>
                <span className="units">
                  <span href="#" id="celsius-link" className="activation">
                    ºC
                  </span>
                  |
                  <span href="#" id="fahrenheit-link">
                    ºF
                  </span>
                </span>
              </div>
            </div>
            <div>
              <ul className="p-0">
                <li>
                  Real Feel: 8<span id="realfeel"></span>ºC
                </li>
                <li>
                  Wind: <span id="wind">20</span>Km/h
                </li>
                <li>
                  Humidity: <span id="humidity">80</span>%
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

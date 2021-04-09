import React from "react";
export default function ListCities() {
  return (
    <div className="weather-app row justify-content-center">
      <ul className="nav justify-content-center list-cities">
        <li className="nav-item">
          <span className="nav-link active madrid" href="#">
            Madrid
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link paris" href="#">
            Paris
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link new-york" href="#">
            New York
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link milan" href="#">
            Milan
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link bordeaux" href="#">
            Bordeaux
          </span>
        </li>
        <li className="nav-item">
          <span className="nav-link berlin" href="#">
            Berlin
          </span>
        </li>
      </ul>
    </div>
  );
}

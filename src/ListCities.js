import React from "react";
export default function ListCities() {
  return (
    <div className="weather-app row justify-content-center">
      <ul className="nav justify-content-center list-cities">
        <li className="nav-item">
          <a className="nav-link active madrid" href="#">
            Madrid
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link paris" href="#">
            Paris
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link new-york" href="#">
            New York
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link milan" href="#">
            Milan
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link bordeaux" href="#">
            Bordeaux
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link berlin" href="#">
            Berlin
          </a>
        </li>
      </ul>
    </div>
  );
}

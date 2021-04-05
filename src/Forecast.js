import React from "react";
export default function Forecast() {
  return (
    <div className="card border mx-1 mb-2 forecast-card">
      <span className="card-body">
        <h5 className="card-title text-center forecast">Monday</h5>
        <img
          src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
          alt="sunny"
          id="icon1"
        />
        <p className="card-text text-center">
          <span className="max-temp">
            <strong>25</strong>
          </span>
          º/<span className="min-temp">15</span>º
        </p>
      </span>
    </div>
  );
}

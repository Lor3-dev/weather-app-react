import React from "react";
export default function Search() {
  return (
    <form className="row g-1 justify-content-center" id="search-form">
      <div className="col-6">
        <input
          type="search"
          className="form-control"
          id="city-input"
          placeholder="Enter a city"
          autocomplete="off"
        />
      </div>
      <div className="col-auto">
        <button type="submit" className="btn btn-primary mb-2">
          Search
        </button>
      </div>
      <div className="col-auto">
        <button
          type="submit"
          className="btn btn-primary mb-2"
          id="current-button"
        >
          Current
        </button>
      </div>
    </form>
  );
}

import React, { useState } from "react";
import './Crud.css';

export default function SearchCountry() {
  const [country, setCountry] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [confirmedCases, setConfirmedCases] = useState([]);

  async function handleSearch(){
      const response = await fetch(
        `https://api.covid19api.com/country/${country}/status/confirmed?from=${startDate}T00:00:00Z&to=${endDate}T00:00:00Z`
      );
      const data = await response.json();
      setConfirmedCases(data);
  };

  return (
    <div className="container-crud">
      <h1 className="txt">Search Country for Confirmed Cases</h1>
      <form>
        <label htmlFor="country">Country:</label>
        <input
          type="text"
          id="country"
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <label htmlFor="start-date">Start Date:</label>
        <input
          type="date"
          id="start-date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label htmlFor="end-date">End Date:</label>
        <input
          type="date"
          id="end-date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </form>
      {confirmedCases.length > 0 && (
        <div className="card-container-crud">
          <h2>Number of Confirmed Cases:</h2>
          <ul className="card-list">
            {confirmedCases.map((item, index) => (
              <li className="card-crud"key={index}>
                <p className="date">Date: {item.Date}</p>
                <p className="cases">Confirmed Cases: {item.Cases}</p>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllCountries.css";
import nativeAxios from "./axios";
// import Records from "./Records";

export default function AllCountries() {
  const [countries, setCountries] = useState([]);
  // const [records, setRecords] = useState([]);

  useEffect(() => {
    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => {
        setCountries(response.data.Countries);
      })
      .catch((error) => {
        console.error("Error fetching countries data: ", error);
      });
  }, []);

  const handleAddToRecord = (country) => {
    const date = new Date(country.Date);

    // Extract the individual components of the date (year, month, day)
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1 and pad with leading zero if necessary
    const day = String(date.getDate()).padStart(2, "0"); // Pad day with leading zero if necessary

    // Create the formatted date string in "YYYY-MM-DD" format
    const formattedDate = `${year}-${month}-${day}`;

    let params = {
      Country: country.Country,
      Total_Confirmed_Cases: country.TotalConfirmed,
      Total_Deaths_Cases: country.TotalDeaths,
      Total_Recovered_Cases: country.TotalRecovered,
      Date: formattedDate,
    };
    console.log(country.Date);
    nativeAxios
      .post("/api/v1/covid/", params)
      .then((res) => {
        console.log(res, "res");
        alert("Added To Your Records")
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="cards-container">
      {countries.map((country, index) => (
        <div className="card" key={index}>
          <h3>{country.Country}</h3>
          <p>Total Confirmed Cases: {country.TotalConfirmed}</p>
          <p>Total Deaths: {country.TotalDeaths}</p>
          <p>Total Recovered: {country.TotalRecovered}</p>
          <p>Date: {new Date(country.Date).toDateString()}</p>
          <button onClick={() => handleAddToRecord(country)}>
            Add to Record
          </button>
        </div>
      ))}
    </div>
  );
}

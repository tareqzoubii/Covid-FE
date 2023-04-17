// import React, { useState, useEffect } from 'react';
// // import './card.css';
// import Button from 'react-bootstrap/Button';
// import axios from 'axios';

// export default function AllCountries() {

//     const [data, setData] = useState([]);


//     async function addToRecords(id) {
//         const url = `https://my-api.com/records/${id}`;
//         try {
//             const response = await axios.post(url);
//             console.log(response.data);
//         } catch (error) {
//             console.error(error);
//         }
//     }


//     useEffect(() => {
//         async function fetchData() {
//             const response = await axios.get("https://api.covid19api.com/summary");
//             const jsonData = response.data;
//             setData(jsonData.Countries);
//         }
//         fetchData();
//     }, []);

//     return (
//         <div>
//             <h1>COVID19 Statistics for All countries</h1>
//             <div>
//                 {data.map((result) => {
//                     return (
//                         <div class="card">
//                         <div class="cardContainer">
//                             <h4><b>Country: {result.Country}</b></h4>
//                             <p>Total Confirmed Cases: {result.TotalConfirmed}</p>
//                             <p>Total Deaths Cases:  {result.TotalDeaths} </p>
//                             <p>Total Recovered Cases:  {result.TotalRecovered} </p>
//                             <p>Date:  {result.ID} </p>
        
//                             <hr />
//                             <Button variant="primary" onClick={() => addToRecords(result.ID)}>ADD TO MY RECORDS</Button>
//                         </div>
//                     </div>
//                             );
//                 })}

//             </div>
//         </div >
//     )
// }
// import React, { useState, useEffect } from "react";

// export default function AllCountries() {
//   const [countriesData, setCountriesData] = useState([]);

//   useEffect(() => {
//     async function fetchCountriesData() {
//       const response = await fetch("https://api.covid19api.com/summary");
//       const data = await response.json();
//       setCountriesData(data.Countries);
//     }

//     fetchCountriesData();
//   }, []);

//   const handleAddToRecord = (country) => {
//     // You can implement your logic for adding country data to a record
//     // For now, let's just log the country data to the console
//     console.log("Adding to record:", country);
//   };

//   return (
//     <div>
//       <h1>All Countries COVID-19 Statistics</h1>
//       <div className="cards-container">
//         {countriesData.map((country, index) => (
//           <div className="card" key={index}>
//             <h3>{country.Country}</h3>
//             <p>Total Confirmed Cases: {country.TotalConfirmed}</p>
//             <p>Total Deaths: {country.TotalDeaths}</p>
//             <p>Total Recovered: {country.TotalRecovered}</p>
//             <p>Date: {new Date(country.Date).toDateString()}</p>
//             <button onClick={() => handleAddToRecord(country)}>
//               Add to Record
//             </button>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./AllCountries.css"; 
import nativeAxios from "./axios"
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
    // You can implement your logic for adding country data to a record
    // For now, let's just log the country data to the console

    const date = new Date(country.Date);
    
// Extract the individual components of the date (year, month, day)
const year = date.getFullYear();
const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed, so add 1 and pad with leading zero if necessary
const day = String(date.getDate()).padStart(2, "0"); // Pad day with leading zero if necessary

// Create the formatted date string in "YYYY-MM-DD" format
const formattedDate = `${year}-${month}-${day}`;

    

    let params={
      // csrfmiddlewaretoken: country.csrfmiddlewaretoken
      Country: country.Country,
      Total_Confirmed_Cases:country.TotalConfirmed,
      Total_Deaths_Cases: country.TotalDeaths,
      Total_Recovered_Cases: country.TotalRecovered,
      Date: formattedDate,
    }
    console.log(country.Date)
    nativeAxios.post("/api/v1/covid/",params).then(res=>{
             console.log(res,"res")
    }).catch(error=>{
      console.log(error)
    })
  };
  

  return (
    <div>
    <div className="cards-container">
      {countries.map((country, index) => (
        <div className="card" key={index}>
          <h3>{country.Country}</h3>
          <p>Total Confirmed Cases: {country.TotalConfirmed}</p>
          <p>Total Deaths: {country.TotalDeaths}</p>
          <p>Total Recovered: {country.TotalRecovered}</p>
          <p>Date:  {new Date(country.Date).toDateString()}</p>
          <button onClick={() => handleAddToRecord(country)}>Add to Record</button>
        </div>
      ))}
    </div>
    {/* <Records records={records} /> */}
    </div>
  );
}




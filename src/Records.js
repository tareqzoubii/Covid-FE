// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Button from 'react-bootstrap/Button';

// export default function Records() {


//     const [recordsData, setRecordsData] = useState([]);

//     useEffect(() => {
//         async function fetchData() {
//             let url ="";
//             const response = await axios.get(url);
//             setRecordsData(response.Countries);
//         }
//         fetchData();
//     }, []);


//     const handleDelete = async (e) => {
//         e.preventDefault();
//         let url=``;
//         let id =``;
//         try {
//             const res = await axios.delete(`${url}/${id}/`);
//             console.log(res);
//         } catch (err) {
//             console.log(err);
//         }
//     };


//     return (
//         <div>
//             <h1>COVID19 Statistics for All countries</h1>

//             {recordsData.length ? (<div>
//                 {recordsData.map((card) => {
//                     return (
//                         <div class="card">
//                             <div class="cardContainer">
//                                 <h4><b>Country: {card.Country}</b></h4>
//                                 <p>Date: {card.Date} </p>
//                                 <hr />
//                                 <Button variant="primary" onClick={handleDelete}>Delete</Button>

//                             </div>
//                         </div>
//                     );
//                 })}

//             </div>
//             ) : (
//                 <h2>No Available Records </h2>
//             )}


//         </div>
//     )
// }
// Records.js
import React from "react";

const Records = ({ records }) => {
  return (
    <div>
      <h2>Records</h2>
      <ul>
        {records.map((record, index) => (
          <li key={index}>
            <p>Country: {record.Country}</p>
            <p>Total Confirmed Cases: {record.TotalConfirmed}</p>
            <p>Total Deaths: {record.TotalDeaths}</p>
            <p>Total Recovered: {record.TotalRecovered}</p>
            <p>Date: {new Date(record.Date).toDateString()}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Records;

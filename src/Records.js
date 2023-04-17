import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import nativeAxios from "./axios";


export default function MyRecords() {
  const [recordsData, setRecordsData] = useState([]);
     // 		/api/v1/covid/
  useEffect(() => {
     // http://127.0.0.1:8000/api/v1/covid/16
     getAllCards()

  }, []);

 

  const deleteCard=(id)=>{
     
     nativeAxios.delete(`api/v1/covid/${id}`).then(res=>{
          getAllCards()
     }).catch(error=>{
          console.log(error)
     })
  }
  const getAllCards=()=>{
     nativeAxios.get("api/v1/covid/").then(res=>{
          setRecordsData(res.data)
     }).catch(error=>{
          console.log(error)
     })
  }
  return (
    <div>
      <h1>COVID19 Statistics for All countries</h1>

      {recordsData.length ? (
        <div>
          {recordsData.map((card) => {
            return (
              <div class="card">
                <div class="cardContainer">
                  <h4>
                    <b>Country: {card.Country}</b>
                  </h4>
                  <p>Date: {card.Date} </p>
                  <hr />
                  <Button variant="primary" onClick={()=>deleteCard(card.id)}>Delete</Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h3>No Available Records ¯\_(ツ)_/¯</h3>
      )}
    </div>
  );
}

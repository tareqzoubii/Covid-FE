import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import nativeAxios from "./axios";
import "./Records.css";

export default function MyRecords() {
  const [recordsData, setRecordsData] = useState([]);
  // 		/api/v1/covid/
  useEffect(() => {
    // http://127.0.0.1:8000/api/v1/covid/16
    getAllCards();
  }, []);

  const getAllCards = () => {
    nativeAxios
      .get("api/v1/covid/")
      .then((res) => {
        setRecordsData(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const deleteCard = (id) => {
    nativeAxios
      .delete(`api/v1/covid/${id}`)
      .then((res) => {
        getAllCards();
        alert("Deleted")
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <h1 className="txt">COVID19 Statistics for All countries</h1>

      {recordsData.length ? (
        <div className="cards-container">
          {recordsData.map((card) => {
            return (
              <div className="cards-container">
                <div class="card">
                  <h4>
                    <b>Country: {card.Country}</b>
                  </h4>
                  <p>Date: {card.Date} </p>
                  <hr />
                  <Button variant="primary" onClick={() => deleteCard(card.id)}>
                    Delete
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <h2>You Have No Records</h2>
      )}
    </div>
  );
}

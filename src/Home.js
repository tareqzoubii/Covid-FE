import React, { useState, useEffect } from "react";
import "./Home.css";
import { Container } from "react-bootstrap";
import Crud from "./Crud";

export default function Home() {
  const [worldStats, setWorldStats] = useState([]);

  useEffect(() => {
    async function fetchWorldStats() {
      const response = await fetch("https://api.covid19api.com/world/total");
      const data = await response.json();
      setWorldStats(data);
    }

    fetchWorldStats();
  }, []);

  return (
    <div>
     <h1 className="txt">World Total Statistics</h1>
      <Container className="conthome">
        <div className="card">
          <h2>Total Confirmed Cases</h2>
          <p>{worldStats["TotalConfirmed"]}</p>
        </div>
        <div className="card">
          <h2>Total Deaths</h2>
          <p>{worldStats["TotalDeaths"]}</p>
        </div>
        <div className="card">
          <h2>Total Recovered</h2>
          <p>{worldStats["TotalRecovered"]}</p>
        </div>
      </Container>
      <Crud />
    </div>
  );
}

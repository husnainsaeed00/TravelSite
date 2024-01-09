import React from "react";
import location from "./images/location.svg";


export default function Card(props) {
  return (
    <div className="card">
      <img src={props.img} className="card-img" alt={props.title}/>
      <div className="card-desc">
        <div className="location">
          <img src={location} alt="location" className="location-icon"/>
          <span className="card-country">{props.country}</span>
          <a className="map-link" href={props.location}>View on Map</a>
        </div>
        <div className="card-title">{props.title}</div>
        <div className="date">
          {props.date}
        </div>
        <div className="card-text">
          {props.detail}
        </div>
      </div>
    </div>
  );
}

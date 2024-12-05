import React from "react";
import { useParams } from "react-router-dom";
import Movies from "../utils/Movies";
import "./Detay.css";

const Detay = () => {
  const { id } = useParams();
  const filtredResult = Movies.find((item) => item.id === parseInt(id));

  if (!filtredResult) {
    return (
      <div className="detay-container">
        <h2>Böyle bir film bulunamadı.</h2>
      </div>
    );
  }

  return (
    <div className="detay-container">
      <div className="detay-content " >
        <img
          className="detay-image"
          src={filtredResult.image}
          alt={filtredResult.name}
        />
        <div className="detay-text">
          <h2 className="detay-title">{filtredResult.name}</h2>
          <p className="detay-description">{filtredResult.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detay;

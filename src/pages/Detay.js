import React from 'react';
import { useParams } from 'react-router-dom';
import Movies from "../utils/Movies";// Make sure the correct data is being imported

const Detay = () => {
    const { id } = useParams();
    const filtredResult = Movies.find(item => item.id === parseInt(id));

    if (!filtredResult) {
        return (
            <div>
                <h2>Böyle bir film bulunamadı.</h2>
            </div>
        );
    }

    return (
        <div>
            <h2>{filtredResult.name}</h2>
            <p>{filtredResult.description}</p>
            <img src={filtredResult.image} alt={filtredResult.name} />
        </div>
    );
};

export default Detay;

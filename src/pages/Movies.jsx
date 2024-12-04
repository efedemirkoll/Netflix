import React from "react";
import styled from "styled-components";
import Navbar from "../components/Navbar";
import SelectGenre from "../components/SelectGenre";
import Slider from "../components/Slider";


function MoviePage() {

  return (
    <Container>
      <div className="navbar">
        <Navbar  />
      </div>
      <div className="data">
        <SelectGenre  type="movie" />
        <Slider  /> 
      </div>
    </Container>
  );
}

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;
export default MoviePage;

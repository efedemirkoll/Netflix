import React from "react";
import styled from "styled-components";
import Slider from "react-styled-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Movies from "../utils/Movies";
import { Link } from "react-router-dom";
const responsive = [
  { breakPoint: 1280, cardsToShow: 3 },
  { breakPoint: 760, cardsToShow: 2 },
];

const ExampleSlider = () => {
  const filteredcomedy = Movies.filter((item) => item.id === 1 || item.id === 2 || item.id === 3 || item.id === 4);
  const filteredadventure = Movies.filter((item) => item.id === 5 || item.id === 6 || item.id === 7 || item.id === 8);
  const filteredfear = Movies.filter((item) => item.id === 9 || item.id === 10 || item.id === 11 || item.id === 12);

  return (
    <Container>

      <SliderWrapper>
        <Slider responsive={responsive} customStyles={{ margin: "0 auto" }}>
          {filteredcomedy.map((item) => {
            return (
              <Slide key={item.id}>
                <StyledImage src={item.image} alt={item.name} />
                <p className="legend">{item.name}</p>
                <Link to={`detay/${item.id}`}>
                  <button className="p-4">
                    DETAY
                  </button>
                </Link>

              </Slide>
            );
          })}
        </Slider>
      </SliderWrapper>

      {/* 2.silider */}
      <SliderWrapper>
        <Slider responsive={responsive} customStyles={{ margin: "0 auto" }}>
          {filteredadventure.map((item) => {
            return (
              <Slide key={item.id}>
                <StyledImage src={item.image} alt={item.name} />
                <p className="legend">{item.name}</p>
              </Slide>
            );
          })}
        </Slider>
      </SliderWrapper>

      {/* 3.silider */}
      <SliderWrapper>
        <Slider responsive={responsive} customStyles={{ margin: "0 auto" }}>
          {filteredfear.map((item) => {
            return (
              <Slide key={item.id}>
                <StyledImage src={item.image} alt={item.name} />
                <p className="legend">{item.name}</p>
              </Slide>
            );
          })}
        </Slider>
      </SliderWrapper>
    </Container>
  );
};

export default ExampleSlider;

const Container = styled.div`
  margin-top: 15rem;
  margin: 0 auto;
  padding: 3rem;
`;

const SliderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 85vh;
`;

const Slide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0;
  font-size: 1.3rem;
`;

const StyledImage = styled.img`
  width: 20rem;
  height: 28rem;
  border-radius: 8px;
  object-fit: cover;
`;

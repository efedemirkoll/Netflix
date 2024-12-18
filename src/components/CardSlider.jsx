import React from "react";
import styled from "styled-components";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Card from "./Card";
export default React.memo(function CardSlider() {


  return (
    <Container
      className="flex column"

 
    >
      <h1></h1>
      <div className="wrapper">
        <div
          className=""
        >
          <AiOutlineLeft  />
        </div>
        <div className="slider flex" >
         
        <Card   />

        </div>
        <div
          className=""
        >
          <AiOutlineRight />
        </div>
      </div>
    </Container>
  );
});
const Container = styled.div`
  gap: 1rem;
  position: relative;
  padding: 2rem 0;
  h1 {
    margin-left: 50px;
  }
  .wrapper {
    .slider {
      width: max-content;
      gap: 1rem;
      transform: translateX(0px);
      transition: 0.3s ease-in-out;
      margin-left: 50px;
    }
    .slider-action {
      position: absolute;
      z-index: 99;
      height: 100%;
      top: 0;
      bottom: 0;
      width: 50px;
      transition: 0.3s ease-in-out;
      svg {
        font-size: 2rem;
      }
    }
    .none {
      display: none;
    }
    .left {
      left: 0;
    }
    .right {
      right: 0;
    }
  }
`;

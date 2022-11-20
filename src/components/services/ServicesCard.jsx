import React from "react";
import styled from "styled-components";
import { Car1 } from "../../assets";

const ServicesCard = () => {
  return (
    <ServicesCardContainer>
      <CardLeft>
        <img src={Car1} alt="" />
      </CardLeft>
      <CardRight>
        <p>Mobile & ICT Equipment Service</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          quod officiis aspernatur a, enim quos repellat voluptate rem rerum
          qui.
        </p>
      </CardRight>
    </ServicesCardContainer>
  );
};

export default ServicesCard;

const ServicesCardContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  gap: 10px;
  background-color: white;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px #cecece75;
  padding: 15px;
`;
const CardLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d8d8ea;
  border-radius: 50px;
  width: max-content;
  height: max-content;
  padding: 10px;

  img {
    width: 40px;
    border-radius: 50px;
    box-shadow: 5px 5px 5px #8a8a8a;
  }
`;
const CardRight = styled.div`
  display: flex;
  flex-flow: column;
  gap: 10px;

  p {
    :nth-of-type(1) {
      font-size: clamp(14px, 1.4vw, 16px);
      font-weight: 600;
    }
    :nth-of-type(2) {
      font-size: clamp(12px, 1.4vw, 14px);
      font-weight: 400;
      color: #636363;
    }
  }
`;

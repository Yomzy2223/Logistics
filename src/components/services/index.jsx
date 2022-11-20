import React from "react";
import styled from "styled-components";
import { Dispather } from "../../assets";
import ServicesCard from "./ServicesCard";

const Services = () => {
  return (
    <ServicesContainer>
      <ServicesTop>
        <p>Our Services</p>
        <p>
          Onard International limited offers the best in the listed services. We
          are trusted by thousands of companies and hundreds of top-notch.
        </p>
      </ServicesTop>
      <ServicesBottom>
        <BottomLeft>
          <img src={Dispather} alt="" />
        </BottomLeft>
        <BottomRight>
          <ServicesCard />
          <ServicesCard />
          <ServicesCard />
        </BottomRight>
      </ServicesBottom>
    </ServicesContainer>
  );
};

export default Services;

const ServicesContainer = styled.div`
  margin-block: 50px;
  padding-inline: clamp(30px, 4vw, 50px);
`;
const ServicesTop = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 40px 20px;
  p {
    :nth-of-type(1) {
      font-size: clamp(28px, 3vw, 35px);
      font-weight: 800;
    }
    :nth-of-type(2) {
      text-align: center;
      font-size: clamp(14px, 3vw, 16px);
      max-width: 700px;
    }
  }
`;
const ServicesBottom = styled.div`
  display: flex;
  gap: 6%;
`;

const BottomLeft = styled.div`
  display: flex;
  width: max-content;
  width: 47%;

  img {
    width: 90%;
    max-width: 400px;
    border-radius: 150px;
  }
`;

const BottomRight = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: space-around;
  width: 47%;
`;

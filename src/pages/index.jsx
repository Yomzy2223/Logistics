import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Home from "../components/home";

const HomePage = () => {
  return (
    <HomepageContainer>
      <Header />
      <Home />
    </HomepageContainer>
  );
};

export default HomePage;

const HomepageContainer = styled.div`
  padding-inline: clamp(30px, 4vw, 50px);
  overflow: hidden;
`;

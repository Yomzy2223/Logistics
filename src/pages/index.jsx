import React from "react";
import Header from "../components/header";
import styled from "styled-components";
import Home from "../components/home";
import Services from "../components/services";
import Bottom from "../components/bottom";

const HomePage = () => {
  return (
    <HomepageContainer>
      <Header />
      <Home />
      <Services />
      <Bottom />
    </HomepageContainer>
  );
};

export default HomePage;

const HomepageContainer = styled.div`
  max-width: 1400px;
`;

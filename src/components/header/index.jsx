import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { logo } from "../../assets";

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderLeft>
        <HeaderLink>
          <NavLink>
            <img src={logo} alt="" />
          </NavLink>
        </HeaderLink>
        <HeaderLink>
          <NavLink>Home</NavLink>
        </HeaderLink>
        <HeaderLink>
          <NavLink>About Us</NavLink>
        </HeaderLink>
        <HeaderLink>
          <NavLink>Services</NavLink>
        </HeaderLink>
        <HeaderLink>
          <NavLink>Branches Location</NavLink>
        </HeaderLink>
        <HeaderLink>
          <NavLink>Support</NavLink>
        </HeaderLink>
      </HeaderLeft>
      <HeaderRight>
        <button>Tracking</button>
      </HeaderRight>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 65px;
`;
const HeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const HeaderRight = styled.div`
  display: flex;
  align-items: center;
  button {
    background-color: white;
    padding: 10px 16px;
    color: #5732fb;
    border: 1px solid #5732fb;
    border-radius: 5px;
    transition: 0.3s all ease;

    :hover {
      color: white;
      background-color: #5732fb;
    }
  }
`;
const HeaderLink = styled.span`
  font-size: clamp(14px, 1.4vw, 16px);

  a {
    position: relative;
    left: -15px;
    color: #9397a1;
    text-decoration: none;
    transition: 0.3s all ease;

    :hover {
      color: #5732fb;
    }
  }

  img {
    width: 100px;
  }
`;

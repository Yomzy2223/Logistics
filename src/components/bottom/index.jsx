import React from "react";
import styled from "styled-components";
import BottomList from "./BottomList";
import EmailSubscribe from "./EmailSubscribe";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Bottom = () => {
  return (
    <BottomContainer>
      <Top>
        <BottomList
          title="Useful Links"
          body={[
            "Home",
            "Services",
            "Apply Agency",
            "Notice Board",
            "Branches Location",
            "Recruiting",
          ]}
        />
        <BottomList
          title="Our Services"
          body={[
            "Courier Service",
            "Parcel Service",
            "Value Decleared",
            "E-com service",
            "Corp Credit Service",
          ]}
        />
        <BottomList title="Information" body={["FAQ", "Blog", "Support"]} />
        <BottomList
          title="Help"
          body={["Help Center", "Tools", "Product and Service"]}
        />
        <EmailSubscribe />
      </Top>
      <Divider />
      <Down>
        <div>
          <FaFacebookF />
        </div>
        <div>
          <FaTwitter />
        </div>
        <div>
          <FaLinkedinIn />
        </div>
      </Down>
    </BottomContainer>
  );
};

export default Bottom;

const BottomContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 20px;
  color: white;
  background-color: #1e1c29;
  padding: 40px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Divider = styled.div`
  background-color: #7b7b7b;
  height: 1px;
  width: 100%;
`;
const Down = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: #d0d0d0;
    border: 1px solid #d0d0d0;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
`;

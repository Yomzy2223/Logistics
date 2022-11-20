import React from "react";
import styled from "styled-components";
import { AiOutlineArrowRight } from "react-icons/ai";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const EmailSubscribe = () => {
  return (
    <SubscribeContainer>
      <p>Subscribe</p>
      <Input>
        <input type="text" placeholder="Email address" />
        <button>
          <AiOutlineArrowRight />
        </button>
      </Input>
      <p>
        Hello, we are Onard Int. Our goal is to translate the positive effects
        from revolutionizing how companies engage with their clients & their
        team.
      </p>
    </SubscribeContainer>
  );
};

export default EmailSubscribe;

const SubscribeContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 15px;
  height: max-content;
  background-color: #34323d;
  padding: 25px;
  border-radius: 10px;
  max-width: 250px;
  p {
    :nth-of-type(2) {
      color: #d0d0d0;
      font-size: clamp(8px, 0.8vw, 10px);
    }
  }
`;
const Input = styled.div`
  display: flex;
  input {
    max-width: 80%;
    flex: 1;
    height: 30px;
    border: none;
    background-color: white;
    border-radius: 5px 0 0 5px;
    padding-inline: 10px;
  }
  button {
    color: white;
    background-color: #5732fb;
    border: none;
    height: 30px;
    border-radius: 0 5px 5px 0;
    padding-inline: 10px;
  }
`;

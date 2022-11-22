import React from "react";
import styled from "styled-components";
import { gif1, img11, img1Clean, logistics1 } from "../../assets";
import { BsTruck } from "react-icons/bs";
import { GiBoxUnpacking } from "react-icons/gi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { MdDeliveryDining } from "react-icons/md";
import { AiOutlineArrowRight, AiFillStar } from "react-icons/ai";

const Home = () => {
  return (
    <HomeContainer>
      <HomeTop>
        <TopLeft>
          <p>Onard Intl Delivery service at your doorstep in 5mins</p>
          <p>
            We take care of your trip and your courier services efficiently.
          </p>
          <TopButtons>
            <button>Contact Us</button>
            <p>
              Learn More <AiOutlineArrowRight />
            </p>
          </TopButtons>
          <Count>
            <p>Google</p>
            <div>
              <AiFillStar color="#FFA800" />
              <AiFillStar color="#FFA800" />
              <AiFillStar color="#FFA800" />
              <AiFillStar color="#FFA800" />
              <AiFillStar color="#FFA800" />
            </div>
          </Count>
        </TopLeft>
        <TopRight>
          <img src={img11} alt="" />
          <Label>Door step delivery</Label>
          <Label1>Pay on delivery</Label1>
          <Label2>Easy tracking of orders</Label2>
        </TopRight>
      </HomeTop>
      <HomeBottom>
        <img src={logistics1} alt="" />
        <BottomRight>
          <p>Our working progress</p>
          <Desc>
            <IconBack color="#8ac9fe">
              <TbDeviceDesktopAnalytics color="black" fontSize={25} />
            </IconBack>
            <p>Booking</p>
          </Desc>
          <Desc>
            <IconBack color="#ffc928">
              <GiBoxUnpacking color="black" fontSize={25} />
            </IconBack>
            <p>Packing</p>
          </Desc>
          <Desc>
            <IconBack color="#b4e66d">
              <BsTruck color="black" fontSize={25} />
            </IconBack>
            <p>Transportation</p>
          </Desc>
          <Desc>
            <IconBack color="#ffc265">
              <MdDeliveryDining color="black" fontSize={25} />
            </IconBack>
            <p>Delivery</p>
          </Desc>
        </BottomRight>
      </HomeBottom>
    </HomeContainer>
  );
};

export default Home;

const HomeContainer = styled.div`
  display: flex;
  flex-flow: column;
  position: relative;
  width: 100%;
  padding-inline: clamp(30px, 4vw, 50px);
  background: url(gif1);
`;

const BackVideo = styled.video`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: -1;
  display: flex;
  flex: 1;
  width: calc(100% - clamp(60px, 8vw, 100px));
`;

const HomeTop = styled.div`
  display: flex;
  flex-flow: row nowrap;
  padding-bottom: 100px;

  @media screen and (max-width: 920px) {
    flex-flow: column;
    align-items: center;
    gap: 40px;
  }
`;

const TopButtons = styled.div`
  display: flex;
  gap: clamp(30px, 4.5vw, 60px);

  p {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #0071f6;
    font-size: clamp(14px, 1.5vw, 16px);
    font-weight: 500;
    line-height: 19px;
  }
`;

const TopLeft = styled.div`
  display: flex;
  flex-flow: column;
  gap: 30px;
  padding-top: 30px;
  color: black;
  text-transform: capitalize;
  max-width: 50%;

  @media screen and (max-width: 920px) {
    max-width: 100%;
    align-items: stretch;
  }

  > p {
    font-weight: 800;
    opacity: 0.8;

    :nth-of-type(1) {
      font-size: clamp(32px, 3vw, 40px);
    }

    :nth-of-type(2) {
      font-weight: 400;
      font-size: clamp(18px, 2vw, 22px);
      line-height: 32px;
      color: #515151;
      text-align: justify;
    }

    span {
      font-size: clamp(50px, 5.5vw, 64px);
      font-weight: 500;
      line-height: 72px;
    }
  }

  button {
    padding: clamp(10px, 1.2vw, 15px) clamp(30px, 3.4vw, 40px);
    color: white;
    background-color: #5732fb;
    border: 1px solid #5732fb;
    border-radius: 5px;
    width: max-content;
    font-size: clamp(16px, 1.6vw, 18px);
    transition: 0.3s all ease;

    :hover {
      color: white;
      background-color: #5732fb;
    }
  }
`;

const Count = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  div {
    display: flex;
    gap: 4px;
  }
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  font-size: 12px;

  img {
    max-width: 100%;
  }
`;

const Label = styled.div`
  position: absolute;
  top: 60px;
  left: 10%;
  z-index: 2;
  background-color: #ff06f5;
  color: white;
  border-radius: 30px;
  padding: 5px 10px;
`;
const Label1 = styled.div`
  position: absolute;
  /* top: 180px;
  left: 120px; */
  top: 45%;
  left: 25%;
  z-index: 2;
  background-color: #ffa800;
  color: white;
  border-radius: 30px;
  padding: 5px 10px;
`;
const Label2 = styled.div`
  position: absolute;
  top: 120px;
  z-index: 2;
  background-color: #3118cb;
  color: white;
  border-radius: 30px;
  padding: 5px 10px;
`;

const HomeBottom = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
  background-color: #1e1c29;
  padding: 20px;
  color: white;

  > img {
    width: 30%;
    max-width: 250px;
  }

  @media screen and (max-width: 920px) {
    align-items: center;
    flex-flow: column;
    gap: 50px;

    > img {
      width: 100%;
    }
  }
`;

const BottomRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70%;

  > p {
    font-weight: 800;
    font-size: clamp(25px, 3vw, 35px);
    max-width: 170px;
    line-height: 35px;
    margin-top: -10px;
  }

  @media screen and (max-width: 920px) {
    flex-flow: column;
    gap: 30px;

    > p {
      text-align: center;
    }
  }
`;

const Desc = styled.div`
  display: flex;
  flex-flow: column;
  align-items: center;
  gap: 10px;
`;

const IconBack = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: clamp(40px, 5vw, 60px);
  height: clamp(40px, 5vw, 60px);
  border-radius: 50%;
  background-color: ${({ color }) => (color ? color : "blue")};
`;

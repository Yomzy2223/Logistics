import React from "react";
import styled from "styled-components";
import { gif1, img1Clean, logistics1 } from "../../assets";
import { BsTruck } from "react-icons/bs";
import { GiBoxUnpacking } from "react-icons/gi";
import { TbDeviceDesktopAnalytics } from "react-icons/tb";
import { MdDeliveryDining } from "react-icons/md";

const Home = () => {
  return (
    <HomeContainer>
      {/* <BackVideo autoPlay loop muted>
        <source src={gif1} type="video/mp4" />
      </BackVideo> */}
      <HomeTop>
        <TopLeft>
          <p>
            <span>Onard Intl</span>
            <span>Delivery service</span>
            <span>at your doorstep.</span>
            {/* <span>We also take care of</span>
            <span>Your trip.</span> */}
          </p>
          <p>Just call us</p>
          <button>Call now</button>
          <Count>
            <div>
              <span>120</span>
              <span>Branch</span>
            </div>
            <div>
              <span>2M+</span>
              <span>Clients</span>
            </div>
            <div>
              <span>4262</span>
              <span>Support</span>
            </div>
            <div>
              <span>26+</span>
              <span>Country</span>
            </div>
          </Count>
        </TopLeft>
        <TopRight>
          <img src={img1Clean} alt="" />
          <Label>
            <span>
              <p>Best</p> <p>Courier Services</p>
            </span>
          </Label>
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

  p {
    font-weight: 800;
    opacity: 0.8;

    :nth-of-type(1) {
      font-size: clamp(32px, 3vw, 40px);
      margin-bottom: 50px;
    }

    :nth-of-type(2) {
      font-size: clamp(25px, 2.2vw, 30px);
      color: #078fff;
      background-color: #e3f2ffa6;
      border-radius: 5px;
      width: max-content;
      padding: 5px 15px;
    }

    span {
      margin-right: 5px;
      :nth-of-type(1) {
        color: #5732fb;
      }
      :nth-of-type(2) {
        color: #fc6b21;
      }
      :nth-of-type(5) {
        color: #fc6b21;
      }
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
  justify-content: space-between;

  div {
    display: flex;
    flex-flow: column;

    span {
      :nth-of-type(1) {
        font-size: 20px;
        font-weight: 800;
      }
      :nth-of-type(2) {
        font-size: 12px;
        font-weight: 300;
      }
    }
  }
`;

const TopRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;

  img {
    max-width: 100%;
  }
`;

const Label = styled.div`
  position: absolute;
  z-index: 2;
  background-color: white;
  border-radius: 5px;
  padding: 5px 10px;
  box-shadow: 0 0 15px 2px #8a8a8a7d;

  span {
    p {
      :nth-of-type(1) {
        color: #fc6b21;
        font-weight: 800;
        font-size: clamp(18px, 2.2vw, 22px);
      }

      :nth-of-type(2) {
        color: #5732fb;
        font-size: 12px;
      }
    }
  }
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

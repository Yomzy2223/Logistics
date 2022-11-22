import React from "react";
import styled from "styled-components";

const BottomList = ({ title, body }) => {
  return (
    <BottomListContainer>
      <p>{title}</p>
      <div>
        {body.map((list, index) => (
          <span key={index}>{list}</span>
        ))}
      </div>
    </BottomListContainer>
  );
};

export default BottomList;

const BottomListContainer = styled.div`
  display: flex;
  flex-flow: column;
  gap: 15px;

  > p {
    font-weight: 600;
    font-size: clamp(14px, 1.4vw, 16px);
    text-align: center;
  }

  > div {
    display: flex;
    flex-flow: column;
    gap: 10px;
  }

  span {
    font-weight: 400;
    font-size: clamp(10px, 1vw, 12px);
    color: #d0d0d0;
  }

  @media screen and (max-width: 920px) {
    div {
      display: none;
    }
  }
`;

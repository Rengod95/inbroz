import React from "react";
import styled from "@emotion/styled";

const CourseListCard = () => {
  return (
    <CourseCardContainer>
      <CardImageContainer>
        <img src="" alt="" />
      </CardImageContainer>
      <CardDescriptionContainer>
        <h3>테스트 강의 제목입니다.</h3>
        <span>
          강의 카드의 소제목 테스트입니다. 강의 카드의 소제목 테스트입니다.
        </span>
      </CardDescriptionContainer>
      <CardBottomContainer></CardBottomContainer>
    </CourseCardContainer>
  );
};

export default CourseListCard;

const CourseCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 330px;
  height: 450px;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 10px;
  box-shadow: rgba(0, 0, 0, 0.6) 0px 4px 12px;
  padding: 0.2rem;
`;

const CardImageContainer = styled.div`
  display: block;
  width: 100%;
  height: 50%;
  background-color: #2e3267;
  border-radius: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
    border-radius: 10px;
    background-color: transparent;
  }
`;

const CardDescriptionContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 40%;
  padding: 1rem;
  gap: 1rem;

  h3 {
    font-size: 26px;
    font-weight: 800;
    color: ${(props) => props.theme.color.black};
  }

  span {
    font-size: 17px;
    font-weight: 400;
    color: ${(props) => props.theme.color.black};
  }
`;

const CardBottomContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  height: 10%;
`;

import React from "react";
import styled from "@emotion/styled";
import SearchBar from "../components/SearchBar";
import CourseListCard from "../components/CourseListCard";

const CoursePage = () => {
  return (
    <Container>
      <Layout>
        <PagePresenter>
          <h1>All Courses</h1>
          <h2>프론트엔드 개발과 관련된 다양한 강의를 만나볼 수 있어요!</h2>
        </PagePresenter>
        <MiddleContainer>
          <SearchBar />
        </MiddleContainer>
        <CourseListContainer>
          <CourseListCard />
        </CourseListContainer>
      </Layout>
    </Container>
  );
};

export default CoursePage;

const Container = styled.div`
  ${(props) => {
    const { theme } = props;

    return `
        background-color: ${theme.color.bg};
    `;
  }}
  display:block;
  width: 100%;
  min-height: 760px;
  height: auto;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const Layout = styled.div`
  display: flex;
  margin: 0 auto;
  width: 80rem;
  flex-direction: column;
  height: auto;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 50px 0;
`;

const PagePresenter = styled.div`
  display: flex;
  width: 100%;
  height: 300px;
  background-color: ${(props) => props.theme.color.primary};
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  border-radius: 27px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 10px 15px -3px,
    rgba(11, 4, 127, 0.3) 0 4px 6px -2px;

  h1 {
    font-size: 56px;
  }
`;

const CourseListContainer = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 3rem;
  padding: 0 3rem;
  justify-content: center;
  align-items: flex-start;
`;

const MiddleContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 100%;
  margin: 0 auto;
  height: auto;
  padding: 0 2rem;
`;

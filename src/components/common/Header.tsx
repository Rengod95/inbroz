import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { ENDPOINT, PAGE } from "../../API/ENDPOINT";
import ProfileChip from "./ProfileChip";

export const navSet = [
  { url: PAGE.PAGE_COURSE, title: "강의" },
  { url: PAGE.PAGE_NOTICE, title: "공지사항" },
  { url: PAGE.PAGE_FEED, title: "피드" },
  { url: PAGE.PAGE_CONTACT, title: "문의" },
];

const Header = () => {
  return (
    <Container>
      <Layout>
        <IconWrapper>
          <NavLink to={PAGE.PAGE_MAIN}>
            <h4>InBroz</h4>
          </NavLink>
        </IconWrapper>
        <MenuWrapper>
          <MenuLayout>
            {navSet.map((nav) => (
              <NavItem key={nav.url}>
                <StyledNavLink to={nav.url}>{nav.title}</StyledNavLink>
              </NavItem>
            ))}
            <ProfileChip />
          </MenuLayout>
        </MenuWrapper>
      </Layout>
    </Container>
  );
};

export default Header;

const Container = styled.header`
  ${(props) => {
    const { theme } = props;
    return `
       background-color:${theme.color.headerBg};
      `;
  }}
  width: 100%;
  height: 64px;
  position: fixed;
  z-index: 100;
  backdrop-filter: blur(30px);
  box-shadow: 0 2px 10px rgba(21, 21, 69, 0.2);
  padding: 0 2rem;
  top: 0;
`;

const Layout = styled.nav`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: 1fr;
  width: 100%;
  height: 100%;
  max-width: 80rem;
  margin: 0 auto;
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  object-fit: cover;
  width: 100%;
  height: inherit;

  h4 {
    font-weight: 800;
    font-size: 20px;
  }
`;

const MenuWrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const MenuLayout = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 100%;
  width: inherit;
`;

const NavItem = styled.li`
  min-width: 100px;
  height: inherit;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;
  transition: all 400ms ease;
  &:hover {
    background-color: ${(props) => props.theme.color.bg}; //#262a61;
  }
`;

const StyledNavLink = styled(NavLink)`
  color: ${(props) => props.theme.color.light};
  font-size: 1rem;
  cursor: pointer;
  height: inherit;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 400ms ease;
  &:hover {
    color: ${(props) => props.theme.color.success};
  }
`;

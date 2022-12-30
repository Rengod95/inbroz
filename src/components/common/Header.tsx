import React from "react";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { ENDPOINT } from "../../API/ENDPOINT";
import ProfileChip from "./ProfileChip";

const Container = styled.nav`
  display: grid;
  grid-template-columns: 1fr 9fr;
  grid-template-rows: 1fr;
  background: rgba(66, 72, 144, 0.3);
  width: 100vw;
  height: 70px;
  position: fixed;
  top: 0;
  box-shadow: 0 2px 10px rgba(21, 21, 69, 0.2);
  z-index: 100;
  backdrop-filter: blur(30px);
`;

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  width: 100%;
  height: 70px;

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
  width: 100%;
`;

const NavItem = styled.li`
  min-width: 120px;
  border-left: 1px solid ${(props) => props.theme.color.bg2};
  height: 100%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 10px;

  &:first-of-type {
    border-left: 1px solid ${(props) => props.theme.color.bg2};
  }

  &:hover {
    background-color: ${(props) => props.theme.color.bg}; //#262a61;
    color: ${(props) => props.theme.color.success};
  }
`;

const StyledNavLink = styled(NavLink)`
  font-size: 1rem;
  cursor: pointer;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    color: ${(props) => props.theme.color.success};
  }
`;

export const navSet = [
  { url: "/gallery", title: "갤러리" },
  { url: "/community", title: "공지사항" },
  { url: "/contact", title: "문의" },
];

const Header = () => {
  return (
    <Container>
      <IconWrapper>
        <NavLink to={ENDPOINT.MAIN}>
          <h4>InBroz</h4>
        </NavLink>
      </IconWrapper>
      <MenuWrapper>
        <MenuLayout>
          <NavItem key={"/profile"}>
            <ProfileChip />
          </NavItem>
          {navSet.map((nav) => (
            <NavItem key={nav.url}>
              <StyledNavLink to={nav.url}>{nav.title}</StyledNavLink>
            </NavItem>
          ))}
        </MenuLayout>
      </MenuWrapper>
    </Container>
  );
};

export default Header;

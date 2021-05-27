import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-content: center;
  justify-content: space-around;
  width: 100vw;
  height: 80px;
  border-bottom: 3px solid #b5b5b5;
`;

const HeaderColumn = styled.div`
  padding: 30px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  &:first-child{
    width: 60vw;
    padding-top: 25px;
    justify-content: start;
    font-size: 30px;
    font-weight: 800;
  }
  &:last-child{
    width: 40vw;
    font-size: 20px;
  }
`;

function Header(props) {
    return (
        <HeaderContainer>
            <HeaderColumn>
                <Link to={"/"}>EgoEco</Link>
            </HeaderColumn>
            <HeaderColumn>
                <Link to={"/news"}>News</Link>
                <Link to={"/shop"}>Shop</Link>
                <Link to={"/analysis"}>Analysis</Link>
                <Link to={"/login"}>Login</Link>
            </HeaderColumn>
        </HeaderContainer>
    );
}

export default Header;
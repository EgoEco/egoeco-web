import React from 'react';
import { Link } from 'react-router-dom';
import styled from "styled-components";

const HeaderContainer = styled.header`
  display: flex;
  align-content: center;
  justify-content: space-around;
  width: 100vw;
  @media screen and (max-width: 700px) {
    width: 700px;
  }
  height: 80px;
  border-bottom: 3px solid #b5b5b5;
`;

const HeaderColumn = styled.div`
  padding: 30px;
  display: flex;
  align-content: center;
  justify-content: space-around;
  &:first-child{
    padding-top: 25px;
    width: 60vw;
    @media screen and (max-width: 420px) {
      width: 300px;
    }
    justify-content: start;
    font-size: 30px;
    font-weight: 800;
  }
  &:last-child{
    width: 40vw;
    @media screen and (max-width: 280px) {
      width: 280px;
    }
    font-size: 20px;
  }
`;

const LinkElement = styled.div`
  padding-right: 10px;
`;
function Header(props) {
    return (
        <HeaderContainer>
            <HeaderColumn>
                <Link to={"/"}>EgoEco</Link>
            </HeaderColumn>
            <HeaderColumn>
                <LinkElement>
                    <Link to={"/news"}>News</Link>
                </LinkElement>
                <LinkElement>
                    <Link to={"/shop"}>Shop</Link>
                </LinkElement>

                <LinkElement>
                    <Link to={"/analysis"}>Analysis</Link>
                </LinkElement>
                <LinkElement>
                    <Link to={"/login"}>Login</Link>
                </LinkElement>
            </HeaderColumn>
        </HeaderContainer>
    );
}

export default Header;
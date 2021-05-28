import React from 'react';
import styled from "styled-components";
import ShopChart from "../Components/Chart/ShopChart";
import UserChart from "../Components/Chart/UserChart";

const Container = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
  flex-direction: column;
  width: 640px;
  padding: 30px 20px 30px 20px;
  margin: 0px auto;
`;

const Context = styled.div`
  width: 640px;
  height: 300px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  margin-bottom: 50px;
`;

const Banner = styled.img`
    width: 400px;
    height: 300px;
    border-radius: 10px;
    &:first-child{
      margin-right: 10px;  
    }
    &:last-child{
      margin-left: 10px;
    }
`;

const Article = styled.div`
    width: 240px;
    height: 320px;
    padding: 5px;
    line-height: 1.7;
`;

function Home(props) {
    return (
        <Container>
            <Context>
                <Banner src={"/images/banner/banner1.png"}/>
                <Article>
                    <p>
                        <strong>EgoEco App </strong>
                         is an app that helps you develop economical driving habits by measuring vehicle driving information. Points earned by the ecosystem obtained through vehicle analysis data are classified and stored according to the user's information, and various benefits can be obtained with points.
                    </p>
                </Article>
            </Context>
            <Context>
                <Article>
                    <p>
                        <strong>EgoEco App </strong>
                        is a proven environmental protection policy on city buses. However, this does not apply to personal vehicles. Therefore, this app will contribute to reducing greenhouse gases by applying eco-system to private cars. This app can reduce greenhouse gas emissions by <strong>7%</strong>
                    </p>
                </Article>
                <Banner src={"/images/banner/banner2.png"}/>
            </Context>
            <ShopChart />
            <UserChart />
        </Container>
    );
}

export default Home;
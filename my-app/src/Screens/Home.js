import React from 'react';
import styled from "styled-components";
import HotChart from "../Components/HotChart";

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
    margin-right: 10px;
`;

const Article = styled.div`
    width: 240px;
    height: 320px;
    padding: 5px;
    line-height: 1.5;
`;

const Topic = styled.div`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 20px;
`;

const ListContext = styled.div`
  width: 640px;
  height: 450px;
  display: flex;
  align-content: center;
  justify-content: start;
  flex-direction: column;
`;

const HotNowList = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    justify-content: start;
    overflow-x: auto;
    -ms-overflow-style: none;
    scrollbar-width: none;
`;

function Home(props) {
    return (
        <Container>
            <Context>
                <Banner src={"/images/banner.png"}/>
                <Article>
                    <p>
                        <strong>EgoEco App </strong>
                         is an app that helps you develop economical driving habits by measuring vehicle driving information. Points earned by the ecosystem obtained through vehicle analysis data are classified and stored according to the user's information, and various benefits can be obtained with points.
                    </p>
                </Article>
            </Context>
            <ListContext>
                <Topic>EgoEco Point Item</Topic>
                <HotNowList>
                    <HotChart order="1" title="Funny DIY sentences(ENG)" author="nopaper"/>
                    <HotChart order="2" title="HI CHOCO & CHICHI" author="STUDIO.MINIH"/>
                    <HotChart order="3" title="Boom-Boom bear" author="KIHOKIHO"/>
                    <HotChart order="4" title="Cat Cat Cat Cat" author="KIHOKIHO"/>
                    <HotChart order="5" title="Funny DIY sentences(ENG)" author="nopaper"/>
                    <HotChart order="6" title="HI CHOCO & CHICHI" author="STUDIO.MINIH"/>
                    <HotChart order="7" title="Boom-Boom bear" author="KIHOKIHO"/>
                    <HotChart order="8" title="Cat Cat Cat Cat" author="KIHOKIHO"/>
                </HotNowList>
            </ListContext>
            <ListContext>
                <Topic>EgoEco Rank User</Topic>
                <HotNowList>
                    <HotChart order="1" title="Funny DIY sentences(ENG)" author="nopaper"/>
                    <HotChart order="2" title="HI CHOCO & CHICHI" author="STUDIO.MINIH"/>
                    <HotChart order="3" title="Boom-Boom bear" author="KIHOKIHO"/>
                    <HotChart order="4" title="Cat Cat Cat Cat" author="KIHOKIHO"/>
                    <HotChart order="5" title="Funny DIY sentences(ENG)" author="nopaper"/>
                    <HotChart order="6" title="HI CHOCO & CHICHI" author="STUDIO.MINIH"/>
                    <HotChart order="7" title="Boom-Boom bear" author="KIHOKIHO"/>
                    <HotChart order="8" title="Cat Cat Cat Cat" author="KIHOKIHO"/>
                </HotNowList>
            </ListContext>
        </Container>
    );
}

export default Home;
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
    height: 350px;
    font-size: 17px;
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
                        은 차량 주행 정보를 측정해 경제적인 운전 습관을 기를 수 있도록 도와주는 앱입니다.
                        차량 분석 데이터를 통해 생태계가 얻은 포인트는 사용자 정보에 따라 분류·저장되며, 포인트로 다양한 혜택을 얻을 수 있습니다.
                        모은 포인트로 친환경 제품을 구매할 수 있습니다.
                    </p>
                </Article>
            </Context>
            <Context>
                <Article>
                    <p>
                        <strong>에코 시스템 </strong>
                        은 서울시 시내버스를 대상으로 이미 검증된 환경보호 정책입니다. 그러나 개인 차량에는 적용되지 않습니다. 따라서, 이 앱은 자가용을 대상으로 에코시스템을 적용하여 온실가스를 줄이는 데 기여할 것입니다.
                        그 효과로 온실가스 배출량을 <strong>7%</strong> 줄일 수 있습니다.
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
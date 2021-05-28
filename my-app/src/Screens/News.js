import React from 'react';
import styled from "styled-components";
import TotalCarChart from "../Components/Graph/TotalCarChart";
import TotalDisplacement from "../Components/Graph/TotalDisplacement";

const NewsLayout = styled.div`
  margin: 30px auto;
  width: 640px;
  display: flex;
  justify-content: start;
  align-items: center;
  flex-direction: column;
`;

const NewsContainer = styled.div`
  width: 640px;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

const NewsArticle = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const NewsContext = styled.div`
  line-height: 1.8;
  font-weight: 500;
  margin-bottom: 25px;
  &:last-child{
    line-height: 2.0;
  }
`;

const ImageContext = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
`;

const Topic = styled.div`
  font-size: 27px;
  font-weight: 600;
  margin-bottom: 30px;
`;

const Image = styled.img`
  width: 450px;
  height: 360px;
  border-radius: 20px;
  margin-right: 20px;
  margin-bottom: 20px;
`;

const Source = styled.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 30px;
`;

function News(props) {
    return (
        <NewsLayout>
            <NewsContainer>
                <Topic>자동차 등록 대수는 여전히 늘고 있어!</Topic>
                <NewsArticle>
                    <TotalCarChart />
                    <NewsContext>
                        <p>
                            <a href={"https://www.index.go.kr/potal/main/EachDtlPageDetail.do?idx_cd=1257"}>
                                <strong>국토 교통부</strong>
                            </a>
                            에 따르면 2011년 부터 2020년까지 꾸준하게 자동차 등록 대수가 증가하고 있습니다. 그 중 제일 많은 비중을 차지하는 <strong>자가용</strong>이 온실가스 배출의 주범으로 지목되고 있습니다. 현 상황 속에 온실가스 감소에 대한 방안이 필요한 상황에 놓여 있습니다.
                        </p>
                    </NewsContext>
                </NewsArticle>
            </NewsContainer>
            <NewsContainer>
                <Topic>에코 시스템이 연료 소비를 줄일 수 있다?</Topic>
                <NewsArticle>
                    <ImageContext>
                        <Image src={"/images/news/news1.png"} />
                        <a href={"https://news.seoul.go.kr/traffic/archives/15191"}>
                            <Source>출처 : https://news.seoul.go.kr/traffic/archives/15191</Source>
                        </a>
                    </ImageContext>
                    <NewsContext>
                        <p>
                            <a href={"https://news.seoul.go.kr/traffic/archives/15191"}>
                                <strong>서울시 기사</strong>
                            </a>
                            에 따르면 현재 서울특별시와 대구광역시 시내
                            버스에 에코 시스템을 적용해 7~16%의 연료 절감효과와 연비가 향상된 결과를 가져왔습니다. 연료 소모를 줄이고 온실가스 배출량을 줄일 수 있는 에코시스템을 개인 차량에도
                            적용한다면 엄청난 효과를 지닐 것이라고 예상됩니다.
                        </p>
                    </NewsContext>
                </NewsArticle>
            </NewsContainer>
            <NewsContainer>
                <Topic>승용차 배기가스 배출량을 줄지 않아...</Topic>
                <NewsArticle>
                    <TotalDisplacement />
                    <NewsContext>
                        <p>
                            <a href={"https://data.seoul.go.kr/dataList/10869/S/2/datasetView.do;jsessionid=C222A122F7C3FF43B492611B0B1F9C3C.new_portal-svr-21"}>
                                <strong>서울시 교통통계</strong>
                            </a>
                            에 따르면 배기량이 1600cc 이상인 승용차들이 60%를 넘어 증가하는 추세를 보이고 있습니다. 하지만 친환경 자동차인 저속전기차와 전기차의 증가 추세가 현격히 떨어져 배기 가스 감소 방안에 대한 대책이 필요한 상황입니다.
                        </p>
                    </NewsContext>
                </NewsArticle>
            </NewsContainer>
        </NewsLayout>
    );
}

export default News;
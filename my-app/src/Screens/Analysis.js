import React from 'react';
import styled from "styled-components";
import AnalysisCarChart from "../Components/Graph/AnalysisCarChart";

const AnalysisLayout = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 640px;
`;

const AnalysisContainer = styled.div`
  width: 640px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  padding: 30px 0 30px 30px;
`;

const AnalysisContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 640px;
`;

const AnalysisContext = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  font-weight: 500;
  font-size: 20px;
  line-height: 1.5;
  margin-bottom: 30px;
  font-weight: 500;
`;

const Topic = styled.div`
  font-size: 30px;
  color: #6c9d48;
  font-weight: 600;
  margin-bottom: 30px;
  &:first-child{
    font-size: 27px;
    color: black;
  }
`;

function Analysis(props) {
    return (
        <AnalysisContainer>
            <AnalysisLayout>
                <Topic>[홍길동]님의 차량 분석 자료</Topic>
                <AnalysisCarChart />
                <AnalysisContent>
                    <AnalysisContext>
                        <div>평균 주행 속도 : 75 (km/h)</div>
                        <div>최대 속도 : 126 (km/h)</div>
                        <div>최저 속도 : 33 (km/h)</div>
                        <div>총 운행 시간: 780 (hour)</div>
                    </AnalysisContext>
                    <AnalysisContext>
                        <div>급정거 횟수 : 20 (회)</div>
                        <div>급출발 횟수 : 12 (회)</div>
                        <div>에코시스템 등급: 3 (급)</div>
                        <div>보유 포인트: 1200 (point)</div>
                    </AnalysisContext>
                </AnalysisContent>
                <Topic>[홍길동]님의 에코시스템 실천으로</Topic>
                <Topic>소나무 3 (그루)를 살리셨습니다!</Topic>
            </AnalysisLayout>
        </AnalysisContainer>
    );
}

export default Analysis;
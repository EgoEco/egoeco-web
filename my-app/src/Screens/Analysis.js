import React from 'react';
import styled from "styled-components";
import TotalCarChart from "../Components/Graph/TotalCarChart";

const AnalysisLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 30px auto;
`;

const AnalysisContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  width: 640px;
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
`;

const Topic = styled.div`
  font-size: 27px;
  font-weight: 600;
  margin-bottom: 30px;
  &:last-child{
    font-size: 24px;
    color: #6c9d48;
  }
`;

function Analysis(props) {
    return (
        <AnalysisLayout>
            <AnalysisContainer>
                <Topic>?님의 차량 분석 자료</Topic>
                <TotalCarChart />
                <AnalysisContent>
                    <AnalysisContext>
                        <div>평균 주행 속도 : ?</div>
                        <div>최대 속도 : ?</div>
                        <div>최저 속도 : ?</div>
                        <div>총 운행 거리: ?</div>
                        <div>총 운행 시간: ?</div>
                    </AnalysisContext>
                    <AnalysisContext>
                        <div>평균 주행 속도 : ?</div>
                        <div>급정거 횟수 : ?</div>
                        <div>급출발 횟수 : ?</div>
                        <div>에코시스템 등급: ?</div>
                        <div>보유 포인트: ?</div>
                    </AnalysisContext>
                </AnalysisContent>
                <Topic>?님의 에코시스템 사용으로 환경은 더욱 깨끗해집니다!</Topic>
            </AnalysisContainer>
        </AnalysisLayout>
    );
}

export default Analysis;
import React from 'react';
import styled from "styled-components";

const HotChartElement = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: start;
    margin-right: 20px;
    width: 200px;
    height: 320px;
`;

const LabelOrder = styled.div`
    position: absolute;
    left: 22px;
    top: 3px;
    font-size: 28px;
    color: white;
    z-index: 2;
`;

const Label = styled.img`
    position: absolute;
    left: 5px;
    top: -7px;
    width: 50px;
    z-index: 1;
`;

const Image = styled.img`
    position: relative;
    border: 1px solid #c9c9c9;
    width: 195px;
    z-index: 0;
`;

const Title = styled.div`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 10px;
    line-height: 1.5;
`;

const Author = styled.div`
    font-size: 20px;
    font-weight: 500;
    opacity: 0.5;
`;

function ChartItem(props) {
    const imgPath = "/images/item/a" + props.order + ".png";
    let labelPath;
    if(props.order === 1){
        labelPath = "/images/label1.png";
    } else {
        labelPath = "/images/label2.png";
    }
    return (
        <HotChartElement>
            <LabelOrder>{props.order}</LabelOrder>
            <Label src={labelPath}></Label>
            <Image src={imgPath}></Image>
            <Title>{props.title}</Title>
            <Author>{props.author}</Author>
        </HotChartElement>
    );
}

export default ChartItem;
import React, { Component } from 'react';
import styled from "styled-components";
import axios from "axios";
import ChartItem from "../Components/partial/ChartItem";
import { Link } from 'react-router-dom';

const Container = styled.div`
  padding-left: 30px;
  padding-top: 30px;
`;

const ShopLayout = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 640px;
  margin: 0 auto 30px auto;
`;

const Topic = styled.div`
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 30px;
`;

const HotNowList = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 20px;
    width: 640px;
    margin-bottom: 30px;
`;

const GroupList = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 1.7;
  font-weight: 500;
`;

class Shop extends Component {
    constructor(props){
        super(props);
        this.state = {
            ShopList : []
        };
    }
    componentDidMount(){
        this._getList();
    }
    _getList() {
        const apiUrl = '/api/shopapi.json';
        axios.get(apiUrl)
            .then(data => {
                this.setState({
                    ShopList : data.data.ShopList
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <Container>
                <ShopLayout>
                    <Topic>Shop List</Topic>
                    <HotNowList>
                        {this.state.ShopList.length > 0 ? (
                            this.state.ShopList.map((list, index) => (
                                <Link to={"/shop/" + index} id = {index + 1}>
                                    <ChartItem
                                        order={list.order}
                                        title={list.title}
                                        author={list.author}
                                    />
                                </Link>
                            ))
                        ) : (
                            <span>
                            Error
                        </span>
                        )}
                    </HotNowList>
                    <Topic>탄소 저감 포인트 지원 단체</Topic>
                    <GroupList>
                        <a href={"https://goinnohac.com/"}>1. 정부혁신 끝장대회</a>
                        <a href={"https://goinnohac.com/"}>2. Team EgoEco</a>
                    </GroupList>
                </ShopLayout>
            </Container>
        );
    }
}

export default Shop;
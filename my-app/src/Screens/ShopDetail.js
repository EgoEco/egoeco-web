import React, { Component } from 'react';
import styled from "styled-components";
import axios from "axios";
import ChartItem from "../Components/partial/ChartItem";
import { PrepareItem } from "../Components/partial/BtnTimeToPrepare";

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

const ItemContext = styled.div`
  display: flex;
  flex-direction: column;
  width: 400px;
  font-size: 25px;
  line-height: 1.7;
  font-weight: 500;
  .btn {
    color: #fff;
    background-color: #b5b5b5;
    outline: none;
    border: 0;
    color: #fff;
    padding: 10px 20px;
    text-transform: uppercase;
    margin-top: 20px;
    border-radius: 2px;
    cursor: pointer;
    position: relative;
    width: 100px;
  }
`;

const GroupList = styled.div`
  width: 640px;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  line-height: 1.7;
  font-weight: 500;
`;

class ShopDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            ShopList : [],
            user : []
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
                    <Topic>Shop List : Item {this.props.match.params.id * 1 + 1}</Topic>
                    <HotNowList>
                        {this.state.ShopList.length > 0 ? (
                            this.state.ShopList.map((list, index) => {
                                console.log(this.props.match.params.id);
                                if (list.order === this.props.match.params.id * 1 + 1) {
                                    return (
                                        <>
                                            <ChartItem order={list.order} title={list.title} author={list.author}/>
                                            <ItemContext>
                                                <div>
                                                    <a>
                                                        <strong>?????? : </strong>{list.title}
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <strong>?????? : </strong>{list.description}
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <strong>?????? ?????? : </strong>{list.author}
                                                    </a>
                                                </div>
                                                <div>
                                                    <a>
                                                        <strong>????????? ?????? : </strong>{list.point}
                                                    </a>
                                                </div>
                                                <a href={"/"} onClick={PrepareItem}>
                                                    <button type="button" className="btn">????????????</button>
                                                </a>
                                            </ItemContext>
                                        </>
                                    );
                                }
                            })
                        ) : (
                            <span>
                                Error
                            </span>
                        )}
                    </HotNowList>
                    <Topic>?????? ?????? ????????? ?????? ??????</Topic>
                    <GroupList>
                        <a href={"https://goinnohac.com/"}>1. ???????????? ????????????</a>
                        <a href={"https://goinnohac.com/"}>2. Team EgoEco</a>
                    </GroupList>
                </ShopLayout>
            </Container>
        );
    }
}

export default ShopDetail;
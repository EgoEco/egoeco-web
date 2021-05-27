import React, {Component} from 'react';
import axios from 'axios';
import ChartItem from "../ChartItem";
import styled from "styled-components";

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
    width: 640px;
    height: 350px;
    justify-content: start;
    overflow-x: auto;
    -ms-overflow-style: none;
`;

class ShopChart extends Component {
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
            <ListContext>
                <Topic>EgoEco Point Item</Topic>
                <HotNowList>
                    {this.state.ShopList.length > 0 ? (
                        this.state.ShopList.map(list => (
                            <ChartItem
                                order={list.order}
                                title={list.title}
                                author={list.author}
                            />
                        ))
                    ) : (
                        <span>
                            Error
                        </span>
                    )}
                </HotNowList>
            </ListContext>
        )
    }

}

export default ShopChart;

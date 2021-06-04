import React, {Component} from 'react';
import axios from 'axios';
import UserItem from "../partial/UserItem";
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

class UserChart extends Component {
    constructor(props){
        super(props);
        this.state = {
            UserList : []
        };
    }
    componentDidMount(){
        this._getList();
    }
    _getList() {
        const apiUrl = '/api/userapi.json';
        axios.get(apiUrl)
            .then(data => {
                this.setState({
                    UserList : data.data.UserList
                });
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        return (
            <ListContext>
                <Topic>EgoEco Point Rank</Topic>
                <HotNowList>
                    {this.state.UserList.length > 0 ? (
                        this.state.UserList.map(list => (
                            <UserItem
                                order={list.order}
                                title={list.id}
                                point={list.point}
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

export default UserChart;

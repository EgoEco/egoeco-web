import React from 'react';
import styled from "styled-components";

const Container = styled.div`
  padding-left: 30px;
  padding-top: 30px;
`;

function Home(props) {
    return (
        <Container>
            <div>News</div>
        </Container>
    );
}

export default Home;
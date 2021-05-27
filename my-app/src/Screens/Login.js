import React, {Component} from 'react';

import styled from "styled-components";

const Container = styled.div`
  padding-left: 30px;
  width: 640px;
  height: 720px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
`;

const LoginLayout = styled.div`
  width: 440px;
  height: 600px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  border-radius: 20px;
  border: 4px solid #b5b5b5;
  margin: auto 0;
`;

class Login extends Component {
    render() {
        return (
            <Container>
                <LoginLayout>
                    <div>login</div>
                    <div>login</div>
                    <div>login</div>
                </LoginLayout>
            </Container>
        );
    }
}

export default Login;
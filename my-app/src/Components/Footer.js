import React from 'react';
import styled from "styled-components";

const FooterContainer = styled.header`
  display: flex;
  align-content: center;
  justify-content: center;
  width: 100vw;
  @media screen and (max-width: 700px) {
    width: 700px;
  }
  height: 150px;
  border-top: 4px solid #b5b5b5;
  background-color: #dbf0ee;
  margin: 10px auto 0 auto;
  padding: 20px 0px;
`;

const FooterLayout = styled.div`
  display: flex;
  align-content: center;
  justify-content: start;
  width: 640px;
  line-height: 1.5;
`;

const FooterColumn = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  &:last-child{
    width: 530px;
  }
`;

const Image = styled.img`
  width: 90px;
  height: 90px;
  border-radius: 8px;
  margin-right: 20px;
  opacity: 0.8;
`;

const FooterDiv = styled.div`
  display: flex;
  border-bottom: 1px solid #b5b5b5;
  padding-bottom: 10px;
  margin-bottom: 10px;
  width: 100%;
  a {
    color: #62bcb3;
  }
  &:last-child{
    border-bottom: none;
  }
`;

function Footer(props) {
    return (
        <FooterContainer>
            <FooterLayout>
                <FooterColumn>
                    <Image src={"/images/logo_small.png"}></Image>
                </FooterColumn>
                <FooterColumn>
                    <FooterDiv>
                        <a>Made By:</a>
                        <a href={"https://github.com/s10th24b"}>설민욱</a>
                        <a>|</a>
                        <a href={"https://github.com/blogSoul"}>김효주</a>
                        <a>|</a>
                        <a href={"https://github.com/lawproclaim"}>국윤령</a>
                    </FooterDiv>
                    <FooterDiv>
                        <a>Competition Link:</a>
                        <a href={"https://goinnohac.com/project/team_detail/9e6a55b6b4563e652a23be9d623ca5055c356940"}>EgoEco</a>
                        <a>|</a>
                        <a href={"https://github.com/EgoEco"}>GitHub</a>
                        <a>|</a>
                        <a href={"https://blo9040@gmail.com"}>Email</a>
                    </FooterDiv>
                    <FooterDiv>
                        <a>Presentation:</a>
                        <a href={"https://goinnohac.com/uploads/project_upload/%EC%97%90%EC%BD%94%EC%97%90%EA%B3%A0_%EB%B0%9C%ED%91%9C%EC%9E%90%EB%A3%8C.pdf"}>PDF</a>
                        <a>|</a>
                        <a href={"https://www.youtube.com/watch?v=of8lhPzJoZ8"}>YOUTUBE</a>
                    </FooterDiv>
                </FooterColumn>
            </FooterLayout>
        </FooterContainer>
    );
}

export default Footer;
import React, {Component} from 'react';

import styled from "styled-components";

const Container = styled.div`
  width: 640px;
  height: 720px;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 0 auto;
  padding: 30px 0 30px 30px;
`;

const LoginLayout = styled.div`
  width: 440px;
  height: 640px;
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  border-radius: 20px;
  border: 4px solid #b5b5b5;
  margin: auto 0;
`;

const Image = styled.img`
  margin: 0 auto;
  width: 400px;
  padding-right: 20px;
`;

const InputForm = styled.form`
  font-size: 26px;
  margin: 0 auto 10px auto;
  line-height: 1.5;
  .form__group {
    position: relative;
    padding: 15px 0 0;
    margin-top: 10px;
    width: 100%;
  }

  .form__field {
    font-family: inherit;
    width: 100%;
    border: 0;
    border-bottom: 2px solid #9b9b9b;
    outline: 0;
    font-size: 1.3rem;
    color: #4d4d4d;
    padding: 7px 0;
    background: transparent;
    transition: border-color 0.2s;

    &::placeholder {
      color: transparent;
    }

    &:placeholder-shown ~ .form__label {
      font-size: 1.3rem;
      cursor: text;
      top: 20px;
    }
  }

  .form__label {
    position: absolute;
    top: 0;
    display: block;
    transition: 0.2s;
    font-size: 1rem;
    color: #9b9b9b;
  }

  .form__field:focus {
    ~ .form__label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: $primary;
      font-weight:700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, #11998e, #38ef7d);
    border-image-slice: 1;
  }
  /* reset input */
  .form__field{
    &:required,&:invalid { box-shadow:none; }
  }
  /* demo */
  body {
    font-family: 'Poppins', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-size: 1.5rem;
    background-color:#222222;
  }
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
  .btn__field{
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;

class Join extends Component {
    render() {
        return (
            <Container>
                <LoginLayout>
                    <Image src={"/images/logo_remove.png"}/>
                    <InputForm action="" method="get" className="form">
                        <div className="form__group field">
                            <input type="input" className="form__field" placeholder="user_id" name="user_id" id='user_id'
                                   required/>
                            <label htmlFor="user_id" className="form__label">ID</label>
                        </div>
                        <div className="form__group field">
                            <input type="password1" className="form__field" placeholder="user_pw1" name="user_pw1" id='user_pw1'
                                   required/>
                            <label htmlFor="user_pw1" className="form__label">PW</label>
                        </div>
                        <div className="form__group field">
                            <input type="password2" className="form__field" placeholder="user_pw2" name="user_pw2" id='user_pw2'
                                   required/>
                            <label htmlFor="user_pw2" className="form__label">REWRITE PW</label>
                        </div>
                        <div class={"btn__field"}>
                            <a href={"/"}>
                                <button type="button" className="btn">join</button>
                            </a>
                        </div>
                    </InputForm>
                </LoginLayout>
            </Container>
        );
    }
}

export default Join;
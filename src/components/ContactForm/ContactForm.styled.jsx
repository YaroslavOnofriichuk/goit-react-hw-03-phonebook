import styled from "styled-components";

const Form = styled.form`
  display: flex;
  flex-direction: column;

  label {
    margin-bottom: 10px;
  }

  input {
    margin-bottom: 20px;
    mix-blend-mode: luminosity;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    height: 60px;
  }

  button {
    height: 60px;
    background: #6787f6;
    mix-blend-mode: normal;
    border-radius: 10px;
    font-weight: 500;
    font-size: 20px;
    line-height: 23px;
    text-transform: uppercase;
    color: #ffffff;
    border: #6787f6;
    cursor: pointer;
  }
`;

export default Form;

import styled from "styled-components";

const FilterStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  label {
    margin-bottom: 10px;
  }

  input {
    margin-bottom: 20px;
    mix-blend-mode: luminosity;
    border: 1px solid #000000;
    box-sizing: border-box;
    border-radius: 10px;
    height: 30px;
  }
`;

export default FilterStyled;

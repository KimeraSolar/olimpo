import styled from "styled-components";

const Input = styled.input`
  display: block;
  width: 100%;
  border: none;
  border-radius: 8px;
  background-color: #ffffff;
  height: 45px;
  min-height: 45px;
  padding: 0 16px;
  margin-top: 14px;

  ::placeholder {
    color: #bababa;
  }
`;

export default Input;

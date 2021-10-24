import styled from "styled-components";

const Button = styled.button`
  cursor: pointer;
  display: block;
  height: 45px;
  padding: 13px;
  border-radius: 8px;
  border: none;
  width: 100%;
  margin-top: 14px;
`;

const ButtonPrimary = styled(Button)`
  background-color: #3a75ff;
  color: #ffffff;
`;

const ButtonSecondary = styled(Button)`
  background-color: transparent;
  color: #3a75ff;
`;

export { ButtonPrimary, ButtonSecondary };

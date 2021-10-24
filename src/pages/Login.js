import React from "react";
import styled from "styled-components";

import { ButtonPrimary, ButtonSecondary } from "../components/Button";
import Input from "../components/Input";
import Link from "../components/Link";
import Logo from "../components/Logo";

import backgroundImage from "../img/background.png";
import partners from "../img/parceiros.png";

const PageArea = styled.div`
  background-color: #f9e00f;
  width: 40%;
  min-width: 570px;
  height: 100vh;
  min-height: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  padding: 80px;
`;

const ImageArea = styled.div`
  width: 100%;
  background-image: ${(props) => `url(${props.backgroundImage})`};
  background-size: cover;
  background-position: center;
`;

const Title = styled.span`
  font-weight: 500;
  font-size: 20px;
  color: #707070;
  text-align: left;
  width: 100%;
  margin-top: 25px;
`;

const FormArea = styled.div`
  width: 100%;
  text-align: right;
`;

const FooterArea = styled.div`
  width: 100%;
  height: 60px;
  text-align: center;
  margin-top: 57px;
`;

export default function Login() {
  return (
    <div className="page">
      <ImageArea backgroundImage={backgroundImage} />
      <PageArea>
        <Logo />
        <Title>Login</Title>
        <FormArea>
          <Input placeholder="Login" type="text" />
          <Input placeholder="Senha" type="password" />
          <Link href="/">Esqueci a Senha</Link>
          <ButtonPrimary>Entrar</ButtonPrimary>
          <ButtonSecondary>Não possui conta? Cadastre-se!</ButtonSecondary>
        </FormArea>
        <FooterArea>
          <img src={partners} alt="Parceiros" />
          <Link href="/">O que é o Olimpo?</Link>
        </FooterArea>
      </PageArea>
    </div>
  );
}

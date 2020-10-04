import React from "react";
import {
  ContainerHeader,
  NavItem,
  NavContainer,
  ButtonItem,
  TextAbout,
  TextInfo,
  ButtonBlack,
  ButtonWhite,
  ContainerButton,
  Container,
  Row,
} from "./Header.styled";
import { ReactComponent as Logo } from "../../assets/discord.svg";
import { ReactComponent as Down } from "../../assets/down.svg";
import people from "../../assets/peoples.svg";
import home from "../../assets/home.svg";
import temple from "../../assets/temple.svg";

export default function Header() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        background: "#2A5EE8",
      }}
    >
      <ContainerHeader>
        <Logo color="#fff" width={134} height={34} />
        <NavContainer>
          <NavItem>Baixar</NavItem>
          <NavItem>Porque usar o Discord?</NavItem>
          <NavItem>Niltro</NavItem>
          <NavItem>Segurança</NavItem>
          <NavItem>Suporte</NavItem>
        </NavContainer>
        <ButtonItem>Entrar</ButtonItem>
      </ContainerHeader>

      <Row>
        <div
          style={{
            display: "grid",
            gridColumn: "3 / span 8",
            marginTop: 100,
            marginBottom: 150,
          }}
        >
          <TextAbout>Seu lugar pra conversar</TextAbout>{" "}
          <TextInfo>
            Não importa se você faz parte de um clube escolar, uma comunidade
            artística mundial ou só amigos querendo ficar de boa, o Discord
            torna mais fácil conversar todo dia e se ver com mais frequência.
          </TextInfo>
          <ContainerButton>
            <ButtonWhite>
              <Down />
              Baixar para o Windows
            </ButtonWhite>

            <ButtonBlack>Abra o Discord no seu navegador</ButtonBlack>
          </ContainerButton>
        </div>
      </Row>
      <img
        src={temple}
        style={{
          position: "absolute",
          display: "block",
          left: "50%",
          height: "auto",
          bottom: 0,
          marginLeft: -506,
        }}
      />
      <img
        src={people}
        style={{
          position: "absolute",
          display: "block",
          left: "50%",
          height: "auto",
          bottom: 0,
          marginLeft: -1300,
        }}
      />
      <img
        src={home}
        style={{
          position: "absolute",
          display: "block",
          left: "50%",
          height: "auto",
          bottom: 0,
          marginLeft: 368,
        }}
      />
    </div>
  );
}

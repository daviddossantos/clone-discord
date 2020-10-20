import React from "react";
import {
  Container,
  Row,
  SocialNetworkBox,
  SectionBox,
  BoxItem,
  Item,
  SpaceBox,
  InfoItem,
  ImageBrazil,
  ContainerLanguage,
  ButtonSocial,
  ButtonGetStarted,
  Line,
  ContainerFooter,
} from "./Footer.styled";
import brazil from "./../../assets/brasil.png";
import { ReactComponent as Instagram } from "./../../assets/instagram.svg";
import { ReactComponent as Facebook } from "./../../assets/facebook.svg";
import { ReactComponent as Twitter } from "./../../assets/twitter.svg";
import { ReactComponent as Youtube } from "./../../assets/youtube.svg";
import { ReactComponent as Logo } from "./../../assets/discord.svg";

export default function Footer() {
  return (
    <Container>
      <Row>
        <SocialNetworkBox>
          <InfoItem>Seu lugar para conversar</InfoItem>
          <ContainerLanguage>
            <ImageBrazil src={brazil} />
            <a>Português do Brasil</a>
          </ContainerLanguage>
          <ContainerLanguage>
            <ButtonSocial>
              <Twitter />
            </ButtonSocial>
            <ButtonSocial>
              <Instagram />
            </ButtonSocial>
            <ButtonSocial>
              <Facebook />
            </ButtonSocial>
            <ButtonSocial>
              <Youtube />
            </ButtonSocial>
          </ContainerLanguage>
        </SocialNetworkBox>
        <SpaceBox />
        <SectionBox>
          <BoxItem>
            <Item style={{ color: "#7289da" }}>Produto</Item>
            <Item>Baixar</Item>
            <Item>Por que usar o Discord</Item>
            <Item>Inspiração</Item>
            <Item>Nitro</Item>
            <Item>Status</Item>
          </BoxItem>
        </SectionBox>
        <SectionBox>
          <BoxItem>
            <Item style={{ color: "#7289da" }}>Empresa</Item>
            <Item>Sobre</Item>
            <Item>Emprego</Item>
            <Item>Marca</Item>
            <Item>Sala de imprensa</Item>
          </BoxItem>
        </SectionBox>
        <SectionBox>
          <BoxItem>
            <Item style={{ color: "#7289da" }}>Recursos</Item>
            <Item>Suporte</Item>
            <Item>Segurança</Item>
            <Item>Blog</Item>
            <Item>Comentários</Item>
            <Item>Partners</Item>
            <Item>Desenvolvedores</Item>
            <Item>StreamKit</Item>
            <Item>Código Aberto</Item>
            <Item>Segurança</Item>
          </BoxItem>
        </SectionBox>
        <SectionBox>
          <BoxItem>
            <Item style={{ color: "#7289da" }}>Política</Item>
            <Item>Termos</Item>
            <Item>Privacidade</Item>
            <Item>Diretrizes</Item>
            <Item>Reconhecimentos</Item>
            <Item>Licenças</Item>
          </BoxItem>
        </SectionBox>
      </Row>
      <Row>
        <Line />
        <ContainerFooter>
          <Logo />
          <ButtonGetStarted>Registrar</ButtonGetStarted>
        </ContainerFooter>
      </Row>
    </Container>
  );
}

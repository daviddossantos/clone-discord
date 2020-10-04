import React from "react";
import {
  TextAbout,
  TextInfo,
  Container,
  ButtonBlack,
  ButtonWhite,
  ContainerButton,
} from "./SectionAbout.styled";

export default function SectionAbout() {
  return (
    <Container>
      <TextAbout>Seu lugar pra conversar</TextAbout>
      <TextInfo>
        Não importa se você faz parte de um clube escolar, uma comunidade
        artística mundial ou só amigos querendo ficar de boa, o Discord torna
        mais fácil conversar todo dia e se ver com mais frequência.
      </TextInfo>
      <div>
        <ButtonWhite>Baixar para o Windows</ButtonWhite>
        <ButtonBlack>Abra o Discord no seu navegador</ButtonBlack>
      </div>
    </Container>
  );
}

import React from "react";
import {
  Container,
  TextDescription,
  TextMedium,
  Image,
  Grid,
  ContainerDescription,
  Row,
  ButtonGetStarted,
  TextGetStarted,
  Separator,
  ContainerDescriptionCustom,
  TextButtonGetStarted,
  WaveInvert,
} from "./Content.styled";
import { AiOutlineDownload } from "react-icons/ai";
import chat from "./../../assets/discord-chat.svg";
import voice from "./../../assets/discord-voice.svg";
import magic from "./../../assets/discord-magic.svg";
import call from "./../../assets/discord-call.svg";
import { ReactComponent as Down } from "./../../assets/down.svg";
import { ReactComponent as Wave } from "./../../assets/wave.svg";

export default function Content() {
  return (
    <Container>
      <Grid style={{ marginTop: 100 }}>
        <Row>
          <Image src={chat} />
          <ContainerDescription>
            <TextDescription>
              Ambientes controlados por convites, com muito espaço pra conversar
            </TextDescription>
            <TextMedium>
              Os servidores Discord são organizados em canais com tópicos para
              vocês colaborarem, compartilharem ou simplesmente falarem do dia
              sem entupir um chat geral
            </TextMedium>
          </ContainerDescription>
        </Row>
      </Grid>
      <Separator />
      <Wave color="#f6f6f6" />
      <Grid style={{ background: "#f6f6f6" }}>
        <Row>
          <Image src={voice} style={{ order: 2 }} />
          <ContainerDescription style={{ order: 1 }}>
            <TextDescription>Aqui é fácil se encontrar</TextDescription>
            <TextMedium>
              Entre no canal de voz quando estiver à toa. Amigos no mesmo
              servidor podem te ver e entrar imediatamente, sem nem ter que
              fazer a chamada.
            </TextMedium>
          </ContainerDescription>
        </Row>
      </Grid>
      <WaveInvert />
      <Separator />
      <Grid>
        <Row>
          <Image src={magic} />
          <ContainerDescription>
            <TextDescription>Para poucos e para muitos</TextDescription>
            <TextMedium>
              Organize uma comunidade de qualquer tamanho com ferramentas de
              moderação e acesso personalizado a membros. Dê poderes especiais
              aos membros, monte canais privados e muito mais.
            </TextMedium>
          </ContainerDescription>
        </Row>
      </Grid>
      <Separator />
      <Wave color="#f6f6f6" />
      <Grid style={{ background: "#f6f6f6" }}>
        <Row>
          <ContainerDescriptionCustom>
            <TextDescription style={{ textAlign: "center" }}>
              Tecnologia de conexão confiável
            </TextDescription>
            <TextMedium style={{ textAlign: "center" }}>
              Voz e vídeo de baixa latência, para você conversar como se
              estivesse na mesma sala. Dê um joinha por vídeo, veja amigos
              transmitirem a jogatina do dia ou junte uma galera pra desenhar na
              tela compartilhada.
            </TextMedium>
            <Image src={call} style={{ width: "100%", marginTop: 16 }} />
          </ContainerDescriptionCustom>
        </Row>
        <TextGetStarted>Vamos começar sua jornada?</TextGetStarted>
        <ButtonGetStarted onClick={() => {}}>
          <Down />
          <TextButtonGetStarted>Baixar para Windows</TextButtonGetStarted>
        </ButtonGetStarted>
      </Grid>
    </Container>
  );
}

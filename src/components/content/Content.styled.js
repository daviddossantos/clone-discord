import styled from "styled-components";
import { ReactComponent as Wave } from "./../../assets/wave.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #fff;
  width: 100%;
`;
export const TextDescription = styled.h2`
  color: #000;
  font-size: 48px;
  font-weight: 700;
  line-height: 120%;
  text-align: left;
`;
export const Image = styled.img`
  grid-column: span 7;
  order: 1;
`;
export const TextMedium = styled.text`
  margin-top: 24px;
  font-size: 20px;
  line-height: 32px;
  color: #000;
  text-align: left;
  font-weight: 200;
`;
export const Grid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
export const ContainerDescription = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: 9 / span 4;
  order: 2;
`;
export const ContainerDescriptionCustom = styled(ContainerDescription)`
  display: flex;
  flex-direction: column;
  grid-column: span 12;
  align-items: center;
`;
export const Row = styled.div`
  width: 100%;
  max-width: 1260px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  gap: 0 20px;
  padding: 0 24px;
`;

export const TextGetStarted = styled.text`
  font-weight: 600;
  font-size: 32px;
  line-height: 32px;
  color: #000;
  margin-bottom: 40px;
`;
export const ButtonGetStarted = styled.button`
  background: #7289da;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  border-radius: 28px;
  padding: 16px 32px;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #fff;
  margin-bottom: 100px;
`;

export const TextButtonGetStarted = styled.text`
  font-size: 20px;
  color: #fff;
  margin-left: 5px;
`;
export const ContainerGetStarted = styled.div`
  background: #298;
`;
export const Separator = styled.div`
  height: 250px;
`;
export const WaveInvert = styled(Wave)`
  color: #f6f6f6;
  transform: rotate(180deg);
`;

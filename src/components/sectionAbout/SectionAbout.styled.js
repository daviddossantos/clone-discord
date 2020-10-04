import styled from "styled-components";

export const TextAbout = styled.text`
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
`;
export const TextInfo = styled.text`
  margin-top: 40px;
  font-size: 20px;
  line-height: 32px;
`;
export const Container = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 3 / span 8;
`;
export const ButtonBlack = styled.button`
  background: #000;
  color: #fff;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  border-radius: 28px;
  font-size: 20px;
  padding: 16px 32px;
`;
export const ButtonWhite = styled(ButtonBlack)`
  background: #fff;
  color: #000;
  margin-right: 24px;
`;
export const ContainerButton = styled.div``;

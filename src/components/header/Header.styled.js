import styled from "styled-components";

export const ContainerHeader = styled.header`
  height: 80px;
  display: flex;
  margin: 0 auto;
  align-items: center;
  color: #fff;
  width: 100%;
  max-width: 1180px;
`;

export const NavContainer = styled.div`
  flex: 1 1 auto;
  text-align: center;
  font-size: 16px;
  line-height: 140%;
  font-weight: 600;
`;
export const NavItem = styled.a`
  margin: 10px;
  padding: 10px;
`;
export const ButtonItem = styled.button`
  background: #fff;
  padding: 7px 16px;
  color: #23272a;
  border-radius: 40px;
  font-size: 14px;
  line-height: 24px;
  font-weight: 300;
`;

export const TextAbout = styled.text`
  font-weight: 700;
  font-size: 56px;
  line-height: 120%;
`;
export const TextInfo = styled.text`
  margin-top: 40px;
  font-size: 20px;
  line-height: 32px;
  font-weight: 300;
`;

export const ButtonBlack = styled.button`
  background: #000;
  color: #fff;

  border-radius: 28px;
  font-size: 20px;
  padding: 16px 32px;
  align-items: center;
  display: flex;
  justify-content: center;
`;
export const ButtonWhite = styled(ButtonBlack)`
  background: #fff;
  color: #000;
  margin-right: 24px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); ;
`;
export const ContainerButton = styled.div`
  margin-top: 20px;
  align-items: center;
  display: flex;
  justify-content: center;
`;

export const Container = styled.div`
  display: grid;
  text-align: center;
  grid-template-columns: 3 / span 8;
`;
export const Row = styled.div`
  width: 100%;
  max-width: 1260px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  align-items: center;
  justify-content: center;
  gap: 0 20px;
  padding: 0 24px;
  margin: 0 auto;
  position: relative;
`;

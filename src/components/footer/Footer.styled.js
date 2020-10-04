import styled from "styled-components";

export const Container = styled.div`
  background: #23272a;
  padding-top: 80px;
  padding-bottom: 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Row = styled.div`
  width: 100%;
  max-width: 1260px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 0 20px;
  padding: 0 40px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  grid-column: span 3;
  flex-grow: 1;
  align-items: flex-start;
`;
export const SectionBox = styled.div`
  grid-column: span 2;
  margin-bottom: 40px;
`;
export const BoxItem = styled.div`
  flex-direction: column;
  display: flex;
`;
export const Item = styled.div`
  color: #fff;
  margin: 8px 0px;
  text-align: left;
  font-weight: 200;
`;
export const SpaceBox = styled.div`
  grid-column: span 1;
  grid-row-end: span 2;
`;
export const InfoItem = styled.h4`
  font-weight: 600;
  font-size: 32px;
  color: #7289da;
  line-height: 120%;
  text-align: left;
`;
export const ImageBrazil = styled.img`
  width: 24px;
  height: 16px;
  margin-right: 8px;
`;
export const ContainerLanguage = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`;
export const IconSocial = styled.img``;
export const ButtonSocial = styled.a`
  margin-right: 25px;
`;
export const Line = styled.div`
  width: 100%;
  background: #7289da;
  height: 1px;
  grid-column: span 12;
`;

export const ButtonGetStarted = styled.a`
  background: #7289da;
  border-radius: 40px;
  padding: 7px 16px;
  align-items: center;
  justify-content: center;
  display: flex;
  color: #fff;
  line-height: 24px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
`;
export const ContainerFooter = styled.div`
  display: flex;
  justify-content: space-between;
  grid-column: span 12;
  margin-top: 50px;
`;

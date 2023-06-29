import styled from "styled-components";

export const Container = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

export const Content = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  gap: 24px;
  margin: 60px 12px;
  @media (max-width: 800px) {
    grid-template-columns: 1fr;
  }
`;
export const Users = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  padding: 12px;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;
export const EachUser = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  justify-content: center;
  gap: 12px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.form};
  box-shadow: ${({ theme }) => theme.shadowHeader};
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
  cursor: pointer;
  transition: 0.3s;
  &:hover {
    transform: scale(1.02);
  }
`;

export const NameAndEmail = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Icons = styled.div`
  display: flex;
  flex-direction: column;
`;
export const GeneralInfos = styled.div`
  grid-column: 1/-1;
  margin: 24px 0px;
  padding: 12px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.form};
  box-shadow: ${({ theme }) => theme.shadowHeader};
  backdrop-filter: blur(4.5px);
  -webkit-backdrop-filter: blur(4.5px);
`;

export const Infos = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;
  align-items: center;
  justify-content: center;
`;
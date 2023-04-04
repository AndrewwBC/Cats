import styled from 'styled-components';

export const Container = styled.section`
  max-width: 500px;
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-content: center;
`;

export const ActionContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  margin-top: 1rem;
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
`;

export const PutComent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  margin-bottom: 1rem;
  border-bottom: 1px solid black;
`;

export const CommentContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  padding: 1rem;
  gap: 1rem;
  align-items: center;
  overflow: auto;
  height: 4.2rem;
  scroll-snap-align: end;
  justify-content: center;
`;

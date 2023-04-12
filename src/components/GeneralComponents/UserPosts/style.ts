import styled, { keyframes } from 'styled-components';

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
  grid-template-rows: 1fr auto auto auto;
  padding: 0rem 1rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.5);
  position: relative;
`;

export const PutComent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
`;

export const LikeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: end;
  padding-bottom: 32px;
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

export const ImgFeed = styled.img`
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-items: center;
  border-radius: 12px;
  position: relative;
  @media (max-width: 768px) {
    object-fit: cover;
    width: 400px;
    height: 340px;
  }
  @media (max-width: 535px) {
    object-fit: cover;
    width: 300px;
    height: 260px;
  }
`;

export const Heart = styled.div`
  display: block;
  cursor: pointer;
  background: url(${(props) =>
    props.itemProp
      ? 'https://icons.iconarchive.com/icons/paomedia/small-n-flat/48/heart-icon.png'
      : 'https://icons.iconarchive.com/icons/iconsmind/outline/48/Heart-2-icon.png'});
`;

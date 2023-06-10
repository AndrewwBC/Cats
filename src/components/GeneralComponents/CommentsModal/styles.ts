import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 6px;
  border-radius: 8px;
  color: black;
  height: 400px;
  padding: 4px;
  overflow-y: scroll;
   @media (max-width: 768px){
    gap: 16px;
  }
`;

export const EachComment = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: center;
  justify-content: center;
  @media (max-width: 500px){
    font-size: 14px;
  }
`;

export const CommentText = styled.div`
    line-break: anywhere;
    display: flex;
    flex-direction: column;
    gap: 4px 0px;
`

export const Img = styled.img`
  display: block;
  max-width: 100%;
`;

export const Nickname = styled.p`
    font-family: 'Roboto';
    letter-spacing: .2px;
    font-size: .8rem;
    font-weight: 400;
    color: grey;
    @media (max-width:500px){
        font-size: .6rem;
    }
`

export const Comment = styled.p`
    font-family: 'Poppins';
    font-size: .8rem;
    color: ${({theme}) => theme.text};
    @media (max-width:500px){
        font-size: .7rem;
    }
`

export const UserPhoto = styled.img`
  height: 40px;
  width: 40px;
  display: block;
  border-radius: 9999px;
  @media (max-width:500px){
    height: 32px;
    width: 32px;
}
`
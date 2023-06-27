import styled from 'styled-components'

export const Container = styled.main`
  max-width: 1000px;
  height: 100vh;
  margin: 32px auto;
  padding: 48px;
  border-radius: 4px;
  @media (max-width: 1000px) {
    margin: 24px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    margin: 4px 12px;
    height: 100vh;
    justify-content: center;
    place-self: center;
    gap: 24px;
    margin: 0px auto;
    border: none;
    padding: 24px;
  }
  @media (max-width: 650px) {
    padding: 12px;
  }
  @media (max-width: 500px) {
    padding: 0px 4px;
  }
`

export const Content = styled.section`
  display: flex;
  flex-direction: column;
`

export const UserData = styled.article`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 32px 0px 32px;
  @media (max-width: 680px) {
    flex-direction: column;
    justify-content: center;
    place-self: center;
    gap: 24px;
    margin-top: 32px;
  }
`

export const UserNamePhoto = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  flex-shrink: 1;
  flex-wrap: wrap;
`

export const UserName = styled.p`
  font-family: 'Poppins';
  font-size: 20px;
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    font-size: 16px;
  }
  @media (max-width: 550px) {
    font-size: 14px;
  }
`

export const UserPhoto = styled.img`
  display: block;
  max-width: 100%;
  border-radius: 99999px;
  object-fit: cover;
  @media (max-width: 640px) {
    height: 64px;
    width: 64px;
  }
`

export const Follow = styled.button`
  background-color: ${({ theme }) => theme.button};
  border-radius: 4px;
  padding: 6px 16px;
  font-family: 'Poppins';
  font-size: 14px;
`

export const UserInfo = styled.nav`
  display: flex;
  gap: 32px;
  place-items: end;
`

export const NumbersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Numbers = styled.p`
  font-size: 18px;
  font-family: 'Poppins';
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const NumbersButton = styled.button`
  background: none !important;
  font-size: 16px;
  font-family: 'Poppins';
  color: ${({ theme }) => theme.text};
  @media (max-width: 768px) {
    font-size: 14px;
  }
`

export const UserFeed = styled.article`
  margin-top: 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 4px;
  align-items: center;
  justify-items: center;
  @media (max-width: 768px) {
    margin-top: 60px;
  }
`

export const FeedImg = styled.img`
  display: block;
  width: 300px;
  height: 300px;
  object-fit: cover;
  @media (max-width: 1200px) {
    width: 260px;
    height: 260px;
  }
  @media (max-width: 1000px) {
    width: 240px;
    height: 240px;
  }
  @media (max-width: 815px) {
    width: 220px;
    height: 220px;
  }
  @media (max-width: 768px) {
    width: 220px;
    height: 220px;
  }
  @media (max-width: 690px) {
    width: 190px;
    height: 190px;
  }
  @media (max-width: 615px) {
    width: 175px;
    height: 175px;
  }
  @media (max-width: 540px) {
    width: 160px;
    height: 160px;
  }
  @media (max-width: 510px) {
    width: 145px;
    height: 145px;
  }
  @media (max-width: 475px) {
    width: 130px;
    height: 130px;
  }
  @media (max-width: 430px) {
    width: 125px;
    height: 125px;
  }
  @media (max-width: 375px) {
    width: 108px;
    height: 108px;
  }
`

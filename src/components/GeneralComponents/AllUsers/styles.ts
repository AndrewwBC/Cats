import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.form};
  padding: 32px;
  margin-bottom: 24px;
  position: relative;
  border-radius: 6px;
  @media (max-width: 768px) {
    margin: 0px 12px;
  }
`
export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  height: 216px;
  overflow-y: scroll;
  @media (max-width: 768px) {
    height: 60px;
  }
  ::-webkit-scrollbar {
    background-color: #000;
    border-radius: 12px;
    width: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #f9f9f9;
    border-radius: 12px;
  }
`
export const Filter = styled.input`
  border-radius: 50px;
  width: 100%;
  padding: 10px;
  margin-bottom: 16px;
  border: 2px solid transparent;
  background-color: ${({ theme }) => theme.input};
  transition: 0.3s;
  @media (max-width: 768px) {
    padding: 6px;
  }
  &:hover {
    background-color: #fff;
  }
  &:focus {
    border: 2px solid #e1ad01;
    background-color: #fff;
  }
`

export const UserList = styled.nav`
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const EachUser = styled.li`
  display: flex;
  align-items: center;
  padding: 4px 12px 4px 4px;
  justify-content: start;
  gap: 0px 12px;
  border-radius: 50px;
  background-color: ${({ theme }) => theme.eachUser};
`
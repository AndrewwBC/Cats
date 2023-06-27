import styled from 'styled-components'

export const Container = styled.section`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  z-index: 10;
  left: 0;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.background};
  padding: 1rem 2rem;
  justify-content: center;
  border-radius: 1rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  padding: 32px 12px;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.8);
  border-radius: 4px;
`

export const InputFile = styled.input`
  margin-right: 20px;
  border: none;
  padding: 10px 20px;
  border-radius: 10px;
  color: #fff;
  cursor: pointer;
  grid-column: 1/-1;
`

export const DropFiles = styled.div`
  position: relative;
  display: flex;
  gap: 10px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-height: 6rem;
  padding: 20px;
  border-radius: 10px;
  border: 2px dashed #555;
  color: #444;
  cursor: pointer;
  &:hover {
    background: #eee;
    border-color: #111;
    color: #111;
  }
`

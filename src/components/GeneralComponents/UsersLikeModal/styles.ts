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
  background-color: rgba(0, 0, 0, 0.4);
  padding: 1rem 2rem;
  justify-content: center;
  border: 1px solid rgba(0, 0, 0, 0.1);
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 320px;
  gap: 2rem;
  padding: 32px 12px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.form};
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 4px;
`

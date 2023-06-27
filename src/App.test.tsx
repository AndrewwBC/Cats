import { act } from 'react-dom/test-utils'
import * as ReactDOM from 'react-dom'
import Diseases from './components/Routes/Diseases/Diseases'
import Contact from './components/Routes/Contact/Contact'
import { fireEvent, screen, render } from '@testing-library/react'
import HomePage from './components/Routes/HomePage/HomePage'
import { BrowserRouter } from 'react-router-dom'
import '@testing-library/jest-dom'
import SendComments from './components/GeneralComponents/PostComponents/SendComments/SendComments'

const mockNavigate = jest.fn()
jest.mock('react-router', () => ({
  ...jest.requireActual('react-router'),
  useNavigate: () => mockNavigate,
}))

const renderHome = () => {
  render(
    <BrowserRouter>
      <HomePage />
    </BrowserRouter>,
  )
}

describe('Homepage', () => {
  it('should render buttons correctly', () => {
    renderHome()

    expect(screen.getByText('Login')).toBeInTheDocument()
    expect(screen.getByText('Cadastro')).toBeInTheDocument()
  })

  it('should navigate when button is pressed', () => {
    renderHome()

    const loginButton = screen.getByText('Login')

    fireEvent.click(loginButton)

    expect(mockNavigate).toHaveBeenCalledWith('/login')
  })
})

describe('Diseases title test', () => {
  it('Should show Bem-Vindo text', () => {
    let container = document.createElement('div')

    document.body.appendChild(container)
    act(() => {
      ReactDOM.render(<Diseases />, container)
    })
    const header = container.querySelector('h1')!
    expect(header.textContent).toBe('Doenças')
  })
})

describe('Contato title test', () => {
  it('Should show Contato text', () => {
    let container = document.createElement('div')

    document.body.appendChild(container)
    act(() => {
      ReactDOM.render(<Contact />, container)
    })
    const header = container.querySelector('h1')!
    expect(header.textContent).toBe('Contato')
  })
})

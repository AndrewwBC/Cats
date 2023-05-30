import React from 'react'
import {
  Cards,
  CardsContainer,
  Container,
  Content,
  Image,
  Name,
  Text,
} from './styles'
import { Title } from '../../GeneralComponents/Titles'
import { Paragraph } from '../../GeneralComponents/Paragraph'

const Feedback = () => {
  const pessoas = [
    {
      nome: 'Maria',
      foto: 'link_da_foto_maria_com_gato.jpg',
      link: 'https://images.unsplash.com/photo-1605507677930-827b698c6975?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d29tYW4lMjB3aXRoJTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      descricao:
        'CatGram é simplesmente incrível! Encontrei uma comunidade maravilhosa de amantes de gatos como eu. Posso descobrir novas raças e aprender sobre cuidados com os felinos.',
    },
    {
      nome: 'Paula',
      foto: 'link_da_foto_joao_com_gato.jpg',
      link: 'https://images.unsplash.com/photo-1606161902041-607a6899d630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjB3aXRoJTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      descricao:
        'CatGram é mais do que uma rede social para mim. É uma plataforma onde posso conscientizar as pessoas sobre a importância de adotar e cuidar dos gatos. Adoro seguir perfis de resgates e abrigos.',
    },
    {
      nome: 'Ana',
      foto: 'link_da_foto_ana_com_gato.jpg',
      link: 'https://images.unsplash.com/photo-1612529378924-5d9afa8fe407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjB3aXRoJTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      descricao:
        'É incrível! Adoro compartilhar minhas fotos e vídeos de gatos e interagir com outros amantes de felinos. É uma rede social divertida e acolhedora, onde posso expressar meu amor por gatos sem limites.',
    },
    {
      nome: 'Pedro',
      foto: 'link_da_foto_pedro_com_gato.jpg',
      link: 'https://images.unsplash.com/photo-1596981665119-3c67b0a2d6d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwd2l0aCUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      descricao:
        'É a melhor descoberta que fiz recentemente! Estou maravilhada com a comunidade de amantes de gatos que encontrei aqui',
    },
    {
      nome: 'Carolina',
      foto: 'link_da_foto_carolina_com_gato.jpg',
      link: 'https://images.unsplash.com/photo-1540593318873-4daf6e6e95e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW4lMjB3aXRoJTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      descricao:
        'O CatGram é a melhor descoberta que fiz recentemente! Estou maravilhada com a comunidade de amantes de gatos que encontrei aqui.',
    },
    {
      nome: 'Rafael',
      foto: 'link_da_foto_rafael_com_gato.jpg',
      link: 'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd2l0aCUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      descricao:
        'Sou entusiasta de gatos e não poderia estar mais feliz com a comunidade do CatGram. Na rede, interagimos e compartilhamos ótimos momentos com o seu gato.',
    },
  ]

  return (
    <Container>
      <Content>
        <Title style={{ fontSize: '3rem' }}>Feedback</Title>
        <Paragraph>
          Confira o que nossos usuários tem a dizer sobre nossa comunidade.
        </Paragraph>
        <CardsContainer>
          {pessoas.map(({ nome, link, descricao }) => {
            return (
              <Cards>
                <Image src={link} alt="Pessoas com gatos" />
                <Text>
                  <Name>{nome}</Name>
                  <Paragraph>{descricao}</Paragraph>
                </Text>
              </Cards>
            )
          })}
        </CardsContainer>
      </Content>
    </Container>
  )
}

export default Feedback

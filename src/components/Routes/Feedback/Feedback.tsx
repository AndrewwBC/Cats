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
        'Maria adora compartilhar fotos fofas de gatos e contar histórias engraçadas sobre as travessuras dos felinos. Ela encontrou no CatGram o lugar perfeito para se conectar com outros amantes de gatos e trocar experiências.',
    },
    {
      nome: 'Paula',
      foto: 'link_da_foto_joao_com_gato.jpg',
      link: 'https://images.unsplash.com/photo-1606161902041-607a6899d630?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8d29tYW4lMjB3aXRoJTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      descricao:
        'João é um amante de gatos e descobriu no CatGram uma comunidade incrível de pessoas que compartilham sua paixão. Ele adora explorar as postagens de outros usuários, descobrir novas raças de gatos e aprender mais sobre cuidados e bem-estar felino!',
    },
    {
      nome: 'Ana',
      foto: 'link_da_foto_ana_com_gato.jpg',
      link: 'https://images.unsplash.com/photo-1612529378924-5d9afa8fe407?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8d29tYW4lMjB3aXRoJTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      descricao:
        'Ana encontrou no CatGram um lugar onde pode unir sua paixão por gatos com seu desejo de ajudar animais em necessidade. Ela adora seguir perfis de resgates de gatos, abrigos e organizações de proteção animal.',
    },
    {
      nome: 'Pedro',
      foto: 'link_da_foto_pedro_com_gato.jpg',
      link: 'https://images.unsplash.com/photo-1596981665119-3c67b0a2d6d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8bWFuJTIwd2l0aCUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      descricao:
        'Pedro é um entusiasta de gatos e sempre encontra inspiração no CatGram. Ele adora compartilhar suas próprias fotos de gatos e interagir com outros usuários por meio de comentários e curtidas.',
    },
    {
      nome: 'Carolina',
      foto: 'link_da_foto_carolina_com_gato.jpg',
      link: 'https://images.unsplash.com/photo-1540593318873-4daf6e6e95e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29tYW4lMjB3aXRoJTIwY2F0fGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60',
      descricao:
        'Carolina é uma amante de gatos que encontrou no CatGram um refúgio para compartilhar sua paixão. Ela adora explorar as diferentes hashtags e seguir perfis de gatos de todo o mundo.',
    },
    {
      nome: 'Rafael',
      foto: 'link_da_foto_rafael_com_gato.jpg',
      link: 'https://images.unsplash.com/photo-1601758174114-e711c0cbaa69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bWFuJTIwd2l0aCUyMGNhdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60',
      descricao:
        'Rafael é um entusiasta de gatos e não poderia estar mais feliz com a comunidade do CatGram. Na rede ele interage e compartilha ótimos momentos com o seu gato.',
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

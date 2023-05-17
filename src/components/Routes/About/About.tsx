import React from 'react'
import {
  Container,
  Content,
  ImgMap,
  MapContainer,
  MapContent,
  MapInfos,
  PetShopAddress,
} from './styles'
import { Title } from '../../GeneralComponents/Titles'
import { Paragraph } from '../../GeneralComponents/Paragraph'

const About = () => {
  const diseases = [
    {
      id: 1,
      titulo: 'Adoção de Gatos',
      descricao:
        'Dicas e orientações sobre como adotar um gato, incluindo locais de adoção, cuidados pré e pós-adoção e informações sobre a importância da adoção responsável.',
    },
    {
      id: 2,
      titulo: 'Doenças Comuns em Gatos',
      descricao:
        'Informações sobre doenças comuns em gatos, seus sintomas, tratamentos e medidas preventivas. Inclui conselhos sobre como manter a saúde do seu gato em dia.',
    },
    {
      id: 3,
      titulo: 'Encontrando Gatos Perdidos',
      descricao:
        'Dicas para ajudar a localizar gatos perdidos, incluindo a criação de cartazes, compartilhamento de informações em redes sociais e contato com abrigos de animais e clínicas veterinárias locais.',
    },
    {
      id: 4,
      titulo: 'Cuidados Especiais para Gatos Idosos',
      descricao:
        'Informações sobre os cuidados especiais que os gatos idosos precisam, incluindo dieta adequada, exercícios, exames de saúde regulares e adaptação do ambiente para melhorar sua qualidade de vida.',
    },
    {
      id: 5,
      titulo: 'Prevenção de Pulgas e Carrapatos',
      descricao:
        'Dicas sobre como prevenir infestações de pulgas e carrapatos em gatos, incluindo o uso de produtos adequados, higiene e limpeza do ambiente doméstico e cuidados com outros animais de estimação.',
    },
  ]

  return (
    <Container>
      <Content>
        <Title style={{ fontSize: '2.4rem' }}>Sobre nós</Title>
        <Paragraph style={{ letterSpacing: '.5px', fontWeight: '400' }}>
          Somos uma comunidade preocupada em unir pessoas apaixonadas por gatos.
          Temos o intuíto de oferecer uma rede social divertida que também
          contará com aspectos importantes.
        </Paragraph>
        <ol>
          {diseases.map(({ id, titulo, descricao }) => {
            return (
              <li key={id}>
                <h3 style={{ fontFamily: 'poppins' }}>{titulo}</h3>
                <p
                  style={{
                    paddingLeft: '18px',
                    margin: '8px',
                    fontWeight: '400',
                    fontFamily: 'Poppins',
                    letterSpacing: '0.3px',
                  }}
                >
                  {descricao}
                </p>
              </li>
            )
          })}
        </ol>
        <Title style={{ fontSize: '2.4rem', marginTop: '32px' }}>
          Endereços
        </Title>
        <Paragraph style={{ letterSpacing: '.5px', fontWeight: '400' }}>
          Nossas principais localizações e contatos.
        </Paragraph>
        <MapContainer>
          <MapContent>
            <ImgMap
              width={480}
              height={240}
              src="https://i.stack.imgur.com/HILmr.png"
              alt=""
            />
            <MapInfos>
              <Title style={{ fontFamily: 'poppins', fontSize: '1.6rem' }}>
                Pelotas
              </Title>
              <PetShopAddress>
                <div>
                  <Paragraph>Rua Ali Perto, 25</Paragraph>
                  <Paragraph>Pelotas - RS</Paragraph>
                </div>
                <div>
                  <Paragraph>latidosemiados@gmail.com</Paragraph>
                  <Paragraph>+55 53 9 9999-9999</Paragraph>
                </div>
                <Paragraph style={{ marginTop: '12px', gridColumn: '1/-1' }}>
                  08 as 18 de seg à dom
                </Paragraph>
              </PetShopAddress>
            </MapInfos>
          </MapContent>
          <MapContent>
            <ImgMap
              width={480}
              height={240}
              src="https://i.stack.imgur.com/HILmr.png"
              alt=""
            />
            <MapInfos>
              <Title style={{ fontFamily: 'poppins', fontSize: '1.6rem' }}>
                Pelotas
              </Title>
              <PetShopAddress>
                <div>
                  <Paragraph>Rua Ali Perto, 25</Paragraph>
                  <Paragraph>Pelotas - RS</Paragraph>
                </div>
                <div>
                  <Paragraph>latidosemiados@gmail.com</Paragraph>
                  <Paragraph>+55 53 9 9999-9999</Paragraph>
                </div>
                <Paragraph style={{ marginTop: '12px', gridColumn: '1/-1' }}>
                  08 as 18 de seg à dom
                </Paragraph>
              </PetShopAddress>
            </MapInfos>
          </MapContent>
        </MapContainer>
      </Content>
    </Container>
  )
}

export default About

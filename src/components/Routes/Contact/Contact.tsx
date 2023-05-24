import React from 'react'
import {
  Container,
  Content,
  FormContainer,
  ImgMap,
  MapContainer,
  MapContent,
  MapInfos,
  Names,
  PetShopAddress,
  Text,
  TextArea,
  Titles,
} from './styles'
import { Title } from '../../GeneralComponents/Titles'
import { Paragraph } from '../../GeneralComponents/Paragraph'
import Input from '../../FormComponents/Input/Input'
import { Label } from '../../FormComponents/Input/styles'
import { Button } from '../../FormComponents/Button/style'

const Contact = () => {
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
        <Title style={{ fontSize: '2.4rem' }}>Contato</Title>
        <Paragraph style={{ letterSpacing: '.5px', fontWeight: '400' }}>
          Aqui você encontrará diversas maneiras de entrar em contato conosco.
          <br></br>
          Esperamos fornecer as mais diversas possibilidade de contato.
        </Paragraph>

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
        <form action="">
          <FormContainer>
            <Title style={{ margin: '48px 0' }}>
              Gostaria de mandar uma mensagem?
            </Title>
            <Names>
              <Input
                label="Nome"
                type="text"
                placeholder="Seu nome aqui"
                name="nomeContact"
              />
              <Input
                label="Sobrenome"
                type="text"
                placeholder="Silva ou Silveira?"
                name="sobrenomeContact"
              />
            </Names>
            <div>
              <Input
                label="Email"
                type="email"
                placeholder="Seu melhor email!"
                name="emailContact"
              />
            </div>

            <Label>Mande uma mensagem!</Label>
            <TextArea />
            <Button style={{ marginTop: '16px' }}>Enviar</Button>
          </FormContainer>
        </form>
      </Content>
    </Container>
  )
}

export default Contact

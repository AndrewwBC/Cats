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

const Diseases = () => {
  const diseases = [
    {
      id: 1,
      nome: 'Rinotraqueíte Felina',
      tratamento:
        'Administrar medicamentos antivirais e sintomáticos conforme indicado pelo veterinário.',
      prevencao:
        'Vacinação anual contra rinotraqueíte felina, evitar o contato com gatos doentes.',
    },
    {
      id: 2,
      nome: 'Doença do trato urinário inferior felino (DTUIF)',
      tratamento:
        'Terapia medicamentosa, dieta especializada e aumento da ingestão de água.',
      prevencao:
        'Promover a hidratação adequada, oferecer uma dieta balanceada e rica em água.',
    },
    {
      id: 3,
      nome: 'Gripe felina',
      tratamento:
        'Administrar medicamentos para aliviar os sintomas, manter o gato aquecido e oferecer alimentos palatáveis.',
      prevencao:
        'Vacinar contra a gripe felina e evitar o contato com gatos infectados.',
    },
    {
      id: 4,
      nome: 'Doença renal crônica',
      tratamento:
        'Dieta renal especializada, administração de medicamentos prescritos pelo veterinário e monitoramento regular.',
      prevencao:
        'Manter uma hidratação adequada, oferecer uma dieta de qualidade e realizar check-ups veterinários regulares.',
    },
    {
      id: 5,
      nome: 'Verminoses',
      tratamento:
        'Administrar vermífugos de acordo com a orientação veterinária e garantir higiene adequada.',
      prevencao:
        'Realizar vermifugação regularmente e manter o ambiente limpo.',
    },
  ]

  return (
    <Container>
      <Content>
        <Title style={{ fontSize: '2.4rem' }}>Doenças</Title>
        <Paragraph style={{ letterSpacing: '.5px' }}>
          Nossos gatinhos necessitam de cuidados especiais. <br />
          Quando saem de casa e se aventuram na rua, podem voltar com uma
          surpresinha. <br />
          Pensando nisso, apresentaremos aqui uma lista das principais doenças e
          como prevenir o seu felino.
          <br />
        </Paragraph>
        <ol>
          {diseases.map(({ id, nome, tratamento, prevencao }) => {
            return (
              <li>
                <h3 style={{ fontFamily: 'poppins' }}>{nome}</h3>
                <p style={{ paddingLeft: '18px', margin: '8px' }}>
                  {tratamento}
                </p>
                <p style={{ paddingLeft: '18px', margin: '8px' }}>
                  {prevencao}
                </p>
              </li>
            )
          })}
        </ol>
        <Title style={{ fontSize: '2.4rem', marginTop: '32px' }}>
          Veterinários
        </Title>
        <Paragraph style={{ letterSpacing: '.5px' }}>
          Aqui estão os veterinários mais próximos a sua casa.
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

export default Diseases

import { useState } from 'react';
import {
  Content,
  Main,
  Intro,
  ImgContainer,
  IntroText,
  IntroButtons,
  Access,
  Infos,
  InfosText,
} from './styles';
import { Paragraph } from '../../GeneralComponents/Paragraph';
import { Catgram, Title } from '../../GeneralComponents/Titles';
import { Button } from '../../FormComponents/Button/style';

const HomePage = () => {
  let Images = [
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
    'https://images.unsplash.com/photo-1516374348294-ce51573b0fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1526673945462-bbebcd9f24f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  ];

  return (
    <>
      <Main>
        <Content>
          <ImgContainer
            style={{
              gridColumn: ' 5/-1',
              gridRow: '1/3',
              borderTopLeftRadius: '82px',
            }}
            src={Images[0]}
            id="slide"
          />

          <ImgContainer
            style={{
              gridColumn: '1/3',
              gridRow: '4',
              marginLeft: '180px',
              borderTopRightRadius: '82px',
            }}
            src={Images[1]}
            id="slide"
          />

          <Intro>
            <div>
              <Title>
                Bem vindo ao <Catgram>Catgram.</Catgram>
              </Title>
            </div>

            <IntroText>
              <Paragraph style={{}} itemProp="18px">
                A melhor rede social para o seu felino!
              </Paragraph>

              <Paragraph itemProp="18px">
                Aproveite para exibir toda a beleza do seu Pet!
              </Paragraph>
            </IntroText>

            <IntroButtons>
              <Access>Acesse rapidamente</Access>
              <Button>Login</Button>
              <Button>Cadastro</Button>
            </IntroButtons>
          </Intro>
          <Infos>
            <div>
              <InfosText itemProp="16px" style={{ paddingTop: '18px' }}>
                Contamos com mais de 100 usuários!
              </InfosText>
            </div>
            <div>
              <InfosText itemProp="16px" style={{ paddingTop: '16px' }}>
                Mais de 1000 Postagens e Interações!
              </InfosText>
            </div>
          </Infos>
        </Content>
      </Main>
    </>
  );
};

export default HomePage;

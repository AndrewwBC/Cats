import { useState } from 'react';
import { Content, Main, Intro, ImgContainer } from './styles';
import { Paragraph } from '../../GeneralComponents/Paragraph';
import { Title } from '../../GeneralComponents/Titles';

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
          <ImgContainer src={Images[0]} height={720} width={480} id="slide" />

          <Intro>
            <div>
              <Title>Olá!</Title>
            </div>
            <div>
              <Paragraph style={{ marginBottom: '.5rem' }} itemProp="1.2rem">
                Bem vindo ao CatGram.
              </Paragraph>
            </div>
            <div>
              <Paragraph style={{ marginBottom: '.5rem' }} itemProp="1.2rem">
                A melhor rede social para o seu felino!
              </Paragraph>
            </div>
          </Intro>
        </Content>
      </Main>
    </>
  );
};

export default HomePage;

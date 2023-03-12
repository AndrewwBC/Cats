import { useState } from 'react';
import { Content, Main, Intro, ImgContainer } from './styles';
import { Paragraph } from '../GeneralComponents/Paragraph';
import { NormalTitle } from '../GeneralComponents/Titles';

const HomePage = () => {
  let index = 0;
  let Images = [
    'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80',
    'https://images.unsplash.com/photo-1516374348294-ce51573b0fb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    'https://images.unsplash.com/photo-1526673945462-bbebcd9f24f5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
  ];

  setInterval(() => {
    if (index === 3) {
      index = 0;
    }
    document.getElementById('slide')?.setAttribute('src', Images[index]);
    index++;
  }, 2500);

  return (
    <>
      <Main>
        <Content>
          <ImgContainer src={Images[0]} height={720} width={480} id="slide" />

          <Intro>
            <NormalTitle>Olá!</NormalTitle>
            <Paragraph style={{ marginBottom: '8px' }} itemProp="20px">
              Bem vindo ao CatGram.
            </Paragraph>
            <Paragraph style={{ marginBottom: '8px' }} itemProp="20px">
              A melhor rede social para o seu felino!
            </Paragraph>
          </Intro>
        </Content>
      </Main>
    </>
  );
};

export default HomePage;

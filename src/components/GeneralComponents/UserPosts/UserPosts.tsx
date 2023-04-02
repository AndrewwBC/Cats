import React from 'react';
import { Container, ActionContainer, PutComent } from './style';
import { ImgContainer } from '../../HomePage/styles';
const UserPosts = () => {
  return (
    <>
      <Container>
        <div>
          <ImgContainer
            width={380}
            height={520}
            style={{ objectFit: 'cover' }}
            src="http://localhost:3001/images/a49805cf11d5322b062373efa6d73c80"
            alt="Image"
          />
        </div>
        <ActionContainer>
          <div>
            <button>Like</button>
          </div>
          <PutComent>
            <div>
              <span>Adicione um comentário</span>
            </div>
            <div>
              <button>Enviar</button>
            </div>
          </PutComent>
        </ActionContainer>
      </Container>
    </>
  );
};

export default UserPosts;

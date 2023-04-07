import React, { useState, useEffect } from 'react';
import Services, { PHP } from '../../../api';
import { Container, Content } from './styles';
import UserPosts from '../../GeneralComponents/UserPosts/UserPosts';
import PostPhoto from '../../GeneralComponents/PostPhoto/PostPhoto';

const GeneralFeed = () => {
  const [files, setFiles] = useState<any>();
  const [load, setLoad] = useState(true);
  const [response, setResponse] = useState(true);
  const [teste, setTeste] = useState(false);

  function envioMassa() {
    PHP.Promoção(setResponse, setLoad);
  }

  console.log(response);

  useEffect(() => {
    getFiles();
  }, []);

  async function getFiles() {
    await Services.S3GetAllFiles(setFiles, setLoad, setTeste);
  }

  if (load) return <div>Oi</div>;
  if (!load && teste)
    return (
      <>
        <Container>
          <Content>
            <PostPhoto></PostPhoto>
            {/* {files.Contents.map((item: any, index: any) => (
              <img
                style={{ display: 'block', objectFit: 'cover' }}
                key={index}
                src={`http://localhost:3001/images/${item.Key}`}
                alt=""
                height={600}
                width={400}
              />
            ))} */}
            <UserPosts></UserPosts>

            <button onClick={envioMassa}>Envio em Massa</button>
          </Content>
        </Container>
      </>
    );
  else return <div>Olá</div>;
};

export default GeneralFeed;

import React, { useState } from 'react';
import { PHP } from '../../../api';
import { Container, Content } from './styles';
import FeedPost from '../../GeneralComponents/FeedPost/FeedPost';
import PostPhoto from '../../GeneralComponents/PostPhoto/PostPhoto';

const GeneralFeed = () => {
  //const [files, setFiles] = useState<any>();
  //const [load, setLoad] = useState(true);
  //const [response, setResponse] = useState(true);
  //const [teste, setTeste] = useState(false);

  // function envioMassa() {
  //   PHP.Promoção(setResponse, setLoad);
  // }

  //console.log(response);

  // useEffect(() => {
  //   getFiles();
  // }, []);

  // async function getFiles() {
  //   await Services.S3GetAllFiles(setFiles, setLoad, setTeste);
  // }

  return (
    <>
      <Container>
        <Content>
          <FeedPost />
          {/* <button onClick={envioMassa}>Envio em Massa</button> */}
        </Content>
      </Container>
    </>
  );
};

export default GeneralFeed;

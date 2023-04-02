import React, { useState, useEffect } from 'react';
import Services from '../../api';
import { Container, Content } from './styles';
import UserPosts from '../GeneralComponents/UserPosts/UserPosts';
import PostPhoto from '../GeneralComponents/PostPhoto/PostPhoto';

const GeneralFeed = () => {
  const [files, setFiles] = useState<any>();
  const [load, setLoad] = useState(true);
  const [teste, setTeste] = useState(false);
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
            <PostPhoto></PostPhoto>
          </Content>
        </Container>
      </>
    );
  else return <div>Olá</div>;
};

export default GeneralFeed;

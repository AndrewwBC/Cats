import React, { useState, useEffect } from 'react';
import Services from '../../api';
import { Container } from './styles';

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
  //<img key={index} src={`http://localhost:3001/images/${item.Key}`} alt="" />;

  if (load) return <div>Oi</div>;
  if (!load && teste)
    return (
      <>
        <Container>
          {files.Contents.map((item: any, index: any) => (
            <img
              style={{ display: 'block' }}
              key={index}
              src={`http://localhost:3001/images/${item.Key}`}
              alt=""
              height={400}
              width={400}
            />
          ))}
        </Container>
      </>
    );
  else return <div>Olá</div>;
};

export default GeneralFeed;

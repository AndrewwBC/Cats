import React, { useState } from 'react'
import { PHP } from '../../../api'
import { Container, Content } from './styles'
import FeedPost from '../../GeneralComponents/FeedPost'
import PostPhoto from '../../GeneralComponents/PostPhoto'
import SideMenu from '../../GeneralComponents/SideMenu/SideMenu'

const GeneralFeed = () => {
  //const [files, setFiles] = useState<any>();
  //const [load, setLoad] = useState(true);
  //const [response, setResponse] = useState(true);
  //const [teste, setTeste] = useState(false);
  const [modal, setModal] = useState(false)

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
      <Container
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.3 }}
      >
        <Content>
          <button onClick={() => setModal(true)}>MODAL</button>
          {modal && <PostPhoto setModal={setModal} />}

          <SideMenu />
          <FeedPost />
          {/* <button onClick={envioMassa}>Envio em Massa</button> */}
        </Content>
      </Container>
    </>
  )
}

export default GeneralFeed

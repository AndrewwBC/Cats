import React, { useState } from 'react'
import { UserRequirements } from '../../../api'
import { Button } from '../../FormComponents/Button/style'
import { Container, Content, DropFiles, InputFile } from './styles'
import { Title } from '../Titles'
import Input from '../../FormComponents/Input/Input'
import { Paragraph } from '../Paragraph'
import useUserCod from '../../../hooks/useUserCod'
import useUser from '../../../hooks/useUser'

const PostPhoto = ({ setModal }: any) => {
  const [file, setFile] = useState<any>()
  const [arrow, setArrow] = useState(false)
  const [description, setDescription] = useState('')

  const { userCod } = useUserCod()
  const { user } = useUser()

  const formData = new FormData()

  async function handleSubmit(event: any) {
    event.preventDefault()
    formData.append('image', file)
    formData.append('description', description)
    formData.append('user_cod', userCod)
    formData.append('username', user)
    //Upload
    await UserRequirements.PostFeedPhoto(formData)
    //Download
    // await UserRequirements.getURL(1, setURL);
    //JSON PHP
    // await UserRequirements.PHP(setURL).then((response) => url.push(response));
    // console.log(url);
  }

  function fileSelected(event: any) {
    const file = event.target.files[0]
    setFile(file)
  }

  window.addEventListener('click', ({ target }: any) => {
    if (target.id === 'outModal') setModal(false)
  })

  return (
    <Container id="outModal">
      <Content>
        <Title style={{ color: 'white' }}>Faça uma postagem</Title>
        <DropFiles>
          <InputFile
            placeholder="Escolha a sua melhor foto!"
            type="file"
            name="fileImg"
            accept="image/*"
            onChange={fileSelected}
          />
        </DropFiles>
        <Input
          type="text"
          label="Descrição"
          name="photodescription"
          placeholder="Miaaau"
          onChange={({ target }: any) => setDescription(target.value)}
        />
        <Button
          type="submit"
          style={{ gridColumn: '1/-1' }}
          onClick={handleSubmit}
        >
          Enviar
        </Button>
      </Content>
    </Container>
  )
}

export default PostPhoto

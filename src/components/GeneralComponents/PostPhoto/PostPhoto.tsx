import React, { useState } from 'react';
import { UserRequirements } from '../../../api';
import { Button } from '../../FormComponents/Button/style';
import {
  Arrow,
  Container,
  Content,
  DropDown,
  DropFiles,
  InputFile,
} from './styles';
import { LowTitle } from '../Titles';
import Input from '../../FormComponents/Input/Input';
import { Paragraph } from '../Paragraph';

const PostPhoto = () => {
  const [file, setFile] = useState<any>();
  const [arrow, setArrow] = useState(false);
  const [description, setDescription] = useState('');

  let userCod: any = localStorage.getItem('usercod');
  const formData = new FormData();

  async function handleSubmit(event: any) {
    event.preventDefault();
    formData.append('image', file);
    formData.append('description', description);
    formData.append('user_cod', userCod);
    //Upload
    await UserRequirements.PostFeedPhoto(formData);
    //Download
    // await UserRequirements.getURL(1, setURL);
    //JSON PHP
    // await UserRequirements.PHP(setURL).then((response) => url.push(response));
    // console.log(url);
  }

  function fileSelected(event: any) {
    const file = event.target.files[0];
    setFile(file);
  }
  <div>
    <input type="file" name="" id="" accept="image/*" onChange={fileSelected} />
  </div>;

  return (
    <Container>
      <Content>
        <LowTitle style={{ color: 'white' }}>Faça uma postagem</LowTitle>
        <div style={{ justifySelf: 'end' }} onClick={() => setArrow(!arrow)}>
          <Arrow
            height={40}
            width={40}
            style={
              arrow
                ? { transform: 'rotate(180deg)' }
                : { backgroundColor: 'red' }
            }
            src="https://cdn-icons-png.flaticon.com/512/5198/5198472.png"
          />
        </div>

        <DropDown style={arrow ? { display: 'grid' } : { display: 'none' }}>
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
        </DropDown>
      </Content>
    </Container>
  );
};

export default PostPhoto;

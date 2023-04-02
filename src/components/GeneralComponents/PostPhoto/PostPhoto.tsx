import React, { useState } from 'react';
import { UserRequirements } from '../../../api';

const PostPhoto = () => {
  const [file, setFile] = useState<any>();
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

  return (
    <form action="">
      <h1 style={{ margin: '60px' }}>POSTE</h1>
      <div>
        <div>
          <input
            type="file"
            name=""
            id=""
            accept="image/*"
            onChange={fileSelected}
          />
        </div>
        <div>
          <p>descricao</p>
          <input
            type="text"
            name=""
            id=""
            value={description}
            onChange={({ target }) => setDescription(target.value)}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Enviar
        </button>
      </div>
    </form>
  );
};

export default PostPhoto;

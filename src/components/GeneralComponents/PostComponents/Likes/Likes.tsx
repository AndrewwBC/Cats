import React, { useEffect, useState, memo } from 'react';
import Services from '../../../../api';
import { Likes } from './styles';

const Comments = (postCod: any) => {
  const [likes, setLikes] = useState<any>(false);

  useEffect(() => {
    getLikes();
  }, [postCod.postCod]);

  async function getLikes() {
    await Services.GetLikes(setLikes, postCod.postCod);
  }
  console.log(likes);
  if (!likes) return <div></div>;
  if (likes) return <Likes>{likes.length} curtida</Likes>;
  else return <div>Oi</div>;
};

export default memo(Comments);

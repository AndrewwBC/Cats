import React, { useEffect, useState, memo } from 'react';
import Services from '../../../../api';

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
  if (likes) return <div>{likes.length} Likes</div>;
  else return <div>Oi</div>;
};

export default memo(Comments);

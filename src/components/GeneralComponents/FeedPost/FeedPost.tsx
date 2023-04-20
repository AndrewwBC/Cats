import React, { useState, useEffect, memo } from 'react';
import Services from '../../../api';
import {
  Container,
  Content,
  Description,
  Image,
  InputComment,
  PostInteraction,
  User,
  UserNameDescription,
} from './styles';

import Comments from '../PostComponents/Comments/Comments';
import Likes from '../PostComponents/Likes/Likes';
import IconsData from '../PostComponents/IconsData/IconsData';

const FeedPost = () => {
  const [post, setPost] = useState<any>();

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    await Services.GetPosts(setPost);
  }
  
  if (!post) return <div style={{height: '100vh' }}>Load</div>;
  else
    return (
      <>
        <Container initial={{opacity: 0}} animate={{opacity: 1}} exit={{opacity:0, y: 50}} transition={{duration: .6}}>
          {post.map((item: any) => (
            <Content key={item.Post_Cod}>
              <Image
                src={`http://localhost:3001/images/${item.Img}`}
              /> 
              <PostInteraction>
                <IconsData />
                <p>{item.Likes}</p>
                <UserNameDescription>
                  <div>
                    <User>Drew123</User>
                  </div>
                  <Description>{item.Description}</Description>
                </UserNameDescription>
                <Comments postCod={item.Post_Cod} />
                <InputComment placeholder="Adicione um comentário..." />
              </PostInteraction>
            </Content>
          ))}
        </Container>
      </>
    );
};
export default memo(FeedPost);

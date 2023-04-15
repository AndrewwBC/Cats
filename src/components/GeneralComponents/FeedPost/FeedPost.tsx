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
import Input from '../../FormComponents/Input/Input';
import IconsData from '../PostComponents/IconsData/IconsData';

const FeedPost = () => {
  const [post, setPost] = useState<any>();

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    await Services.GetPosts(setPost);
  }
  console.log(post);
  if (!post) return <div>Load</div>;
  else
    return (
      <>
        <Container>
          {post.map((item: any) => (
            <Content>
              <Image
                key={item.User_Cod}
                src={`http://localhost:3001/images/${item.Img}`}
              />
              <PostInteraction>
                <IconsData />
                <Likes postCod={item.Post_Cod} />
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

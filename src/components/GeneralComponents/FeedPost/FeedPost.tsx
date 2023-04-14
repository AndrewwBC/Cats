import React, { useState, useEffect, memo } from 'react';
import Services from '../../../api';
import {
  Container,
  Content,
  Description,
  Image,
  PostInteraction,
  User,
} from './styles';

import Comments from '../PostComponents/Comments/Comments';
import Likes from '../PostComponents/Likes/Likes';
import Input from '../../FormComponents/Input/Input';

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
                <User>
                  <div>
                    <p>{item.UserName}</p>
                  </div>
                  <div>
                    <p>10/10/2023</p>
                  </div>
                </User>
                <Description> Olaaaaa</Description>
                <Comments postCod={item.Post_Cod} />
                <Input
                  label="Comentário"
                  name="comment"
                  type="text"
                  placeholder="Comente..."
                />
                <Likes postCod={item.Post_Cod} />
              </PostInteraction>
            </Content>
          ))}
        </Container>
      </>
    );
};
export default memo(FeedPost);

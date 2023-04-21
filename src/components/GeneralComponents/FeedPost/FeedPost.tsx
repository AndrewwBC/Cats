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
  LikeText,
  SendCommentDiv,
  SendCommentButton
} from './styles';

import Comments from '../PostComponents/Comments/Comments';
import IconsData from '../PostComponents/IconsData/IconsData';
import { Button } from '../../FormComponents/Button/style';

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
                {item.Likes === 0? <LikeText>Seja o primeiro a curtir</LikeText> : item.Likes > 1? <LikeText>{item.Likes} curtidas</LikeText> : <LikeText>{item.Likes} curtida</LikeText> }
                <UserNameDescription>
                  <div>
                    <User>Drew123</User>
                  </div>
                  <Description>{item.Description}</Description>
                </UserNameDescription>
                <Comments postCod={item.Post_Cod} />
              
                <SendCommentDiv>
                <InputComment placeholder="Adicione um comentário..."/>
                <SendCommentButton>Enviar</SendCommentButton>
                </SendCommentDiv>

              </PostInteraction>
            </Content>
          ))}
        </Container>
      </>
    );
};
export default memo(FeedPost);

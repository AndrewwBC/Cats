import React, { useEffect, useState } from 'react';
import { Container, ActionContainer, PutComent } from './style';
import { ImgContainer } from '../../HomePage/styles';
import Services, { UserRequirements } from '../../../api';

const UserPosts = () => {
  const [post, setPost] = useState<any>();
  const [comments, setComments] = useState<any>();
  const [comment, setComment] = useState('');
  let userCod = localStorage.getItem('usercod');

  useEffect(() => {
    Services.GetPosts(setPost);
    Services.GetComments(setComments);
  }, [comment]);

  function testeComent(Post_Cod: any) {
    console.log(Post_Cod);
    UserRequirements.PutComment(comment, Post_Cod, Number(userCod));
  }

  function testeLike(Post_Cod: any) {
    console.log(Post_Cod);
    UserRequirements.PutLikes(Post_Cod, Number(userCod));
  }
  console.log(post);
  console.log(comments);
  if (!post && !comments) return <div>oi</div>;
  else if (post && comments)
    return (
      <>
        <Container>
          <div>
            {post.map((item: any) => (
              <>
                <ImgContainer
                  width={380}
                  height={520}
                  style={{ objectFit: 'cover' }}
                  src={`http://localhost:3001/images/${item.Img}`}
                  alt="Image"
                />
                <ActionContainer>
                  <div>
                    <button onClick={(e: any) => testeLike(item.Post_Cod)}>
                      Like
                    </button>
                  </div>
                  <PutComent>
                    <div>
                      <span>Adicione um comentário</span>
                      <input
                        type="text"
                        name=""
                        id=""
                        onChange={({ target }) => setComment(target.value)}
                      />
                    </div>
                    <div>
                      <div>
                        <span>Comentários</span>
                        {comments.map((comment: any) =>
                          comment.Post_Cod === item.Post_Cod ? (
                            <div>{comment.Comment}</div>
                          ) : null,
                        )}
                      </div>
                      <button onClick={(e: any) => testeComent(item.Post_Cod)}>
                        Enviar
                      </button>
                    </div>
                  </PutComent>
                </ActionContainer>
              </>
            ))}
          </div>
        </Container>
      </>
    );
  else return <div>Oi</div>;
};

export default UserPosts;

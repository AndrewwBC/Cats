import React, { useEffect, useState } from 'react';
import {
  Container,
  ActionContainer,
  PutComent,
  LikeContainer,
  CommentContainer,
  ImgFeed,
  Heart,
} from './style';
import './styles.css';
import Services, { UserRequirements } from '../../../api';
import { Button } from '../../FormComponents/Button/style';

const UserPosts = () => {
  const [post, setPost] = useState<any>();
  const [comments, setComments] = useState<any>();
  const [likes, setLikes] = useState<any>();
  const [comment, setComment] = useState('');
  const [heart, setHeart] = useState<any>(false);
  //const [modal, setModal] = useState(false);

  let userCod = localStorage.getItem('usercod');

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    await Services.GetPosts(setPost);
    await Services.GetComments(setComments);
    await Services.GetLikes(setLikes);
  }

  console.log(post, comments, likes);

  // setInterval(() => {
  //   Services.GetComments(setComments);
  //   Services.GetLikes(setLikes);
  //   Services.GetPosts(setPost);
  // }, 2000);

  // function getOneComment(id: any) {
  //   Services.GetComments(setComment);
  // }

  function testeComent(Post_Cod: any) {
    console.log(Post_Cod);
    if (comment !== '') {
      UserRequirements.PutComment(comment, Post_Cod, Number(userCod));
    }
    setComment('');
    (document.getElementById(Post_Cod) as HTMLInputElement).value = '';
  }

  function testeLike(Post_Cod: any) {
    console.log(Post_Cod);
    UserRequirements.PutLikes(Post_Cod, Number(userCod));
  }
  let counter: any = 0;
  let counterComments: any = 0;

  if (!post && !comments && !likes) return <div>Load</div>;
  if (post && comments && likes)
    return (
      <>
        <Container>
          <div>
            {post.map((item: any) => (
              <div className="postContainer">
                <ImgFeed
                  width={420}
                  height={500}
                  src={`http://localhost:3001/images/${item.Img}`}
                  alt="Image"
                />{' '}
                <ActionContainer>
                  <div>
                    <p>Oi</p>
                  </div>
                  <CommentContainer>
                    {comments.map((cmt: any, index: any) =>
                      cmt.Post_Cod === item.Post_Cod ? (
                        <>
                          <img
                            key={cmt.Comment_Cod}
                            height={40}
                            width={40}
                            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
                            alt=""
                          />
                          <div
                            style={{
                              fontFamily: 'Poppins',
                              display: 'flex',
                            }}
                          >
                            <p>{cmt.Comment}</p>
                          </div>
                          <div>
                            <p>Horário</p>
                          </div>
                        </>
                      ) : null,
                    )}
                  </CommentContainer>
                  <div>
                    {(counterComments = '')}
                    {comments.map((commentCount: any) => {
                      if (commentCount.Post_Cod === item.Post_Cod) {
                        counterComments++;
                      } else {
                        return null;
                      }
                    })}
                    <p>Ver todos {counterComments} comentários </p>
                  </div>

                  <PutComent>
                    <div>
                      <input
                        className="inputComment"
                        type="text"
                        placeholder="Insira um comentário"
                        name={item.Post_Cod}
                        id={item.Post_Cod}
                        onChange={({ target }) => setComment(target.value)}
                      />
                    </div>
                    <div>
                      <button
                        className="sendComment"
                        onClick={(e: any) => testeComent(item.Post_Cod)}
                      >
                        Enviar
                      </button>
                    </div>
                  </PutComent>
                  <LikeContainer>
                    <div>
                      {(counter = '')}
                      {likes.map((like: any, index: any) => {
                        if (like.Post_Cod === item.Post_Cod) {
                          counter++;
                        } else {
                          return null;
                        }
                      })}
                      <p>{counter} Likes</p>
                    </div>
                    <div>
                      <p>Veja quem curtiu</p>
                    </div>
                    <Heart
                      onClick={(e: any) => testeLike(item.Post_Cod)}
                      onDoubleClick={() => setHeart(!heart)}
                      itemProp={heart}
                    >
                      Like
                    </Heart>
                  </LikeContainer>
                </ActionContainer>
              </div>
            ))}
          </div>
        </Container>
      </>
    );
  else return <div>Oi</div>;
};

export default UserPosts;

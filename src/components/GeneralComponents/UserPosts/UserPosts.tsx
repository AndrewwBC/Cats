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

const UserPosts = () => {
  const [post, setPost] = useState<any>();
  const [comments, setComments] = useState<any>();
  const [likes, setLikes] = useState<any>();
  const [comment, setComment] = useState('');
  const [heart, setHeart] = useState<any>(false);

  let userCod = localStorage.getItem('usercod');

  useEffect(() => {
    getInfo();
  }, []);

  async function getInfo() {
    const [posts, comments, likes] = await Promise.all([
      Services.GetPosts(setPost),
      Services.GetComments(setComments),
      Services.GetLikes(setLikes),
    ]);

    return { posts, comments, likes };
  }

  // function getOneComment(id: any) {
  //   Services.GetComments(setComment);
  // }

  setTimeout(() => {
    getInfo();
  }, 500);

  function testeComent(Post_Cod: any) {
    console.log(Post_Cod);
    if (comment !== '') {
      UserRequirements.PutComment(comment, Post_Cod, Number(userCod));
    }
    setComment('');
    (document.getElementById(Post_Cod) as HTMLInputElement).value = '';
  }

  function setLike(Post_Cod: any, typeofchange: any) {
    UserRequirements.PutLikes(Post_Cod, Number(userCod), typeofchange);
  }

  let counter: any = 0;
  let LikeFlag = false;
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
                        return counterComments++;
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
                    <Heart
                      onDoubleClick={(e: any) => setLike(item.Post_Cod, false)}
                      src="https://www.svgrepo.com/show/511016/heart-02.svg"
                    />

                    <Heart
                      onDoubleClick={(e: any) => setLike(item.Post_Cod, true)}
                      src="https://www.svgrepo.com/show/513311/heart.svg"
                    />

                    {/* {likes.map((like: any, index: any) =>
                      like.User_Cod === Number(userCod) &&
                      like.Post_Cod === item.Post_Cod ? (
                        <Heart
                          onDoubleClick={(e: any) =>
                            setLike(item.Post_Cod, true)
                          }
                          src="https://www.svgrepo.com/show/513311/heart.svg"
                        />
                      ) : (
                        <Heart
                          onDoubleClick={(e: any) =>
                            setLike(item.Post_Cod, false)
                          }
                          src="https://www.svgrepo.com/show/511016/heart-02.svg"
                        />
                      ),
                    )} */}
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

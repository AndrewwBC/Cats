import React, { useEffect, useState, memo } from 'react';
import Services from '../../../../api';
import { Container, EachComment, Img } from './styles';
import { ImgContainer } from '../../../Routes/HomePage/styles';

const Comments = (postCod: any) => {
  const [comments, setComments] = useState<any>(false);

  useEffect(() => {
    getComments();
  }, [postCod.postCod]);

  async function getComments() {
    await Services.GetComments(setComments, postCod.postCod);
  }
  console.log(comments);
  if (!comments) return <div></div>;
  if (comments)
    return (
      <Container>
        {comments.map((item: any) => (
          <EachComment>
            <div>
              <p>pedrinho123</p>
            </div>
            <div>
              <p>{item.Comment}</p>
            </div>
          </EachComment>
        ))}
      </Container>
    );
  else return <div>Insira um comentário</div>;
};

export default memo(Comments);

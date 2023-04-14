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
            <Img
              height={32}
              width={32}
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
            />
            <div>
              <p>{item.Comment}</p>
            </div>
            <div>
              <p>Horario</p>
            </div>
          </EachComment>
        ))}
      </Container>
    );
  else return <div>Oi</div>;
};

export default memo(Comments);

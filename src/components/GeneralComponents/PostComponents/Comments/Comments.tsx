import React, { useEffect, useState, memo, useCallback } from 'react';
import Services from '../../../../api';
import { Container, EachComment, Img } from './styles';

const Comments = (postCod: any) => {
  const [comments, setComments] = useState<boolean | any>(false);

  useCallback(() => {
    
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
          <EachComment key={item.Comment_Cod}>
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

import React, {useState} from 'react';
import { Content, Icon, Icons } from './styles';
import { FaRegHeart, FaHeart, FaRegComment, FaRegPaperPlane } from 'react-icons/fa'

const IconsData = () => {
  const [like, setLike] = useState(false);

  return (
    <Content>
      <Icons>   
        {like?  <FaHeart style={{cursor: 'pointer'}}  onDoubleClick={() => setLike(!like)} size={22} color='red'/>:  <FaRegHeart style={{cursor: 'pointer'}}  onDoubleClick={() => setLike(!like)} size={20}/> }
        <FaRegComment style={{cursor: 'pointer'}}   size={22}/>
        <FaRegPaperPlane style={{cursor: 'pointer'}}   size={22}/>
      </Icons>
      <div>
        <p style={{ pointerEvents: 'none' }}>20/03/2023</p>
      </div>
    </Content>
  );
};

export default IconsData;

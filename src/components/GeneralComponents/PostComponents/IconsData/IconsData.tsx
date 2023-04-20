import React from 'react';
import { Content, Icon, Icons } from './styles';

const IconsData = () => {
  const Links = [
    'https://www.svgrepo.com/show/509131/heart.svg',
    'https://www.svgrepo.com/show/473857/comment.svg',
    'https://www.svgrepo.com/show/509186/paper-plane.svg',
  ];

  return (
    <Content>
      <Icons>
        {Links.map((item, index) => (
          <Icon key={index} src={item} />
        ))}
      </Icons>
      <div>
        <p style={{ color: '#222' }}>20/03/2023</p>
      </div>
    </Content>
  );
};

export default IconsData;

import React from 'react';

import { Tag } from 'antd';

const Labels = ({ labels }) => {
  return (
    <div style={{textAlign:'left'}}>
      {labels.map((label) => (
        <Tag key={label.id} color={`#${label.color}`}>
          {label.name}
        </Tag>
      ))}
    </div>
  );
};

export default Labels;

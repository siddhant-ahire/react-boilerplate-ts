import React from 'react';

type IconProps = {
  name: string;
};

const Icon: React.FC<IconProps> = ({ name }) => (
  <i className={`icon-${name}`} />
);

export default Icon;

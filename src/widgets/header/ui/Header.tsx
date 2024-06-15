import * as React from 'react';
import { Layout } from 'antd';
import { Logo } from 'src/entities/logo';

const { Header: AntHeader } = Layout

interface IHeaderProps {
}

export const Header: React.FC<IHeaderProps> = (props) => {
  return (
    <>
      <AntHeader>
        <Logo />
      </AntHeader>
    </>
  )
};

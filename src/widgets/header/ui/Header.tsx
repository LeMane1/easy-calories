import * as React from 'react';
import { Layout } from 'antd';
import { Logo } from 'src/entities/logo';

const { Header: AntHeader } = Layout

export const Header: React.FC = () => {
  return (
    <>
      <AntHeader>
        <Logo />
      </AntHeader>
    </>
  )
};

import * as React from 'react';
import { BsFire } from "react-icons/bs";
import { css } from '@emotion/react';
import { Typography, Space } from 'antd';

const { Title } = Typography

interface ILogoProps {
}

export const Logo: React.FC<ILogoProps> = (props) => {
  return (
    <>
      <Space>
        <BsFire
          css={css`
            font-size: 24px;
            color: #1db004;
        `} />
        <Title
          level={4}
          css={css`
            background: linear-gradient(90deg, rgba(29,176,4,1) 0%, rgba(93,236,11,1) 100%);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        `}>
          Easy Calories
        </Title>
      </Space>
    </>
  )
};

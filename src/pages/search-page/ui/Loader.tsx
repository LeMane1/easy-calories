import * as React from 'react';
import { Spin, Flex } from 'antd';
import { css } from '@emotion/react';

export const Loader: React.FC = () => {
  return (
    <>
      <Flex
        justify='center'
        css={css`
          width: 100%;
        `}
      >
        <Spin size="large" />
      </Flex>
    </>
  )
};

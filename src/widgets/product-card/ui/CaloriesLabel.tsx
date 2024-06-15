import * as React from 'react';
import { Typography } from 'antd';
import { css } from '@emotion/react';

const { Title } = Typography

interface ICaloriesLabelProps {
  caloriesCount: number;
}

export const CaloriesLabel: React.FC<ICaloriesLabelProps> = ({ caloriesCount }) => {
  return (
    <>
      <div css={css`
        background-color: #4e4e4e;
        border-radius: 8px;
        padding: 4px 12px;
      `}>
        <Title level={3} css={css`
          color: white !important;
        `}>
          {caloriesCount}
        </Title>
      </div>
    </>
  )
};

import * as React from 'react';
import type { IActivity } from '../model/types';
import { css } from '@emotion/react';
import { Flex, Typography } from 'antd';
import { getActivityDuration } from '../lib/getActivityDuration'

const { Title } = Typography

interface IBurnActivityProps {
  activity: IActivity;
  caloriesSum: string;
}

export const BurnActivity: React.FC<IBurnActivityProps> = ({ activity, caloriesSum }) => {
  return (
    <>
      <Flex align='center'>
        <img
          src={activity.image}
          css={
            css`
            width: 70px;
            height: 70px;
            margin-right: 16px;
          `
          }
        />

        <div>
          <Title
            level={5}
            css={css`
              margin-bottom: -6px !important;
              opacity: 60%;
            `}
          >
            {activity.title}
          </Title>
          <Title level={4}>
            {`${getActivityDuration(caloriesSum, activity.caloriesPerMinuteConsumption)} min`}
          </Title>
        </div>
      </Flex>
    </>
  )
};

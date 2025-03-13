import { css } from '@emotion/react';
import { Flex, List, Space, Tooltip } from 'antd';
import type { INutritionListItem } from '../models/types';
import { IoWarningOutline } from "react-icons/io5";

interface INutritionListItemProps {
  listItem: INutritionListItem;
}

export const NutritionListItem = ({ listItem }: INutritionListItemProps) => {
  return (
    <>
      <List.Item>
        <Flex
          align='center'
          justify='space-between'
          css={css`
                width: 100%;
        `}>
          <span
            css={css`
              font-size: 14px;
              opacity: 60%;
              font-weight: 500;
            `}
          >
            {listItem.title}
          </span>
          <Space align='center' size={4}>
            {listItem.value > listItem.dangerLimit &&
              <Tooltip
                title={listItem.excessDescription}
              >
                <IoWarningOutline
                  css={css`
                  font-size: 20px;
                  color: #cf3030;
                `}
                />
              </Tooltip>
            }
            <span
              css={css`
                font-weight: 600;
            `}>
              {`${listItem.value} ${listItem.weightUnit}`}
            </span>
          </Space>
        </Flex>
      </List.Item>
    </>
  )
};

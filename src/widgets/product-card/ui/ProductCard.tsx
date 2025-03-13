import * as React from 'react';
import { IProduct } from 'src/shared/api';
import { css } from '@emotion/react';
import { Typography, Flex, List, Layout } from 'antd';
import { getNutritionValues } from '../lib/getNutritionValues';
import { getTitle } from 'src/shared/lib';
import { NutritionListItem } from './NutritionListItem';
import { CaloriesLabel } from './CaloriesLabel';

const { Title } = Typography

const cardStyle = css`
  border-radius: 8px;
  padding: 16px;
`

interface IProductCardProps {
  product: IProduct;
  className?: string;
}

export const ProductCard: React.FC<IProductCardProps> = ({ product, className }) => {
  console.log(product)
    return (
    <Layout css={cardStyle} className={className}>
      <Flex justify='space-between' align='center'>
        <Title
          level={3}
          css={css`
            color: #4f4f4f !important;
        `}>
          {getTitle(product.name)}
        </Title>
        <CaloriesLabel caloriesCount={product.calories} />
      </Flex>

      <List
        header={
          <Flex align='center' justify='space-between'>
            <Title level={5} css={css`
              opacity: 40%;
            `}>
              Nutrition values
            </Title>
            <Title css={css`
              font-size: 12px !important;
              opacity: 40%;
            `}>
              {`Per ${product.serving_size_g} gramm`}
            </Title>
          </Flex>

        }
        dataSource={getNutritionValues(product)}
        renderItem={(item) => (
          <NutritionListItem listItem={item} />
        )}
      />
    </Layout>
  )
};

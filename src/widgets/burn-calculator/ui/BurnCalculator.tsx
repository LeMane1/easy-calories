import { useEffect } from 'react';
import { css } from '@emotion/react';
import { Typography, Layout, Space } from 'antd';
import { BurnActivity } from './BurnActivity';
import { activities } from '../model/activities';
import type { IProduct } from 'src/shared/api';
import { BurnWeightSelector } from './BurnWeightSelector';
import { useGetCaloriesSum } from '../lib/useGetCaloriesSum';
import { useAppDispatch } from 'src/app';
import { addProduct, removeProducts } from '../model/computedProductsSlice';
import type { CaloriesSum } from '../model/types';

const { Title, Text } = Typography

interface IBurnCalulatorProps {
  products: IProduct[];
  className?: string;
}

export const BurnCalculator: React.FC<IBurnCalulatorProps> = ({ products, className }) => {
  const dispatch = useAppDispatch()
  const caloriesCount: CaloriesSum = useGetCaloriesSum()

  useEffect(() => {
    if (products && products.length) {
      dispatch(removeProducts())
      for (let product of products) {
        dispatch(addProduct({
          name: product.name,
          caloriesPerDefaultWeight: product.calories,
          defaultWeight: product.serving_size_g,
          currentWeight: product.serving_size_g,
          currentCalories: product.calories
        }))
      }
    }
  }, [products])

  return (
    <Layout
      className={className}
      css={css`
        border-radius: 8px;
        padding: 16px;
        width: 100%;
        height: fit-content;
        padding-bottom: 32px !important;
    `}>
      <Title
        level={2}
        css={css`
          margin-bottom: 4px !important;
        `}
      >
        {`${caloriesCount.value}${caloriesCount.isOverflowed ? '+' : ''} kcal`}
      </Title>

      <Space
        direction='vertical'
        size={4}
        css={css`
          margin-bottom: 12px;
        `}
      >
        {
          products && products.map(product => (
            <BurnWeightSelector
              key={product.name}
              productName={product.name}
              productWeight={product.serving_size_g}
            />
          ))
        }
      </Space>

      <Text
        css={css`
          margin-bottom: 8px !important;
          font-weight: 500;
          opacity: 50%;
          line-height: normal;
          font-size: 12px;
        `}
      >
        You have to burn this count of calories by spending a few minutes on the following activities
      </Text>

      <Space direction='vertical' size={12}>
        {
          activities.map(activity => (
            <BurnActivity activity={activity} caloriesSum={caloriesCount.value} />
          ))
        }
      </Space>
    </Layout>
  )
};

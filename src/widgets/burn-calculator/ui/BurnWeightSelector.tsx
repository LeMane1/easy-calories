import { css } from '@emotion/react';
import { InputNumber, Typography } from 'antd'
import { useAppDispatch } from 'src/app';
import { changeProductWeight } from '../model/computedProductsSlice';
import { getTitle } from 'src/shared/lib';

const { Title } = Typography

interface IBurnWeightSelectorProps {
  productName: string;
  productWeight: number;
}

export const BurnWeightSelector: React.FC<IBurnWeightSelectorProps> = (
  {
    productName,
    productWeight
  }
) => {
  const dispatch = useAppDispatch()

  const handleOnProductWeightChanged = (name: string, value: number | null) => {
    if (value) {
      dispatch(changeProductWeight({
        name: name,
        weight: value
      }))
    }
  }

  return (
    <div css={css`
      width: 100%;
    `}>
      <Title
        level={5}
        css={css`
          font-size: 14px !important;
          opacity: 60%;
          font-weight: 500;
      `}>
        {getTitle(productName)}
      </Title>

      <InputNumber
        size='large'
        defaultValue={productWeight}
        controls={false}
        type='number'
        min={1}
        max={10000000}
        onChange={(value) => handleOnProductWeightChanged(productName, value)}
        css={css`
          width: 100%;
          &::after {
            content: 'g';
            position: absolute;
            font-size: 14px;
            font-weight: 500;
            opacity: 40%;
            right: 12px;
            top: 8px;
          }
        `}
      />
    </div>
  )
};

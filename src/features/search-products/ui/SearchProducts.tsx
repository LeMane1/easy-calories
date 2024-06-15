import { Input, Typography } from 'antd'
import type { SearchProps } from 'antd/es/input/Search';
import { useAppDispatch } from 'src/app';
import { changeSearchQuery } from '../model/searchSlice';

const { Title } = Typography
import { css } from '@emotion/react';

const { Search } = Input

interface ISearchProductsProps {
  className?: string;
}

export const SearchProducts: React.FC<ISearchProductsProps> = ({ className }) => {
  const dispatch = useAppDispatch()

  const handleOnSearch: SearchProps['onSearch'] = (value) => {
    dispatch(changeSearchQuery(value))
  }

  return (
    <div className={className}>
      <Search
        placeholder="Type any products or ingredients"
        allowClear
        enterButton="Search"
        size="large"
        onSearch={handleOnSearch}
      />

      {/* <Title level={5} css={
        css`
          font-size: 12px !important;
          font-weight: 500 !important;
          opacity: 50%;
          margin-top: 4px;
        `
      }>
        You can search some products together. For example fried potato with onion and mushrooms
      </Title> */}
    </div>
  )
};

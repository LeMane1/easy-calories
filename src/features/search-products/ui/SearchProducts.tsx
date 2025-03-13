import { Input } from 'antd'
import type { SearchProps } from 'antd/es/input/Search';
import { useAppDispatch } from 'src/app';
import { changeSearchQuery } from '../model/searchSlice';

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
    </div>
  )
};

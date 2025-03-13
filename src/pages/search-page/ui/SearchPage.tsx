import { SearchProducts } from 'src/features/search-products';
import { useEffect } from 'react';
import { useLazyGetProductsInfoQuery } from 'src/shared/api'
import { useAppSelector } from 'src/app';
import { Loader } from './Loader';
import { Empty, Flex, Space, Col, Row, Grid } from 'antd'
import { ProductCard } from 'src/widgets/product-card';
import { IProduct } from 'src/shared/api';
import { css } from '@emotion/react';
import { BurnCalculator } from 'src/widgets/burn-calculator';

const { useBreakpoint } = Grid

export const SearchPage: React.FC = () => {
  const [refetch, { data, isLoading, isFetching }] = useLazyGetProductsInfoQuery({})
  const { searchQuery } = useAppSelector(state => state.searchReducer)
  const { md } = useBreakpoint()

  useEffect(() => {
    if (searchQuery) {
      refetch(searchQuery)
    }
  }, [searchQuery])

  return (
    <>
      <SearchProducts css={css`
        margin-bottom: 32px;
      `} />

      {
        isLoading || isFetching ? <Loader />
          :
          <Flex
            align='center'
            justify='center'
            wrap
            css={css`
              width: 100%;
            `}
          >
            {
              data && data.length > 0 ?
                <Row css={css`
                  width: 100%;
                `}>
                  <Col xs={24} sm={24} md={16} lg={16} xl={16}>
                    <Space direction='vertical' size={16} css={css`
                      width: 100%;
                    `}>
                      {
                        data.map((product: IProduct) => (
                          <ProductCard
                            product={product}
                            key={product.name}
                          />
                        ))
                      }
                    </Space>
                  </Col>

                  <Col xs={24} sm={24} md={8} lg={8} xl={8} css={css`
                    padding-left: ${md ? '16px' : '0'};
                  `}>
                    <BurnCalculator products={data} />
                  </Col>
                </Row>
                : <Empty />
            }
          </Flex>
      }
    </>
  )
};

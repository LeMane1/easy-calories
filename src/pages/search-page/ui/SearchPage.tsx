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

interface ISearchPageProps {
}

// const test = {
//   calories: 34,
//   carbohydrates_total_g: 8.3,
//   cholesterol_mg: 0,
//   fat_saturated_g: 0,
//   fat_total_g: 0.2,
//   fiber_g: 3,
//   name: "carrot",
//   potassium_mg: 30,
//   protein_g: 0.8,
//   serving_size_g: 100,
//   sodium_mg: 57,
//   sugar_g: 3.4
// }
// const test1 = {
//   calories: 34,
//   carbohydrates_total_g: 8.3,
//   cholesterol_mg: 0,
//   fat_saturated_g: 0,
//   fat_total_g: 0.2,
//   fiber_g: 3,
//   name: "potato",
//   potassium_mg: 30,
//   protein_g: 0.8,
//   serving_size_g: 100,
//   sodium_mg: 57,
//   sugar_g: 3.4
// }
// const testData = [test, test1]

export const SearchPage: React.FC<ISearchPageProps> = (props) => {
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

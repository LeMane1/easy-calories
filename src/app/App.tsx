import './styles/index.css'
import { useContainerWidth } from 'src/shared/lib'
import { css } from '@emotion/react'
import { Header } from 'src/widgets/header'
import { SearchPage } from 'src/pages/search-page'

export const App = () => {
  const containerWidth = useContainerWidth()

  return (
    <div css={css`
      margin: 0 auto;
      width: ${containerWidth};
      padding: 8px 16px;
    `}>
      <Header />
      <SearchPage />
    </div>
  )
}

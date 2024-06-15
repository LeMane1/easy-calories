import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from 'src/app'
import { setupStore } from 'src/app';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd'
import { themeData } from 'src/app';

const store = setupStore()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={themeData}>
      <Provider store={store}>
        <App />
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
)

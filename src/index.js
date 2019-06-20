import React from 'react';
import ReactDOM from 'react-dom';

import FastClick from 'fastclick'

import Route from './router'
//React-Redux是Redux的官方React绑定库。它能够使你的React组件从Redux store中读取数据，并且向store分发actions以更新数据
import { Provider } from 'react-redux' 

import { AppContainer } from 'react-hot-loader'

import store from '@/store'

import * as serviceWorker from './serviceWorker';
import './config/rem'
import './style/base.scss'

FastClick.attach(document.body)

const render = Component => {
  ReactDOM.render(
    // React-Redux 提供<Provider/>组件，能够使你的整个app访问到Redux store中的数据
    <Provider store={store}>
      <AppContainer>
        <Component />
      </AppContainer>
    </Provider>,
    document.getElementById('root')
  )
}

render(Route)


serviceWorker.unregister();

// @flow

import React from 'react'
import { APP_NAME } from '../shared/config'
import HomePage from './component/page/home'

const App = () =>
  <div>
    <h1>{APP_NAME}</h1>
    <HomePage />
  </div>

export default App

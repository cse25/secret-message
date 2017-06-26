// @flow

import React from 'react'
import MessageForm from '../message-form'

const HomePage = () =>
  <MessageForm onSubmit={() => console.log('submit')} />

export default HomePage

// @flow

import React from 'react'
import { Field, reduxForm } from 'redux-form'

type Props = {
  handleSubmit: Function
}

const MessageForm = ({ handleSubmit }: Props) =>
  <form onSubmit={handleSubmit} >
    <div>
      <label htmlFor="message">Message</label>
      <Field name="message" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="question">Question</label>
      <Field name="question" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="answer">Answer</label>
      <Field name="answer" component="input" type="text" />
    </div>
    <button type="submit">Submit</button>
  </form>

export default reduxForm({ form: 'message' })(MessageForm)

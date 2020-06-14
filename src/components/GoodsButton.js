import React from "react";
import { withRouter } from 'react-router-dom'
// this also works with react-router-native

export const Button2 = withRouter(({ history }) => (
  <button
    type='button'
    onClick={() => { history.push('/goods') }}
  >
    Click Me!
  </button>
))
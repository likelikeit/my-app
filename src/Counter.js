import { useCountDispatch, CountDispatchContext } from './Context'
import React from 'react'
function Counter({ dispatch }) {
  console.log(dispatch,'render1')
  // const context = useCountDispatch(CountDispatchContext);
  // console.log(context,'context')
  return (
    <button onClick={() => { dispatch() }}>点击</button>
  )
}

export default (Counter)
import React from 'react';
import { useCountState, CountStateContext } from './Context'

function CountState({value}) {
  console.log('render2')

  return (
    <>
      <button >{value}</button>
    </>
  )
}

export default (CountState);
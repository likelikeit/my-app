
import React, { useContext } from 'react';
import { Context } from './index'
function TestComponent() {
  // const value = useContext(Context);
  // console.log(value,'value')
  console.log('rerener')
  
  return (<>
    <button >{'测试'}</button>
    {/* {props.render()} */}
  </>)

}

export default React.memo(TestComponent);
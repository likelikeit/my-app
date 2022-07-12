import React, { createContext, useContext, useReducer, useRef, useState } from 'react'
import ReactDOM from 'react-dom'
import Tabs from './Tab';
import TestComponent from './Demo'
import { CountStateContext, CountDispatchContext } from './Context';
import Counter from './Counter';
import CounterState from './CounterState'
const { TabPane } = Tabs;

// export const Context = createContext(null)

// export function useFunction(fn) {
//   const { current } = React.useRef({ fn, result: undefined });
//   current.fn = fn;
//   if (!current.result) {
//     current.result = ((...args) => current.fn.call(null, ...args));
//   }
//   return current.result;
// }


function CountProvider({ children }) {
  const [value, dispatch] = useState(1);
  return (
    <CountDispatchContext.Provider value={dispatch}>
      <CountStateContext.Provider value={value}>
        {children}
      </CountStateContext.Provider>
    </CountDispatchContext.Provider>
  )
}


// function RenderHighlight({ str, search }) {
//   if (!search) return str;
//   const reg = new RegExp(search, 'ig');
//   const splitstrs = str.split(reg);
//   const matchstrs = str.match(reg);
//   console.log(splitstrs, matchstrs,)
//   return (
//     <React.Fragment>
//       {
//         matchstrs.map((_, index) => {
//           return (
//             <React.Fragment key={index}>
//               <span>{splitstrs[index]}</span>
//               <span style={{ color: 'red' }}>{matchstrs[index]}</span>
//             </React.Fragment>
//           )
//         })
//       }
//       <span>
//         {splitstrs[splitstrs.length - 1] || ''}
//       </span>
//     </React.Fragment>
//   )
// };

function ParentComponent() {
  const [value, dispatch] = useState(1);
  const fn2 = () => { dispatch(prev => prev + 1) }
  // const [value, render] = useReducer(() => ({}))
  // const ref = useRef('test');
  return (
    <>
      {/* <CountProvider> */}
      <Counter dispatch={fn2} />
      <CounterState value={value} />
      {/* </CountProvider> */}

      {/* <button onClick={render}>{'oops..'}</button>
      <Tabs ref={ref}>
        <TabPane />
      </Tabs> */}
    </>

  )
}





ReactDOM.render(<ParentComponent />, document.getElementById('root'));

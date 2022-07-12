// src/count-context.js
import React from "react";

export const CountStateContext = React.createContext(undefined)
export const CountDispatchContext = React.createContext(undefined)

export function useCountState() {
  // eslint-disable-next-line no-undef
  const context = React.useContext(CountStateContext);

  if (context === undefined) {
    throw new Error('必须在CountProvider内使用useCountState');
  }

  return context;
}

export function useCountDispatch() {
  const context = React.useContext(CountDispatchContext);

  if (context === undefined) {
    throw new Error('必须在CountProvider内使用useCountDispatch');
  }

  return context;
}

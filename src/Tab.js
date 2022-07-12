import React from 'react';

function Tabs({ children }, ref, aa) {
  console.log(ref, 'ref', aa)
  return <>
    this is tabs
    {children}
  </>
}
export function TabPane() {
  return <>
    this is sub tabPane
  </>
}

const ForwardTab = React.forwardRef(Tabs);

ForwardTab.TabPane = TabPane;
export default ForwardTab
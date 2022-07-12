 import React from "react"
 
 function Child({props}){
  return (
    <div>
      this is child
    </div>
  )
}

export default React.memo(Child)
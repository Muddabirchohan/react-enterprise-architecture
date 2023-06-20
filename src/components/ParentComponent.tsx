import React from 'react'
import ChildComponent1 from './ChildComponent1'

export default function ParentComponent() {

  React.useEffect(()=>{
    console.log("parent")
  },[])


  return (
    <div><ChildComponent1/>
    b</div>
  )
}

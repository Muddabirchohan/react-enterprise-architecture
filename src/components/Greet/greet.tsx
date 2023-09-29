import React from 'react'

interface IGreet {
    name?: string
}


function Greet(props: IGreet) {
  return (
    <div>
      hello {props.name}
    </div>
  )
}

export default Greet

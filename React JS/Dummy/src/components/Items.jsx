import React from 'react'

const Items = (props) => {
  return (
    <>
    <h1>{props.description}</h1>
    <h4>{props.title}</h4>
    </>
  )
}

export default Items

//npx json-server data.json --port 3000
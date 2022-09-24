import React from 'react'
import Service from './Service'

function CarData() {
  const Data = () => {
    let resp = Service.getCar();
    console.log(resp)
  }
  return (
    <div>CarData<button onClick={Data}>Click</button></div>
  )
}

export default CarData
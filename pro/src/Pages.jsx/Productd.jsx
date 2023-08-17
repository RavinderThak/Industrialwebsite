import React from 'react'
import { useLocation } from 'react-router-dom'

export default function Productd() {
  const location=useLocation();
  return (
    <>
      <img src={location.state.image} alt="" />
      <h1>{location.state.title}</h1>
      <p>{location.state.Brand}</p>
      <p>{location.state.price}$</p>
    </>
  )
}

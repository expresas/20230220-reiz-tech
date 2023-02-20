import React from 'react'

const SingleCountry = ({country}) => {
  return (
    <div className='singleCountry'>
      <div>{country.name}</div>
      <div>{country.region}</div>
      <div>{country.area}</div>
    </div>
  )
}

export default SingleCountry
import React from 'react'

const SingleCountry = ({country}) => {
  return (
    <div className='singleCountry'>
      <div className='bold'>{country.name}</div>
      <div>Region: {country.region}</div>
      <div>Area: {country.area} sq km</div>
    </div>
  )
}

export default SingleCountry
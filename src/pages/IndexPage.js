import { useEffect, useState } from 'react'
import SingleCountry from '../components/SingleCountry'

const IndexPage = () => {

  const [getAllData, setAllData] = useState([])
  
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then(res => res.json())
      .then(data => {
        setAllData(data)
        // console.log('test')
        // console.log(data)
      })
    
  }, [])
    
  return (
    <div className='container'>
      <h1>List of countries</h1>
      <div>Sort list: <button>Asc</button> / <button>Desc</button></div>
      {getAllData.map(x => <SingleCountry country={x} key={x.name}/>)}
    </div>
  )
}

export default IndexPage
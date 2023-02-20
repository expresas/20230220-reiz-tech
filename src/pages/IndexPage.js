import { useEffect, useState } from 'react'
import SingleCountry from '../components/SingleCountry'

const IndexPage = () => {

  const [getAllData, setAllData] = useState([])
  const [getShowData, setShowData] = useState([])
  const [getSorting, setSorting] = useState(true)
  
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then(res => res.json())
      .then(data => {
        setAllData(data)
        setShowData(data)
        // console.log('test')
        // console.log(data)
      })
    
  }, [])

  function sortingAsc() {
    console.log('sort Asc')
    let tempArr = getShowData
    tempArr.sort((a,b)=> a.name.localeCompare(b.name))
    setShowData([...tempArr])
    setSorting(true)
  }
  
  function sortingDesc() {
    console.log('sort Desc')
    let tempArr = getShowData
    tempArr.sort((a,b)=> b.name.localeCompare(a.name))
    setShowData([...tempArr])
    setSorting(false)
  }

  function filterByRegion() {
    console.log('filter by region')
  }
    
  return (
    <div className='container'>
      <h1>List of countries</h1>
      <div>Sort list: <button onClick={sortingAsc} style={{backgroundColor: getSorting ? "green" : ""}}>Asc</button> / <button onClick={sortingDesc} style={{backgroundColor: getSorting ? "" : "green"}}>Desc</button></div>
      <div>Filter countries: <button>Smaller than Lithuania by area</button> / <button>In “Oceania” region</button></div>
      {getShowData.map(x => <SingleCountry country={x} key={x.name}/>)}
      {/* {getAllData.map(x => <SingleCountry country={x} key={x.name}/>)} */}
    </div>
  )
}

export default IndexPage
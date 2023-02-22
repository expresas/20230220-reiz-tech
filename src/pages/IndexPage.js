import { useEffect, useState } from 'react'
import SingleCountry from '../components/SingleCountry'

const IndexPage = () => {

  // const [getAllData, setAllData] = useState([])
  const [getShowData, setShowData] = useState([])
  const [getSorting, setSorting] = useState(true)
  const [selectedFilter, setSelectedFilter] = useState()
  
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then(res => res.json())
      .then(data => {
        // setAllData(data)
        setShowData(data)
        // console.log('test')
        console.log(data)
      })
    
  }, [])

  function sortingAsc() {
    // console.log('sort Asc')
    let tempArr = getShowData
    tempArr.sort((a,b)=> a.name.localeCompare(b.name))
    setShowData([...tempArr])
    setSorting(true)
  }
  
  function sortingDesc() {
    // console.log('sort Desc')
    let tempArr = getShowData
    tempArr.sort((a,b)=> b.name.localeCompare(a.name))
    setShowData([...tempArr])
    setSorting(false)
  }

  function handleSelectedFilter(event) {
    setSelectedFilter(event.target.value)
    // console.log('eventas:', event.target.value)
  }

  return (
    <div className='container'>
      <h1>List of countries</h1>
      <div>Sort list: <button onClick={sortingAsc} style={{backgroundColor: getSorting ? "green" : ""}}>Asc</button> / <button onClick={sortingDesc} style={{backgroundColor: getSorting ? "" : "green"}}>Desc</button></div>
      <div>Filter countries: 
        <div>
          <select name="filter-list" id="filter-list" onChange={handleSelectedFilter}>
            <option value="">Show all</option>
            <option value="Lithuania">That are smaller than Lithuania by area</option>
            <option value="Oceania">That are in “Oceania” region</option>
          </select>
        </div>
      </div>
      {selectedFilter ? '' : getShowData.map(x => <SingleCountry country={x} key={x.name}/>)}
      {selectedFilter === 'Oceania' ? getShowData.filter((item) => item.region === selectedFilter).map(x => <SingleCountry country={x} key={x.name}/>) : ''}
      {selectedFilter === 'Lithuania' ? getShowData.filter((item) => item.area < 65300).map(x => <SingleCountry country={x} key={x.name}/>) : ''}
    </div>
  )
}

export default IndexPage
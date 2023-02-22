import { useEffect, useState } from 'react'
import Pagination from '../components/Pagination'
import SingleCountry from '../components/SingleCountry'

const IndexPage = () => {

  const [getAllData, setAllData] = useState([])
  const [getShowData, setShowData] = useState([])
  const [getSorting, setSorting] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const postsPerPage = 20
  
  useEffect(() => {
    fetch("https://restcountries.com/v2/all?fields=name,region,area")
      .then(res => res.json())
      .then(data => {
        setAllData(data)
        setShowData(data)
      })
  }, [])

  function sortingAsc() {
    const tempArr = getShowData.sort((a,b)=> a.name.localeCompare(b.name))
    setShowData([...tempArr])
    setSorting(1)
    setCurrentPage(1)
  }
  
  function sortingDesc() {
    const tempArr = getShowData.sort((a,b)=> b.name.localeCompare(a.name))
    setShowData([...tempArr])
    setSorting(2)
    setCurrentPage(1)
  }

  function handleSelectedFilter(event) {
    if (event.target.value === 'Oceania') {
      const tempArr = getAllData.filter((item) => item.region === event.target.value)
      setShowData([...tempArr])
    }
    if (event.target.value === 'Lithuania') {
      const tempArr = getAllData.filter((item) => item.area < 65300)
      setShowData([...tempArr])
    }
    if (!event.target.value) {
      setShowData(getAllData)
    }
    setSorting(false)
    setCurrentPage(1)
  }

  const lastPostIndex = currentPage * postsPerPage
  const firstPostIndex = lastPostIndex - postsPerPage
  const currentPosts = getShowData.slice(firstPostIndex, lastPostIndex)

  return (
    <div className='container'>
      <h1>List of countries</h1>
      <div className='d-flex space-btw'>
        <div>Filter countries: 
          <select name="filter-list" id="filter-list" onChange={handleSelectedFilter} style={{marginLeft: '10px'}}>
            <option value="">Show all</option>
            <option value="Lithuania">That are smaller than Lithuania by area</option>
            <option value="Oceania">That are in “Oceania” region</option>
          </select>
        </div>
        <div>Sort list: <button onClick={sortingAsc} style={{backgroundColor: getSorting === 1 ? "rgb(143,255,143)" : ""}}>Asc</button> / <button onClick={sortingDesc} style={{backgroundColor: getSorting === 2 ? "rgb(143,255,143)" : ""}}>Desc</button></div>
      </div>
      {currentPosts.map(x => <SingleCountry country={x} key={x.name}/>)}
      <Pagination totalPosts={getShowData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  )
}

export default IndexPage
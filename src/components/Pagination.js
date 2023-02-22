import React from 'react'

const Pagination = ({totalPosts, postsPerPage, setCurrentPage, currentPage}) => {

  let pages = []
  for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pages.push(i)
  }

  return (
    <div className='d-flex j-center'>
      Pages: {pages.map((page, index) => <button key={index} onClick={() => setCurrentPage(page)} style={{margin: '0px 5px 0px 5px'}} className={page === currentPage ? 'button' : ''}>{page}</button>)}
    </div>
  )
}

export default Pagination
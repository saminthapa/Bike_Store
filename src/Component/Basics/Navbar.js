import React from 'react'

const Navbar = ({filterItem, listList }) => {
  return (
<>
<h1 className='title'>Bike_Store</h1>
<nav className="navbar">
      <div className="btn-group">
        {
          listList.map((curElem)=>{
            return(
<button className="btn-group__item" onClick={()=> filterItem(curElem)}>{curElem}</button>
            )
          })
        }
            
       
      </div>

    </nav>
</>
  )
}

export default Navbar
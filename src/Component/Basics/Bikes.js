import React, { useState } from 'react'
import "./Style.css";
import List from './ListApi';
import Listcard from './Listcard';
import Navbar from './Navbar';


const uniqueList =[
  ...new Set (
    List.map((curElem) => {
      return curElem.category
    })
  ), "All",
]


const Bikes = () => {
    const [listData, setlistData] = useState(List);
    const [listList, setList] = useState(uniqueList)

    const filterItem = (category) => {
if(category==="All"){
  setlistData(List)
  return
}

      const updateList = List.filter((curElem) => {
        return  curElem.category ===category
      })
      setlistData(updateList)
    }

  return (
    <>
    <Navbar filterItem={filterItem} listList={listList}/>
    < Listcard listData={listData}/>
    </>
  )
}

export default Bikes
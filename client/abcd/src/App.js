import React, { useState } from "react";
import Searchbar from "./components/Searchbar";
import PartsDataTable from "./components/PartsDataTable";
import axios from 'axios'

const App = () => {
  const [partsData, setPartsData] = useState([])

  const fetchPartsData = async (searchKey) =>{
    try {
      const response = await axios.get('http://localhost:8080/',{ params: { key: searchKey }, })
      setPartsData(response.data)
    }catch (error){
      console.error('Error fetching parts data:', error)
    }
  }

  return(
    <div>
      
      <Searchbar onSearch={fetchPartsData}/>
      < PartsDataTable data={partsData} />
    </div>
  )
}

export default App;

import React, {useState} from "react";
import {Input, Button} from 'antd'

const Searchbar = ({ onSearch })=>{
    const [searchKey, setSearchKey] = useState('')

    const handleSearch =()=> {
        onSearch(searchKey)
    }

    return (
        <div>
            <Input 
                placeholder="Enter Part Number"
                value={searchKey}
                onChange={(e) => setSearchKey(e.target.value) }
            />

            <Button type="primary" onClick={handleSearch} >Search</Button>

        </div>
    )

}

export default Searchbar
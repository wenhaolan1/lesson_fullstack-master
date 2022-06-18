import { useState, useEffect } from 'react'
import axios from 'axios'
import Address from './Address'
function App() {
  const [address, setAddress] = useState([])
  // const [showDialog, setShowDialog] = useState(false)

  useEffect(function() {
    async function getUserAddress() {
      const {data} = await axios.get('https://www.fastmock.site/mock/b382251bce55be951b9acb71a1348802/beers/address')
      // console.log(result)
      if (data && data.length > 0 ) {
        setAddress([...data])
      }
    }
    getUserAddress()
    // (async function() {

    // })()
  },[])
  return (
    <div className="App">
      <Address
      address={address}
      />
    </div>
  )
}

export default App

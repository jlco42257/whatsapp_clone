import './App.css'
import InitView from './views/initView'
import { useState, useEffect } from 'react'

function App() {
  const [init, setInit] = useState(true)
  useEffect( () => {
    setTimeout(()=>{setInit(false)},1500)
  }, [])
  return (
    <>
      {init && <InitView/>}
    </>
  )
}

export default App

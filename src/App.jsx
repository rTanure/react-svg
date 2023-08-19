import { useState } from 'react'
import "./App.css"

import Icon from './components/Icon'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Icon type="mysql" className="teste"/>
      </div>
    </>
  )
}

export default App

import React from 'react'
import { useState } from 'react'
import Comp1 from './Comp1'

const Textcomponent = () => {

    const [data, setData] = useState("This a data")
  return (
    <div>Textcomponent

        <Comp1 data={data}/>
    </div>
  )
}

export default Textcomponent
import React, { Children, useContext, useState } from 'react'
import {userContext} from './userContext'

const CounterContext = ({Children}) => {

    const [counter, setCounter] = useState(0)

    const sumar = ()=>{
        counter + 1
    }
    const restar = ()=>{
        counter - 1
    }
 
  return (
    <userContext.Provider value={{counter, sumar, restar}}>
        {Children}
    </userContext.Provider>
  )
}

export default CounterContext
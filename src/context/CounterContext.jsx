import React, {  useContext, useState } from 'react'
import {userContext} from './userContext'

const CounterContext = ({children}) => {

    const [counter, setCounter] = useState(0)

    const sumar = ()=>{
        setCounter(counter + 1)
    }
    const restar = ()=>{
      if(counter > 0){
        setCounter(counter - 1)
      }else{
        setCounter(0)
      }

      }

      const resetear = ()=>{
        setCounter(0)
      }
 
  return (
    <userContext.Provider value={{counter, sumar, restar,resetear}}>
        {children}
    </userContext.Provider>
  )
}

export default CounterContext
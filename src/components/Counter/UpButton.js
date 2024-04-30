import React, { useContext } from 'react'

import CounterContext from '../../context/CounterContext'

const UpButton = ({count}) => {
    const {data, handleCountUp} = useContext(CounterContext);

  return (
    <button type='button' disabled={data.disabled} onClick={()=>handleCountUp(count || 1)} >+{count}</button>   
  )
}

export default UpButton
import React, { useContext } from 'react'

import CounterContext from '../../context/CounterContext'

const DownButton = ({count}) => {
    const {data, handleCountDown} = useContext(CounterContext);
  return (
    <button type='button' disabled={data.disabled} onClick={()=>handleCountDown(count || 1)} >-{count}</button>
  )
}

export default DownButton
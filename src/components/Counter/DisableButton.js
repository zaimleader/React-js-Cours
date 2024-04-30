import React, { useContext } from 'react'

import CounterContext from '../../context/CounterContext'

const DisableButton = () => {
    const {data, handleToggleDisable} = useContext(CounterContext)

  return (
    <button type='button' onClick={handleToggleDisable}>{data.disabled ? "Resume" : "Stop"}</button>
  )
}

export default DisableButton
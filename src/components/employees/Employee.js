import React from 'react'

const Employee = (props) => {
    const style = {
        border : "2px dashed red",
        borderRadius: "10px",
        padding: "5px",
        marginBottom: "10px",
        maxWidth: "300px"
    };

  return (
    <div style={style}>
        <h3 style={{marginBottom: "5px"}}>{props.data.name}</h3>
        <small style={{color: "green"}}>{props.data.job}</small> 
        <i> {props.data.state ? "Active" : "Incative"}</i>
    </div>
  )
}

export default Employee
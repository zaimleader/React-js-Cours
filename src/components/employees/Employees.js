import React, { useState } from 'react'
import NewEmployee from './NewEmployee'
import Employee from './Employee'

const Employees = () => {
    const initData = [
        {
            id: 1, name : "Mohamed", job : "Dev", state : true
        },
        {
            id: 2, name : "Anass", job : "Designer", state : false
        },
        {
            id: 3, name : "Hamza", job : "IT", state : true
        },
        {
            id: 4, name : "Youness", job : "Directer", state : true
        },
    ];

    const [data, setData] = useState(initData);
    const [show, setShow] = useState(false);

    const editEmployee = () =>{
        // let newData = [...data];
        // newData[0].name = "Oussama";
        // setData(newData);

        setData((state) => {
            let newData = [...state];
            newData[0].name = "Ismail";
            return newData;
        });
    };

    const handleData = (newEmp) =>{
        setData((state) => {
            let newData = [newEmp, ...state];
            setShow(!show);
            return newData;
        }) 
    }

    const toggleForm = ()=>{
        setShow(!show);
    }

  return (
    <div>
        {
            // show && (<NewEmployee addNewEmployee={handleData} />)
            show ? (<NewEmployee addNewEmployee={handleData} />) 
                 : (<button type='button' onClick={toggleForm}>Add New Employee</button>)
        }
        
        {/* <button type="button" onClick={editEmployee} style={{marginTop : "20px"}}>Edit</button> */}

        <h3>All Employees</h3>

        {
            data.map(employee => (
                <Employee data={employee} key={employee.id} />
            ))
        }
    </div>
  )
}

export default Employees
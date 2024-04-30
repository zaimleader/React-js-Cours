import React, { useState } from 'react'

const NewEmployee = (props) => {
    const style = {
        border : "2px dashed black",
        borderRadius: "10px",
        marginTop : "20px",
        padding: "10px 20px",
        maxWidth: "300px"
    };

    const [name, setName] = useState("");
    const [job, setJob] = useState("");

    const changeName = (e) => {
        setName(e.target.value);
    }
    
    const changeJob = (e) => {
        setJob(e.target.value);
    }

    const submit = (e) => {
        e.preventDefault();

        if(!name){
            alert("required name employee");
            return;
        }
        
        if(!job){
            alert("required job");
            return;
        }

        let employee = {
            id : new Date().getTime(),
            name,
            job,
            state: false,
        }

        setName("");
        setJob("");
        
        // console.log(employee);
        props.addNewEmployee(employee);
    }
  return (
    <div className="new-employee" style={style}>
        <h2 style={{margin: "0 0 10px"}}>New Employee</h2>
        <form>
            <div>
                <label htmlFor="name">Name Employee</label>
                <input name='name' value={name} placeholder='Name Employee' onChange={changeName} />
            </div>
            <div>
                <label htmlFor="job">Job</label>
                <select name='job' value={job} placeholder='Name Employee' onChange={changeJob} >
                    <option value="Dev">Dev</option>
                    <option value="Designer">Designer</option>
                    <option value="Manager">Manager</option>
                    <option value="IT">IT</option>
                </select>
            </div>
            <div>
                <button type="submit" onClick={submit}>SUBMIT</button>
            </div>
        </form>
    </div>
  )
}

export default NewEmployee
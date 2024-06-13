import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Add = () => {
    const[data,changeData]=useState([
        {
            "name": "",
            "id": "",
            "dept":"",
            "sub": ""
        } ])
         const inputHandler=(event)=>{
            changeData({...data,[event.target.name]:event.target.value})
         }
         const readValue=()=>{
            console.log(data)
            axios.post("http://localhost:8080/add",data).then(
                (response)=>{
                    console.log(response.data)
                    if (response.data.status=="success") {
                        alert("successfully added")
                    } else {
                        alert("could not add data")
                    }
                }
            ).catch().finally()
         }
  return (
    <div>
        <Navbar/>
        <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='name' value={data.name} onChange={inputHandler}/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
                                <label htmlFor="" className="form-label">Id</label>
                                <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler}/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
                                <label htmlFor="" className="form-label">Department</label>
                                <input type="text" className="form-control" name='dept'value={data.dept} onChange={inputHandler}/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
                                <label htmlFor="" className="form-label">Subject</label>
                                <input type="text" className="form-control" name='sub' value={data.sub} onChange={inputHandler}/>
    
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
     
                            <button className="btn btn-success" onClick={readValue}>Add Teacher</button></div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Add
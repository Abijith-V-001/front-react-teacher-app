import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'

const View = () => {const[data,changeData]=useState([])
    const fetchData=()=>{
        axios.post("http://localhost:8080/view").then(
            (response)=>{
                changeData(response.data)
            }
        ).catch().finally() 
    }
    useEffect(()=>{
        fetchData()
    },[])
    return (
        <div>
          <Navbar/>
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-col-12">

                        <table class="table">
                            <thead>
                                <tr>
                                    
                                    <th scope="col">Name</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Department</th>
                                    <th scope="col">Subject</th>
                                </tr>
                            </thead>
                            <tbody>
                               {data.map(
                                (value,index)=>{
                                    return  <tr>
                                    
                                    <td>{value.name}</td>
                                    <td>{value.id}</td>
                                    <td>{value.dept}</td>
                                    <td>{value.sub}</td>
                                 
                                    
                                </tr>
                                }
                               )}
                               
                            </tbody>
                        </table>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default View
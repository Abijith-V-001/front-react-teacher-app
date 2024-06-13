import React, { useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'

const Search = () => {
    const [data, changeData] = useState(
        {
            "id": ""
        }
    )
    const [teacher, changeTeacher] = useState([])


    const inputHandler = (event) => {
        changeData({ ...data, [event.target.name]: event.target.value })
    }
    const readValue = () => {
        console.log(data)
        axios.post("http://localhost:8080/search", data).then(
            (response) => {
                changeTeacher(response.data)
                console.log(response.data)
            }
        ).catch().finally()
    }
    const delteacher = (id) => {
        let input = { "_id": id }
        axios.post("http://localhost:8080/delete", input).then(
            (response) => {
                console.log(response.data)
                if (response.data.status == "success") {
                    alert("Deleted successfully")
                } else {
                    alert("could not delete")
                }
            }
        ).catch().finally()
    }
    return (  
        <div>
            <Navbar />
            <div className="container">
                <div className="row g-3">
                    <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">


                        <label htmlFor="" className="form-label">Id</label>
                        <input type="text" className="form-control" name='id' value={data.id} onChange={inputHandler} />

                    </div>
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">


                        <button className="btn btn-primary" onClick={readValue}>Search</button>

                    </div>
                </div>
                <div className="row g-3">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
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
                                {
                                    teacher.map(
                                        (value, index) => {
                                            return <tr>

                                                <td>{value.name}</td>
                                                <td>{value.id}</td>
                                                <td>{value.dept}</td>
                                                <td>{value.sub}</td>


                                                <button className="btn btn-danger" onClick={() => { delteacher(value._id) }}>Delete</button>
                                            </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div></div>
            </div>
        </div>
    )
}

export default Search
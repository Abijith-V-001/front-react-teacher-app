import React from 'react'

const Add = () => {
  return (
    <div>
        <div className="container">
                    <div className="row">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12"></div>
                        <div className="row g-3">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
                                <label htmlFor="" className="form-label">Name</label>
                                <input type="text" className="form-control" name='title'/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
                                <label htmlFor="" className="form-label">Id</label>
                                <input type="text" className="form-control" name='startdate'/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
                                <label htmlFor="" className="form-label">Department</label>
                                <input type="text" className="form-control" name='duration'/>
    
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
                                <label htmlFor="" className="form-label">Subject</label>
                                <input type="text" className="form-control" name='venue'/>
    
                            </div>
                            
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
    
    
    
                            <button className="btn btn-success">Add Teacher</button></div>
                        </div>
                    </div>
                </div>
    </div>
  )
}

export default Add
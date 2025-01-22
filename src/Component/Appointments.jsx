import React from 'react'
import './Appment.css';

export default function Appointments() {
    return (
        <div className='appointments'>
            <div className='container '>
                <div className='d-flex justify-content-evenly align-items-center gap-5'>
                    <div className='p-3 d-flex justify-content-evenly gap-3 border border-1 shadow'>
                        <h1  className='' style={{color:'#035faa'}}>1</h1>
                        <div>
                            <h1 className='h4 lh-base'>Select Date / Time slot</h1>
                            <p>Choose the type of department and your staff along with the time slot</p>
                        </div>
                    </div>
                    <div className='p-3 d-flex justify-content-evenly gap-3  border border-1 shadow'>
                        <h1  className='' style={{color:'#035faa'}}>2</h1>
                        <div>
                            <h1 className='h4 lh-base '>Fill Contact Details</h1>
                            <p>Fill in your personal details and brief description of your treatment needed</p>
                        </div>
                    </div>
                    <div className='p-3 d-flex justify-content-evenly gap-3  border border-1 shadow'>
                        <h1 className='' style={{color:'#035faa'}}>3</h1>
                        <div>
                            <h1 className='h4 lh-base '>Check Details</h1>
                            <p>Proof read the details about the choosen staff,service & personal details</p>
                        </div>
                    </div>
                </div>

                <div className='my-5 bg-secondary bg-opacity-10 p-5'>
                    <h1 className='fs-5 fw-normal mt-2'> All fields are mandatory</h1>
                    <h1 className='fs-3  my-4' style={{color:'#035faa'}}>Select Department & Date</h1>
                    <div className='d-flex gap-5 justify-container-center alignitems-center my-5'>
                        <div className='form-floating w-100'>
                            <select name="" id="" className='form-select'>
                                <option value="">Dental filling</option>
                                <option value="">Fixing Implants</option>
                            </select>
                            <label htmlFor="" className='form-label'>Select Department</label>
                        </div>
                        <div className='form-floating w-100'>
                            <select name="" id="" className='form-select'>
                                <option value="">Dr. Pavi</option>
                                <option value="">Dr Deepika</option>
                            </select>
                            <label htmlFor="" className='form-label'>Select Doctor</label>
                        </div>
                        <input type="date" className='form-control w-100'  />

                    </div >
                    <div className='text-center'>
                    <button className='btn text-white w-25' style={{ backgroundColor: '#035faa' }}>Book</button>

                    </div>

                </div>
            </div>

        </div>
    )
}

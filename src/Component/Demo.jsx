import React, { useState } from 'react'
import './Homepage.css'
import axios from 'axios';


export default function Demo() {
    const [name,setname] = useState('')
    const [email,setemail] = useState('')
    const [pno,setpno] = useState(0)
    const [dates,setdate] = useState('')
    const [service,setservice] = useState('')
    function book(){
        axios.post('https://6790c8f7af8442fd7377b4d6.mockapi.io/login',{
            Name:name,
            Email:email,
            Phone:pno,
            Dates:dates,
            Service:service
        })
        .then(()=>{
            alert("Booking a appointment successfully")
        })
        .catch(err=>console.log(err))
    }
    return (
        <div className=''>
            <div className='h-one'>
                <div className='h-one-1 d-flex flex-wrap container gap-5'>
                    <h1 className='display-5 w-100 text-white'>Advanced Dentistry   <br />for a <br /> Brighter Future</h1>
                    <div className='bg-info bg-opacity-25 p-1 pb-1'>
                        <img loading="lazy" decoding="async" width="500" height="350" src="https://zahrah.creedcreatives.net/dentals/wp-content/uploads/sites/21/2024/09/stomatologists-orthodontists-dentists-looking-at-t-2023-11-27-05-10-48-utc1.png" class="attachment-full size-full wp-image-361" alt="" srcset="https://zahrah.creedcreatives.net/dentals/wp-content/uploads/sites/21/2024/09/stomatologists-orthodontists-dentists-looking-at-t-2023-11-27-05-10-48-utc1.png 500w, https://zahrah.creedcreatives.net/dentals/wp-content/uploads/sites/21/2024/09/stomatologists-orthodontists-dentists-looking-at-t-2023-11-27-05-10-48-utc1-300x300.png 300w, https://zahrah.creedcreatives.net/dentals/wp-content/uploads/sites/21/2024/09/stomatologists-orthodontists-dentists-looking-at-t-2023-11-27-05-10-48-utc1-150x150.png 150w" sizes="(max-width: 500px) 100vw, 500px" />
                    </div>
                    <div className='bg-secondary bg-opacity-25  rounded-5 w-50 p-5' style={{ height: 400 }}>
                        <h1 className='text-white'>Book your Appointment</h1>
                        <div className='row my-5'>
                            <div className='col-12 mb-4'>
                                <input type='text' className='form-control' onChange={(e)=>{setname(e.target.value)}} placeholder='enter ur name'></input>
                            </div>
                            <div className='col-6 mb-4'>
                                <input type='email' className='form-control' onChange={(e)=>{setemail(e.target.value)}} placeholder='enter ur email'></input>
                            </div>
                            <div className='col-6 mb-4'>
                                <input type='number' className='form-control' onChange={(e)=>{setpno(e.target.value)}} placeholder='enter ur phnone number'></input>
                            </div>
                            <div className='col-6 mb-4'>
                                <input type='date' className='form-control' onChange={(e)=>{setdate(e.target.value)}} placeholder='date'></input>
                            </div>
                            <div className='col-6 mb-4' >
                                <select name="" id="" className='form-select' onChange={(e)=>{setservice(e.target.value)}}>
                                    <option value="">select our service</option>
                                    <option value="Dental filling">Dental filling</option>
                                    <option value="Fixing Implants">Fixing Implants</option>
                                </select>
                            </div>
                            <div className='col-12 text-center'>
                                <button className='btn btn-info' onClick={book}>Book Appointment</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container d-flex mt-5 pt-5 flex-column justify-content-center service' >
                <div className='mt-2 d-flex  justify-content-center align-items-center  flex-wrap  w-100 '>
                    <p className='w-50 text-justify'> <b>Preventive Services:</b> Routine cleanings, exams, and fluoride treatments to keep your teeth and gums healthy.
                        <b>Oral Hygiene Instruction:</b> Personalized tips and recommendations to help you maintain optimal oral hygiene at home.
                        <b>Cavity Prevention and Treatment:</b> Fluoride treatments, fillings, and sealants to prevent and restore tooth decay.
                        <b>Periodontal Care:</b> Treatment for gum disease, including scaling and root planing, to protect the foundation of your teeth.</p>
                    <div className='card w-25 shadow ms-5'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUtM0a2on9YroMJqvQ-3wtx-SR9sywxbjoQA&s' className='card-img' height={300} alt=''></img>
                        <div className='card-img-overlay'>
                            <p className='mt-5 text-center pt-5 h4 card-title' style={{ color: '#035faa' }}>General Dental Care</p>
                        </div>
                    </div>
                </div>
                <div className='mt-2 d-flex w-100 justify-content-center align-items-center  flex-wrap w-100   '>
                    <div className='card shadow w-25 me-5'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZqQdVHKHqQ0R4fIcm6Xvd1WY96sEHPhupBA&s' className='card-img' height={300}  alt=''></img>
                        <div className='card-img-overlay'>
                            <p className='mt-5 text-center h4 pt-5 card-title' style={{ color: '#035faa' }}>Restorative Dentistry</p>
                        </div>
                    </div>

                    <p className='w-50 text-justify'> Fillings: Tooth-colored fillings that blend with your natural teeth to restore function and appearance.
                        Crowns and Bridges: Custom restorations to restore damaged or missing teeth.
                        Root Canals: Treatment for infections in the tooth pulp to save the tooth from extraction.
                        Dentures and Partials: Custom dentures and partials for those with multiple missing teeth.</p>


                </div>

                <div className='mt-2 d-flex w-100 justify-content-center align-items-center flex-wrap w-100'>
                    <p className='w-50 text-justify'> Teeth Whitening: Safe, effective treatments to brighten your smile.
                        Veneers: Thin, custom-made shells placed over the front of your teeth to improve their appearance.
                        Bonding: A quick, affordable solution for fixing minor chips, cracks, or gaps in teeth.</p>
                    <div className='card w-25 shadow'>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSc3vfsoQVfQW2BH5rAxpD3M9SfSsN8y4ld1A&s' className='card-img' alt='' height={300} ></img>
                        <div className='card-img-overlay'>
                            <p className='mt-5 text-center pt-5 h4 card-title' style={{ color: '#035faa' }}>Restorative Dentistry</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='abouts mt-5  gap-5 d-flex   justify-content-center align-items-center '>
                <div className='mx-5 w-25'>
                    <img src="https://marketplacedentistry.ca/wp-content/uploads/2023/08/the-experienced-dentistry.webp" alt="" />
                </div>
                <div className='mt-5 ms-5  w-75'>

                    <p className='h1 lh-lg '>Dental Implant Care</p>
                    <p className='h3 lh-lg' style={{ color: '#035faa' }}>What are Dental Implants?</p>
                    <p className='text-justify w-50 lh-lg'>Dental implants are titanium posts that are surgically placed into the jawbone to replace missing tooth roots. Once healed, they serve as the foundation for a permanent crown, bridge, or denture.</p>
                    <p className='h3 lh-lg ' style={{ color: '#035faa' }}>Why Choose Dental Implants?</p>
                    <p className='text-justify w-50 lh-lg'>
                        Permanent Solution: Unlike dentures, implants are designed to last a lifetime with proper care.
                        Natural Look and Feel: Implants mimic the appearance and function of natural teeth.
                        Bone Preservation: Implants help prevent bone loss in the jaw, which can occur when teeth are missing.
                        Improved Speech and Comfort: Unlike dentures, implants don’t slip and improve speech clarity.
                    </p>
                </div>

            </div>
        </div>
    )
}

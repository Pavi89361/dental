import React from 'react'
import './Homepage.css'
import { Link, Outlet } from 'react-router-dom'
import logo from './images/logo.jpg'

export default function Home() {
    return (
        <div className='home'>
            <div className='header fixed-top'>
                <nav class="navbar navbar-expand-lg navbar-dark bg-transaprent">
                    <div class="container">
                        <img className='navbar-brand ' src={logo} width={100} height={80} alt="logo" />
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav  fs-5 fw-normal ms-auto gap-3">
                                <li class="nav-item">
                                    <Link class="nav-link " to={'/home'} >Home</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link " to={'/about'} >About</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link " to={'/contact'} >Contact us</Link>
                                </li>
                                <li class="nav-item">
                                    <Link class="nav-link " to={'/appoiment'} >Appoinment</Link>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
            <div>
                <Outlet />
            </div>

            <div className='contacts d-flex flex-column p-5'>
                <div className='d-flex p-5 flex-wrap justify-content-evenly align-items-center bg-secondary bg-opacity-25'>
                    <div className='text-white'>
                        <p className='h4 mb-3'>COIMBATORE</p>
                        <address className='lh-lg mb-5'>
                            31,Paariyur Main Road (opp sakthi sugars office),<br /> Gobichettipalaiyam,  <br /> India, Tamil Nadu
                        </address>
                    </div>
                    <div className='text-white'>
                        <p className='h4 mb-3'>OUR SERVICE</p>
                        <ul className='lg-lg mb-3'>
                            <li>Dental Examinations</li>
                            <li>Teeth Whitening</li>
                            <li>Dental Fillings</li>
                            <li>Fixed Braces</li>
                            <li>Oral Surgery</li>
                        </ul>
                    </div>
                    <div className='text-white'>
                        <p className='h4 mb-3'>OPENING HOURS</p>
                        <ul className=' lh-base'>
                            <li className='mb-2'>Mon - Thu : 8:00 AM - 10:00 PM</li>
                            <li className='mb-2'>Fri : 7:30 AM - 9:00 PM</li>
                            <li className='mb-2'>Sat : 9:00 AM - 11:00 PM</li>
                            <li className='mb-2'>Sun : 9:00 AM - 10:00 PM</li>
                        </ul>
                    </div>
                </div>
                <hr className='text-white' />
                <div className='footer text-center p-3 text-white bg-secondary bg-opacity-25'>
                    <p className='lh-lg'>@copyright 2025 |  Powered by Develop Solutions | Sitemap</p>
                    <ul className='list-inline'>
                        <li className='list-inline-item px-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-facebook" viewBox="0 0 16 16">
                                <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
                            </svg>
                        </li>
                        <li className='list-inline-item px-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-youtube" viewBox="0 0 16 16">
                                <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.01 2.01 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.01 2.01 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31 31 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.01 2.01 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A100 100 0 0 1 7.858 2zM6.4 5.209v4.818l4.157-2.408z" />
                            </svg>
                        </li>
                        <li className='list-inline-item px-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
                                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
                            </svg>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

import React from 'react'
import './about.css'

export default function About() {
    return (
        <div className='about'>
            <div className='w-100'>
                <div className=' d-flex container w-100 gap-5 '>
                    <div className='p-3 w-auto'>
                        <h1 className='my-3 lh-lg' style={{ color: '#035faa' }}>Welcome to Dental Care</h1>
                        <p className='fs-6 fw-normal lh-lg '>Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.</p>
                        <p className='fs-6 fw-normal lh-lg mt-4'>Et harum quidem rerum facilis est et expedita distinctio. Duas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        <button className='btn mt-5 me-5 btn-lg text-white' style={{ backgroundColor: '#035faa' }}>KNOW YOUR FACTS</button>
                        <button className='btn  mt-5 ms-5 btn-lg text-white'style={{ backgroundColor: '#035faa' }}>Talk to us</button>
                    </div>
                    <div className='w-auto'>
                        <div className='d-flex flex-column justify-content-evenly align-items-center gap-5'>
                            <div className='p-3 d-flex justify-content-evenly gap-3 border border-1 shadow'>
                                <h1 className=' my-4' style={{ color: '#035faa' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-person-plus" viewBox="0 0 16 16">
                                        <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H1s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C9.516 10.68 8.289 10 6 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                                        <path fill-rule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                                    </svg></h1>
                                <div>
                                    <h1 className='h4 lh-base '>24/7 Live Support</h1>
                                    <p>Choose the type of department and your staff along with the time slot</p>
                                </div>
                            </div>
                            <div className='p-3 d-flex justify-content-evenly gap-5  border border-1 shadow'>
                                <h1 className='my-4' style={{ color: '#035faa' }}>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" fill="currentColor" class="bi bi-phone-vibrate-fill" viewBox="0 0 16 16">
                                    <path d="M4 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2zm5 7a1 1 0 1 0-2 0 1 1 0 0 0 2 0M1.807 4.734a.5.5 0 1 0-.884-.468A8 8 0 0 0 0 8c0 1.347.334 2.618.923 3.734a.5.5 0 1 0 .884-.468A7 7 0 0 1 1 8c0-1.18.292-2.292.807-3.266m13.27-.468a.5.5 0 0 0-.884.468C14.708 5.708 15 6.819 15 8c0 1.18-.292 2.292-.807 3.266a.5.5 0 0 0 .884.468A8 8 0 0 0 16 8a8 8 0 0 0-.923-3.734M3.34 6.182a.5.5 0 1 0-.93-.364A6 6 0 0 0 2 8c0 .769.145 1.505.41 2.182a.5.5 0 1 0 .93-.364A5 5 0 0 1 3 8c0-.642.12-1.255.34-1.818m10.25-.364a.5.5 0 0 0-.93.364c.22.563.34 1.176.34 1.818s-.12 1.255-.34 1.818a.5.5 0 0 0 .93.364C13.856 9.505 14 8.769 14 8s-.145-1.505-.41-2.182" />
                                </svg></h1>
                                <div>
                                    <h1 className='h4 lh-base '>24/7 Live Support</h1>
                                    <p>Choose the type of department and your staff along with the time slot</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

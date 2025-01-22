import React from 'react'
import './contact.css'


export default function Contact() {
    return (
        <div className='contact'>
            <div className='text-center'>

                <h1 className='fs-1 lh-lg'>Our Locations</h1>
                <h5 className='fs-6 fw-normal '>Duas molestias excepturi sint occaecati cupiditate non provident.</h5>
            </div>
            <div className='container d-flex justify-content-center align-items-center gap-5 mt-5'>
                <div class="card" >
                    <img src="https://media.istockphoto.com/id/511061090/photo/business-office-building-in-london-england.jpg?s=612x612&w=0&k=20&c=nYAn4JKoCqO1hMTjZiND1PAIWoABuy1BwH1MhaEoG6w=" class="card-img-top" height={300} width={'100%'} alt="..." />
                    <div class="card-body text-center">
                        <h5 class="card-title mb-3">COIMBATORE</h5>

                        <address class="card-text">
                        31,Paariyur Main Road (opp sakthi sugars office),<br/> Gobichettipalaiyam,  <br/> India, Tamil Nadu
                        </address>
                    </div>
                </div>
                {/* <div>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.3104630081248!2d77.43322857776317!3d11.457502259691468!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba93dbd724d5e27%3A0x19f5240fd685595e!2sVaasthu%20Nagar%2C%20Gobichettipalayam%2C%20Tamil%20Nadu%20638452!5e0!3m2!1sen!2sin!4v1737540866030!5m2!1sen!2sin" width="600" height="450"></iframe>
                </div> */}

            </div>
        </div>
    )
}

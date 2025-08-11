import React from 'react'
import { doctorArr } from '../Data/LocalData';
import OwlCarousel from "react-owl-carousel";
const Empowering = () => {

const options = {
dots: false,
nav: false,
autoplay: false,
mouseDrag: true,
smartSpeed: 2000,
// animateOut: "fadeOut",
loop: true,
// animateIn: 'flipInX',
    // items: 4,
center: true,


responsive: {
0: {
        items: 1,
    margin:10,
},
600: {
    items: 1,
    stagePadding: 30,
    margin:15,
},
1000: {
    items: 2,
    stagePadding: 60,
    margin:20,
},
1200: {
    items: 3,
    stagePadding: 100,
    margin:30,
}
}

};

return (
<>
    <section className='empoering-section pt-5'>
        <div className="container">
            <div className="row">
                <div className="col-lg-8 col-12">
                    <h2 className='fw-semibold '>Empowering Doctors with Evidence-Based Knowledge</h2>
                    <p>Learn from leading doctors and specialists through focused, digestible video content.</p>
                </div>
                <div className="col-lg-4 col-12 d-flex justify-content-lg-end align-items-center">
                    <div class="button-container">
                        <button class="btn  btn-custom-white">For Doctor</button>
                        <button class="btn  btn-custom">For Patients</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="doctor-slider mt-4">
                    <OwlCarousel className="owl-theme" {...options}>
                        {doctorArr.map((element) => {
                        return ( 
                        <div className=" bg-white" key={element.id} >
                                <img src={element.image} alt="doctor" className=" mx-auto" /> 
                                <div className="content mt-4">
                                      <p className="text-gray-700 text-start mb-1">
                                {element.dsc}
                                </p>
                                <p><strong>{element.name }</strong></p>
                                </div>
                          
                        </div>
                        )
                        })}
                    </OwlCarousel>
                </div>
            </div>
        </div>
    </section>
</>
)
}

export default Empowering
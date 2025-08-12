import React from 'react'
import { doctorArr, dominicArr } from '../Data/LocalData';
import OwlCarousel from "react-owl-carousel";
import locationIcon from "../assets/images/icons/location-pin-alt-1-svgrepo-com 1.png"
import workIcon from "../assets/images/icons/work.png"
const CardiologyTabContent = () => {
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
    <OwlCarousel className="owl-theme" {...options}>
        {dominicArr.map((item) => {
        return (

            <div className="cardiology-card" key={item.id}>
                <img src={item.image} alt="doctor" className=" mx-auto" />
                <div className='d-flex justify-content-between pt-4'>
                    <div>
                        <h5 className="doc-name">{item.name}</h5>
                        <div className="exp" style={{fontSize:'12px'}}>{item.exp}</div>
                    </div>
                    <div className="profile-link">
                        <a href="#" style={{fontSize:'12px'}}>View Profile</a>
                    </div>
                </div>

                <div className="content mt-4">
                    <div className='d-flex pb-2 align-items-center'>
                        <div className='me-2'>
                            <img src={locationIcon} alt="icon" style={{width:'24px'}} />
                        </div>

                        <div style={{color:"#000000"}}>{item.location}</div>
                    </div>
                    <div className='d-flex'>
                        <div className='me-2'>
                            <img src={workIcon} alt="icon" style={{width:'24px'}} />
                        </div>

                        <div><strong style={{color:"#000000"}}>Specializes in: </strong><span
                                style={{color:'#73747e'}}>{item.Specializes}</span></div>
                    </div>
                </div>
                <div className="d-flex pt-3 " style={{gap:'20px'}}>
                    <div>
                        <a href="/" className="btn common-btn-dark  text-white">Book an Appointments</a>
                    </div>
                    <div>
                        <a href="/" className="btn  common-btn-outline ">Send Medical Query</a>
                    </div>
                </div>
            </div>
   
        )
        })}
    </OwlCarousel>
</>
)
}

export default CardiologyTabContent
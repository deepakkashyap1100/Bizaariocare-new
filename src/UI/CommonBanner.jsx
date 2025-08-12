
import aboutBanner from '../assets/images/about/banner.png'

import Aboutstyles from '../assets/css/about.module.css';
const CommonBanner = () => {
    // console.log(hospital)
  return (
      <>
              <section className={Aboutstyles.aboutBanner} style={{backgroundImage: `url(${aboutBanner})`}}>
                <div className="container">
                  <div className="row">
                    <div className="col-lg-9 col-12 ">
                      <div className={Aboutstyles.bannerContent}>
                        <h1 className={`text-white fw-bold `}>About US</h1>
                        <p className='text-white'>Empowering hospitals, physicians, and patients with real-time communication and clinical collaboration—because better care starts with better connection.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
      </>
  )
}

export default CommonBanner
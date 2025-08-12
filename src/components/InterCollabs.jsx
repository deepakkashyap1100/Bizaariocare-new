
import React, { useState } from 'react';
import doctorIcon1 from '../assets/images/icons/doc-icon.png'
import doctorIcon2 from '../assets/images/icons/doct-icon2.png'
import doctorIcon3 from '../assets/images/icons/doct-icon3.png'
const InterCollabs = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    const renderContent = () => {
    switch (activeTab) {
      case 'tab1':
            return <div className='indian-tab-content'>
                <div className="row">
                    <div className="col-md-4 col-12 mb-3 mb-md-0">
                        <div className="stats-card1 stats-card  text-white d-flex align-items-center justify-content-between p-4 rounded">
                            <div>
                                <h6 className="mb-1">Doctors</h6>
                                <h3 className="fw-bold">20k</h3>
                            </div>
                            <img src={doctorIcon1} alt="doctorIcon1" />
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mb-3 mb-md-0">
                        <div className="stats-card2 stats-card  text-white d-flex align-items-center justify-content-between p-4 rounded">
                            <div>
                                <h6 className="mb-1">Medical Associations</h6>
                                <h3 className="fw-bold">20k</h3>
                            </div>
                            <img src={doctorIcon2} alt="doctorIcon1" />
                        </div>
                    </div>
                    <div className="col-md-4 col-12 mb-3 mb-md-0">
                        <div className="stats-card3 stats-card  d-flex  justify-content-between text-white  p-4 rounded">
                           
                            
                                <div>
                                     <h6 className="mb-1 ">Partner Hospitals</h6>
                                    <h3 className="fw-bold">20k</h3>
                                </div>
                                <img src={doctorIcon3} alt="doctorIcon1" />
                            
                        </div>
                    </div>
                </div>
            </div>
                
    case 'tab2':
        return <div className="p-4">
            2
        </div>;

        return null;
    }
  };
  return (
      <>
          <section className='international-collaborations'>
              <div className="container pt-5">
                  <div className="title">
                      <h2 className='fw-semibold'>International Collaborations</h2>
                      <p>Learn from leading doctors and specialists through focused, digestible video content.</p>
                  </div>

                  <div className=" mb-4 medical-tab-buttons"> 
                    <button className={`flex-1 py-2 cutom-tab-style2 ${activeTab==='tab1' ? 'activeTab' : 'lightBg' }`}
                        onClick={()=> setActiveTab('tab1')}>
                        India
                    </button>
                    <button className={`flex-1 py-2 cutom-tab-style2 ${activeTab==='tab2' ? ' activeTab' : 'lightBg' }`}
                        onClick={()=> setActiveTab('tab2')}
                        >
                        Ethiopia
                    </button>
                  </div>
                <div className="bg-white ">{renderContent()}</div>
            </div>
        </section>
      </>
  )
}

export default InterCollabs
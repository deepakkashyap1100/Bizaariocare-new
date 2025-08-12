import doctorIcon1 from '../../assets/images/icons/doc-icon.png'
import doctorIcon2 from '../../assets/images/icons/doct-icon2.png'
import doctorIcon3 from '../../assets/images/icons/doct-icon3.png'

const InternationalTab1 = () => {
  return (
      <>
      <div className='indian-tab-content'>
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
      </>
  )
}

export default InternationalTab1
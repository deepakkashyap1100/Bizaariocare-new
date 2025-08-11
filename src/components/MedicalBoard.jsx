import React, { useState } from 'react';
import CardiologyTabContent from './CardiologyTabContent';

const MedicalBoard = () => {
  const [activeTab, setActiveTab] = useState('tab1');

  const renderContent = () => {
    switch (activeTab) {
      case 'tab1':
        return <div className="py-2">
                      <CardiologyTabContent/>   
            </div>;
      case 'tab2':
            return <div className="p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus sit aspernatur ullam. Error iure qui veniam iste accusamus ducimus, minima maxime dicta. Beatae culpa exercitationem fugit odit ratione aliquid dolores.
            
        </div>;
      case 'tab3':
        return <div className="p-4">This is Tab 3 content dipisicing elit. Molestiae mollitia commodi facere praesentium aut cupiditate vero odio assumenda nobis, officiis exercitationem iure, quia repellat nam vitae eligendi ratione. Harum, vero.</div>;
      case 'tab4':
        return <div className="p-4">This is Tab 4 content. Lorem ipsum dolor sit amet consectetutiae mollitia commodi facere praesentium aut cupiditate vero odio assumenda nobis, officiis exercitationem iure, quia repellat nam vitae eligendi ratione. Harum, vero.</div>;
      case 'tab5':
        return <div className="p-4">This is Tab 5 content. Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae </div>;
        return null;
    }
  };

  return (
    <>
     <section className='pt-5'>
         <div className="container pt-10 px-4">
             <div className=" row">
          
                 <div className=" mb-4 medical-tab-buttons"> 
                    <button className={`flex-1 py-2 cutom-tab-style ${activeTab==='tab1' ? 'activeTab' : 'lightBg' }`}
                        onClick={()=> setActiveTab('tab1')}>
                        Cardiology
                    </button>
                    <button className={`flex-1 py-2 cutom-tab-style ${activeTab==='tab2' ? ' activeTab' : 'lightBg' }`}
                        onClick={()=> setActiveTab('tab2')}
                        >
                        Orthopedics
                    </button>
                    <button className={`flex-1 py-2 cutom-tab-style ${activeTab==='tab3' ? 'activeTab' : 'lightBg' }`}
                        onClick={()=> setActiveTab('tab3')}
                        >
                        Pediatrics
                    </button>
                    <button className={`flex-1 py-2 cutom-tab-style ${activeTab==='tab4' ? 'activeTab' : 'lightBg' }`}
                        onClick={()=> setActiveTab('tab4')}
                        >
                        Neurology
                    </button>
                    <button className={`flex-1 py-2 cutom-tab-style ${activeTab==='tab5' ? 'activeTab' : 'lightBg' }`}
                        onClick={()=> setActiveTab('tab5')}
                        >
                        Obstetrics & Gynecology
                    </button>
                    <button className={`flex-1 py-2 cutom-tab-style ${activeTab==='tab6' ? 'activeTab' : 'lightBg' }`}
                        onClick={()=> setActiveTab('tab6')}
                        >
                        Otorhinolaryngology
                    </button>
                    <button className={`flex-1 py-2 cutom-tab-style ${activeTab==='tab7' ? 'activeTab' : 'lightBg' }`}
                        onClick={()=> setActiveTab('tab7')}
                        >
                        Plastic & Reconstructive Surgery
                    </button>
                 </div>

                 {/* Tab Content */}
                 <div className="bg-white ">{renderContent()}</div>
             </div>
         </div>
     </section>
 </>
  );
};

export default MedicalBoard;

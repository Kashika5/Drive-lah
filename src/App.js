import React, { useState } from 'react';
import Navbar from './components/Navbar';
import SubscriptionPlan from './components/SubscriptionPlan';

import Sidebar from './components/Sidebar';
import DeviceManage from './components/DeviceManage';

import './styles/App.css';

function App() {
  const [page, setPage] = useState('subscription');

  const goToDeviceManage = () => {
    setPage('device');
  };

  return (
    <div className="App">
      
      <Navbar />
      
      
      <div className="main-content">
      <Sidebar/>
        {page === 'subscription' ? (
          
          <SubscriptionPlan goToNext={goToDeviceManage} />
        ) : (
          <DeviceManage/>
         
        )}
        
        
      </div>
     
      
    </div>
    
  );
}

export default App;

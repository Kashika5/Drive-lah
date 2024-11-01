import React, { useState, useEffect } from 'react';
import '../styles/SubscriptionPlan.css';
import CardDetails from './CardDetails';

const SubscriptionPlan = ({ goToNext }) => {
  const [plan, setPlan] = useState(localStorage.getItem('plan') || 'Just mates');
  const [addOn] = useState(localStorage.getItem('addOn') || '');

  useEffect(() => {
    localStorage.setItem('plan', plan);
    localStorage.setItem('addOn', addOn);
  }, [plan, addOn]);

  return (
    <div className="subscription-plan">
      <div className='device'>
      <h2>Subscription plan</h2>
      <p>Select the ideal subscription plan for your listing.</p>
      
      <div className="plan-options">
        
        <div 
          className={`plan ${plan === 'Just mates' ? 'selected' : ''}`} 
          onClick={() => setPlan('Just mates')}
        >
          <h3>Just mates</h3>
          <p>Free</p>
          <ul>
            <li>Bring your own GPS</li>
            <li>Mileage reporting to be done by you</li>
            <li>In-person key handover to guests</li>
          </ul>
        </div>
        <div 
          className={`plan ${plan === 'Good mates' ? 'selected' : ''}`} 
          onClick={() => setPlan('Good mates')}
        >
          <h3>Good mates</h3>
          <p>$10/month</p>
          <ul>
            <li>Primary GPS included</li>
            <li>Automated mileage calculations</li>
            <li>In-person key handover to guests</li>
          </ul>
        </div>
        <div 
          className={`plan ${plan === 'Best mates' ? 'selected' : ''}`} 
          onClick={() => setPlan('Best mates')}
        >
          <h3>Best mates</h3>
          <p>$30/month</p>
          <ul>
            <li>Keyless access technology</li>
            <li>Automated mileage calculations</li>
            <li>Remote handover to guests</li>
          </ul>
        </div>
      </div>
      <br>
      </br>
      <h3> Select Add-Ons For Your Subscription</h3>

      <div className="add-ons">
      <div style={{
      display: 'inline-block',
      padding: '10px 15px',
      border: '1px solid #333',
      borderRadius: '4px',
      backgroundColor: '#f0f0f0',
      width:300
    }}>
     <label>
      <input
        type='radio'
        size={30}
        name='addon'
        />
        BYO secondary GPS - $5/month
        </label>
       </div>
       <div style={{
         display: 'inline-block',
         padding: '10px 15px',
         border: '1px solid #333',
         borderRadius: '4px',
         backgroundColor: '#f0f0f0',
         marginLeft:10,
         width:300
      
    }}>
      <label>
      <input
        type='radio'
        size={30}
        name='addon'
        />
        Between Trip Insurance
      </label>    
         
       
          
        
      </div> 
      </div>
      
      <CardDetails />
      <div className='last'>
        <label> Learn more about the plans here - <h4 > What is the right plan for me?</h4></label>
        <label> You will be able to switch between plans later as well. Speak to our host success team if you need any clarifications.</label>
      </div>

      <button className="next-button" onClick={goToNext}>Next</button>
      </div>
    </div>
  );
};

export default SubscriptionPlan;


// src/components/CardDetails.js
import React, { useState } from 'react';
import '../styles/CardDetails.css';

function CardDetails() {
  const [cardNumber, setCardNumber] = useState('');
  //const [expiry, setExpiry] = useState('');
  //const [cvc, setCvc] = useState('');

  return (
    <div className="card-details">
      <h3>Add Card Details</h3>
      <input
        type="text"
        placeholder="Card Number                MM/YY      CVC"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}

      />
      <h5>You will not be charged right now. Subscription will only start once your listing is published and live.</h5>
    </div>
  );
}

export default CardDetails;

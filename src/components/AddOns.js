// src/components/AddOns.js
import React from 'react';
import '../styles/AddOns.css';

const availableAddOns = [
  { id: 'gps', name: 'BYO secondary GPS', price: 5 },
  { id: 'insurance', name: 'Between trip insurance', price: 15, comingSoon: true },
];

function AddOns({ addOns, setAddOns }) {
  const toggleAddOn = (id) => {
    setAddOns((prevAddOns) => {
      const isAdded = prevAddOns.includes(id);
      if (isAdded) {
        return prevAddOns.filter((addOn) => addOn !== id);
      }
      return [...prevAddOns, id];
    });
  };

  return (
    <div className="addons">
      {availableAddOns.map((addOn) => (
        <div key={addOn.id} className="addon">
          <label>
            <input
              type="checkbox"
              checked={addOns.includes(addOn.id)}
              onChange={() => toggleAddOn(addOn.id)}
              disabled={addOn.comingSoon}
            />
            {addOn.name} - ${addOn.price}/month {addOn.comingSoon && '(Coming soon)'}
          </label>
        </div>
      ))}
    </div>
  );
}

export default AddOns;

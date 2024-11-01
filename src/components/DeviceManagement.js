import React, { useState, useEffect } from 'react';
import '../styles/DeviceManagement.css';
import placeholderimage from '../assets/placeholder.jpg'
const ImageWithPlaceholder = ({ src, alt, placeholder }) => {
    const [imgSrc, setImgSrc] = useState(src);
  
    const handleError = () => {
      setImgSrc(placeholder);
    };
  
    return (
      <img
        src={imgSrc}
        alt={alt}
        onError={handleError}
        style={{ width: '200px', height: '200px', objectFit: 'cover' }}
      />
    );
  };
const DeviceManagement = () => {
  const [device1, setDevice1] = useState(localStorage.getItem('device1') || '');
  const [device2, setDevice2] = useState(localStorage.getItem('device2') || '');
  const [byoDevice1, setByoDevice1] = useState(localStorage.getItem('byoDevice1') === 'true');
  const [byoDevice2, setByoDevice2] = useState(localStorage.getItem('byoDevice2') === 'true');

  useEffect(() => {
    localStorage.setItem('device1', device1);
    localStorage.setItem('device2', device2);
    localStorage.setItem('byoDevice1', byoDevice1);
    localStorage.setItem('byoDevice2', byoDevice2);
  }, [device1, device2, byoDevice1, byoDevice2]);

  return (
    <div className="device-management">
      <h2>Device management</h2>
      <p>Add details of the device, if any already installed on your car. If none, then continue to the next step.</p>
      
      <div className="device">
        <h3>Device 1</h3>
        <label>Device Type:</label>
        <input
          type="text"
          placeholder="Primary GPS"
        />
        <div className='serial'>
        <label>Serial Number</label>
        <input
          type="text"
          placeholder="Enter Serial Number"
          value={device1}
          onChange={(e) => setDevice1(e.target.value)}
        />
        </div>
        <label className="upload-label">Upload Device Image:</label>
        <input type="file" />
        <h3>Image </h3>
      
      <div >
      <img src={placeholderimage} alt="Example Image" style={{ width: '200px', height: 'auto' }} />
      </div>

        <label className="toggle-label">
          <input
            type="checkbox"
            checked={byoDevice1}
            onChange={() => setByoDevice1(!byoDevice1)}
          />
          Bringing your own device?
        </label>
      </div>
      
      <div className="device">
        <h3>Device 2</h3>
        <label>Device Type:</label>
        <input
          type="text"
          placeholder="Secondary GPS"
        />
        <div className='serial'>
        <label>Serial Number</label>
        <input
          type="text"
          placeholder="Enter Serial Number"
          value={device2}
          onChange={(e) => setDevice2(e.target.value)}
        />
        </div>
        <label className="upload-label">Upload Device Image:</label>
        <input type="file" />
        <div>
      <h3>Image </h3>
      
      <div >
      <img src={placeholderimage} alt="Example Image" style={{ width: '200px', height: 'auto' }} />
      </div>
      
    </div>
        
        <label className="toggle-label">
          <input
            type="checkbox"
            checked={byoDevice2}
            onChange={() => setByoDevice2(!byoDevice2)}
          />
          Bringing your own device?
        </label>
      </div>
      
      <button className="next-button">Submit</button>
    </div>
  );
};

export default DeviceManagement;

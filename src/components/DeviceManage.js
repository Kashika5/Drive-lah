import React, { useState } from 'react';
import '../styles/DeviceManage.css';

const DeviceManage = () => {
    const [device1, setDevice1] = useState({ type: 'Primary GPS', serial: '', ownDevice: false });
    const [device2, setDevice2] = useState({ type: 'Secondary GPS', serial: '', ownDevice: false });

    const handleToggleOwnDevice = (device, setDevice) => {
        setDevice(prevDevice => ({ ...prevDevice, ownDevice: !prevDevice.ownDevice }));
    };

    const handleSerialChange = (event, setDevice) => {
        setDevice(prevDevice => ({ ...prevDevice, serial: event.target.value }));
    };

    return (
        <div className="device-management-container">
            <h2>Device Management</h2>
            <p>Add details of the device, if any already installed on your car. If none, then continue to next step.</p>

            {[device1, device2].map((device, index) => (
                <div className="device-section" key={index}>
                    <h3>Device {index + 1}</h3>
                    
                    <div className="device-row">
                        <div className="device-input-group">
                            <label>Device type</label>
                            <br></br>
                            <input type="text" value={device.type} readOnly />
                        </div>
                        
                        <div className="device-toggle-group">
                            <label>Bringing your own device?</label> <input
                                type="checkbox"
                                checked={device.ownDevice}
                                onChange={() => handleToggleOwnDevice(device, index === 0 ? setDevice1 : setDevice2)}
                            />
                            
                            <label>Toggle this on if you are bringing your own device. Leave it off if drive mate is to allow the device</label>
                        </div>
                    </div>
                  <div className='device-options'>
                    <div className="device-input-group">
                        <label>Serial number</label>
                        <br></br>
                        <input
                            type="text"
                            placeholder="Enter the serial number"
                            value={device.serial}
                            onChange={(e) => handleSerialChange(e, index === 0 ? setDevice1 : setDevice2)}
                        />
                    </div>

                    <div className="device-upload-group">
                        <label>Upload an image of the device</label>
                        <br></br>
                        <button className="upload-button">Click to upload</button>
                    </div>
                  </div>
                </div>
            ))}

            <button className="next-button">Submit</button>
        </div>
    );
};

export default DeviceManage;

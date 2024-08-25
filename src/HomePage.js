import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function HomePage() {
  const [pincode, setPincode] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLookup = () => {
    if (pincode.length !== 6) {
      setError('The code is not 6 digits');
      return;
    }

    // Navigate to the results page with the pincode as a parameter
    navigate(`/results/${pincode}`);
  };

  return (
    <div className="HomePage">
      <h1>Enter Pincode</h1>
      <div className="form-group">
        <div>
        <input
          type="text"
          placeholder="Pincode"
          className='input'
          value={pincode}
          onChange={(e) => setPincode(e.target.value)}
        />
        </div>
        
        <div>
        <button onClick={handleLookup}>Lookup</button>
        </div>
      </div>
      {error && <div className="error">{error}</div>}
    </div>
  );
}

export default HomePage;

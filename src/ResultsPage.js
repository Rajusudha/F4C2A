import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function ResultsPage() {
  const { pincode } = useParams();
  const [postOffices, setPostOffices] = useState([]);
  const [filteredPostOffices, setFilteredPostOffices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    const fetchPostOffices = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await fetch(`https://api.postalpincode.in/pincode/${pincode}`);
        const data = await response.json();

        if (data[0].Status === 'Error') {
          setError(data[0].Message);
          setPostOffices([]);
          setFilteredPostOffices([]);
        } else {
          setPostOffices(data[0].PostOffice || []);
          setFilteredPostOffices(data[0].PostOffice || []);
        }
      } catch (err) {
        setError('An error occurred while fetching the data.');
        setPostOffices([]);
        setFilteredPostOffices([]);
      } finally {
        setLoading(false);
      }
    };

    fetchPostOffices();
  }, [pincode]);

  const handleFilterChange = (e) => {
    const filterValue = e.target.value.toLowerCase();
    setFilter(filterValue);
    const filtered = postOffices.filter((office) =>
      office.Name.toLowerCase().includes(filterValue)
    );
    setFilteredPostOffices(filtered);
  };

  return (
    <div className="ResultsPage">
      <h1>Results for Pincode: {pincode}</h1>

      {error && <div className="error">{error}</div>}

      {loading && <div className="loader">Loading...</div>}

      {!loading && filteredPostOffices.length === 0 && !error && (
        <div className="no-data">Couldn’t find the postal data you’re looking for…</div>
      )}

      {!loading && filteredPostOffices.length > 0 && (
        <>
          <input
            type="text"
            placeholder="Filter by Post Office Name"
            className='input1'
            value={filter}
            onChange={handleFilterChange}
          />
          <div className="results">
            {filteredPostOffices.map((office) => (
              <div key={office.Name} className="post-office">
                <h2>{office.Name}</h2>
                <p>Branch Type: {office.BranchType}</p>
                <p>Delivery Status: {office.DeliveryStatus === '404' ? 'Not Available' : office.DeliveryStatus}</p>
                <p>District: {office.District}</p>
                <p>Division: {office.Division}</p>
                <p>Pincode: {office.Pincode}</p>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default ResultsPage;

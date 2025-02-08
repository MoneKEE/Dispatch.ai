"use client";

import { useState } from 'react';
import axios from 'axios';

function SearchPage() {
  const [origin, setOrigin] = useState('');
  const [destination, setDestination] = useState('');
  const [equipment, setEquipment] = useState('');

  interface DataType {
    originCity: string;
    destinationCity: string;
  }

  const [loads, setLoads] = useState<DataType[]>([]);

  const handleSearch = async () => {
    try {
      // If dev environment: http://localhost:3001
      // If production environment: your real domain or AWS instance
      const { data } = await axios.get<DataType[]>('/api/loads', {
        baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:3001',
        params: { origin, destination, equipment },
      });
      setLoads(data);
    } catch (error) {
      console.error('Error fetching loads:', error);
    }
  };

  return (
    <div>
      <h1>Dispatch.ai</h1>
      <div className="center-content">
      <input
        type="text"
        placeholder="Origin"
        value={origin}
        onChange={(e) => setOrigin(e.target.value)}
      />
      <input
        type="text"
        placeholder="Destination"
        value={destination}
        onChange={(e) => setDestination(e.target.value)}
      />
      <input
        type="text"
        placeholder="Equipment"
        value={equipment}
        onChange={(e) => setEquipment(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      </div>
      <div>
        {loads.map((load, idx) => (
          <div key={idx}>
            <p>Origin: {load.originCity}</p>
            <p>Destination: {load.destinationCity}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SearchPage;

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [clientsCount, setClientsCount] = useState(0);
  const [teamMembersCount, setTeamMembersCount] = useState(0);
  const [productsCount, setProductsCount] = useState(0);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const clientsResponse = await axios.get('http://localhost:5000/api/clients');
        const teamResponse = await axios.get('http://localhost:5000/api/team');
        const productsResponse = await axios.get('http://localhost:5000/api/products');

        setClientsCount(clientsResponse.data.length);
        setTeamMembersCount(teamResponse.data.length);
        setProductsCount(productsResponse.data.length);
      } catch (error) {
        console.error('Error fetching counts:', error);
      }
    };

    fetchCounts();
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Clear the login state
    navigate('/'); // Redirect to home page
  };

  const handleBack = () => {
    navigate('/'); // Redirect to home page
  };

  return (
    <div>
      <div className="bg-gray-900 text-white w-full p-2 rounded text-center">
        <h1 className="text-2xl font-bold mb-4 pt-4">Admin Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-3 pt-32 gap-4">
        <div className="bg-gray-900 text-white p-4 rounded flex flex-col items-center justify-center">
          <h2 className="text-lg">Clients</h2>
          <p className="text-2xl">{clientsCount}</p>
        </div>
        <div className="bg-gray-900 text-white p-4 rounded flex flex-col items-center justify-center">
          <h2 className="text-lg">Team Members</h2>
          <p className="text-2xl">{teamMembersCount}</p>
        </div>
        <div className="bg-gray-900 text-white p-4 rounded flex flex-col items-center justify-center">
          <h2 className="text-lg">Products</h2>
          <p className="text-2xl">{productsCount}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mt-8">
        <button onClick={handleBack} className="bg-blue-600 text-white py-2 px-4 rounded">
          Back to Home
        </button>
        <button onClick={handleLogout} className="bg-red-600 text-white py-2 px-4 rounded">
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminDashboard;
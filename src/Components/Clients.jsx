
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Clients = () => {
  const [clients, setClients] = useState([]);
  const [newClient, setNewClient] = useState({ name: '', logo: '' });
  const [showAddClientForm, setShowAddClientForm] = useState(false);
  const [showClientList, setShowClientList] = useState(false);

  useEffect(() => {
    fetchClients();
  }, []);

  const fetchClients = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/clients');
      setClients(response.data);
    } catch (error) {
      console.error('Error fetching clients:', error);
    }
  };

  const addClient = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/clients', newClient);
      setClients([...clients, response.data]);
      setNewClient({ name: '', logo: '' });
      setShowAddClientForm(false); // Hide the form after adding
    } catch (error) {
      console.error('Error adding client:', error);
    }
  };

  const deleteClient = async (clientId) => {
    try {
      await axios.delete(`http://localhost:5000/api/clients/${clientId}`);
      setClients(clients.filter(client => client._id !== clientId));
    } catch (error) {
      console.error('Error deleting client:', error);
    }
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="bg-gray-900 text-white text-center py-4 mb-4">
        <h1 className="text-2xl font-bold">Manage Clients</h1>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Clients Count Section */}
        <div className="bg-gray-900 text-white p-4 rounded-lg text-center">
          <h2 className="text-lg">Clients</h2>
          <p className="text-2xl">{clients.length}</p>
        </div>

        {/* Add Client Section */}
        <div 
          className="bg-gray-900 text-white p-4 rounded-lg text-center cursor-pointer"
          onClick={() => setShowAddClientForm(!showAddClientForm)}
        >
          <h2 className="text-lg">Add Client</h2>
        </div>

        {/* View Clients Section */}
        <div 
          className="bg-gray-900 text-white p-4 rounded-lg text-center cursor-pointer"
          onClick={() => setShowClientList(!showClientList)}
        >
          <h2 className="text-lg">View Clients</h2>
        </div>
      </div>

      {/* Add Client Form */}
      {showAddClientForm && (
        <form onSubmit={addClient} className="mt-4">
          <input
            type="text"
            placeholder="Client Name"
            value={newClient.name}
            onChange={(e) => setNewClient({ ...newClient, name: e.target.value })}
            className="border border-gray-300 p-2 rounded mr-2"
            required
          />
          <input
            type="text"
            placeholder="Client Logo URL"
            value={newClient.logo}
            onChange={(e) => setNewClient({ ...newClient, logo: e.target.value })}
            className="border border-gray-300 p-2 rounded mr-2"
            required
          />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
            Add Client
          </button>
        </form>
      )}

      {/* Client List */}
      {showClientList && (
        <ul className="mt-4">
          {clients.map(client => (
            <li key={client._id} className="flex justify-between items-center mb-2">
              <span>{client.name}</span>
              <button onClick={() => deleteClient(client._id)} className="text-red-600">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Clients;
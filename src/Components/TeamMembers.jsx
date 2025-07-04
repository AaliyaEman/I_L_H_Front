
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]); // This will hold the list of team members
  const [newMember, setNewMember] = useState({ name: '', role: '' }); // This will hold the new team member data
  const [showAddMemberForm, setShowAddMemberForm] = useState(false); // Toggle for showing the add member form
  const [showMemberList, setShowMemberList] = useState(false); // Toggle for showing the member list

  useEffect(() => {
    fetchTeamMembers(); // Call the function to get team members
  }, []);

  const fetchTeamMembers = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/team'); // Get team members from the server
      setTeamMembers(response.data); // Set the team members state with the data we got
    } catch (error) {
      console.error('Error fetching team members:', error); // If there's an error, log it
    }
  };

  const addTeamMember = async (e) => {
    e.preventDefault(); // Prevent the page from refreshing
    try {
      const response = await axios.post('http://localhost:5000/api/team', newMember); // Send new team member data to the server
      setTeamMembers([...teamMembers, response.data]); // Add the new member to the list
      setNewMember({ name: '', role: '' }); // Reset the input fields
      setShowAddMemberForm(false); // Hide the form after adding
    } catch (error) {
      console.error('Error adding team member:', error); // If there's an error, log it
    }
  };

  const deleteTeamMember = async (memberId) => {
    try {
      await axios.delete(`http://localhost:5000/api/team/${memberId}`); // Delete the team member from the server
      setTeamMembers(teamMembers.filter(member => member._id !== memberId)); // Remove the member from the list
    } catch (error) {
      console.error('Error deleting team member:', error); // If there's an error, log it
    }
  };

  return (
    <div className="p-4">
      {/* Header Section */}
      <div className="bg-gray-900 text-white text-center py-4 mb-4">
        <h1 className="text-2xl font-bold">Manage Team Members</h1>
      </div>

      {/* Main Content Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        {/* Team Members Count Section */}
        <div className="bg-gray-900 text-white p-4 rounded-lg text-center">
          <h2 className="text-lg">Total Team Members</h2>
          <p className="text-2xl">{teamMembers.length}</p>
        </div>

        {/* Add Team Member Section */}
        <div 
          className="bg-gray-900 text-white p-4 rounded-lg text-center cursor-pointer"
          onClick={() => setShowAddMemberForm(!showAddMemberForm)}
        >
          <h2 className="text-lg">Add Team Member</h2>
        </div>

        {/* View Team Members Section */}
        <div 
          className="bg-gray-900 text-white p-4 rounded-lg text-center cursor-pointer"
          onClick={() => setShowMemberList(!showMemberList)}
        >
          <h2 className="text-lg">View Team Members</h2>
        </div>
      </div>

      {/* Add Team Member Form */}
      {showAddMemberForm && (
        <form onSubmit={addTeamMember} className="mb-4">
          <input
            type="text"
            placeholder="Member Name"
            value={newMember.name}
            onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
            className="border border-gray-300 p-2 rounded mr-2"
            required
          />
          <input
            type="text"
            placeholder="Member Role"
            value={newMember.role}
            onChange={(e) => setNewMember({ ...newMember, role: e.target.value })}
            className="border border-gray-300 p-2 rounded mr-2"
            required
          />
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
            Add Team Member
          </button>
        </form>
      )}

      {/* Team Members List */}
      {showMemberList && (
        <ul>
          {teamMembers.map(member => (
            <li key={member._id} className="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded">
              <span>{member.name} - {member.role}</span>
              <button onClick={() => deleteTeamMember(member._id)} className="text-red-600">Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TeamMembers;
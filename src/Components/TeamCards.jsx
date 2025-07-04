
import React, { useEffect, useState } from 'react';
import profile from '../Assets/profile.png';
const TeamCard = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch team member data from API
  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/team'); 
        const data = await response.json();
        setTeamMembers(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching team members:', error);
        setLoading(false);
      }
    };
    fetchTeamMembers();
  }, []);

  if (loading) return <p>Loading team members...</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-4">
      {teamMembers.map((member) => (
        <div key={member._id} className="card border rounded-lg shadow-md p-4">
          <img
            src={profile} // Assuming the picture URL is stored in the 'picture' property
            alt={`${member.name}'s profile`}
            className="w-full h-56 object-cover rounded-lg"
          />
          <div className="mt-4">
            <h2 className="text-lg font-semibold">
              {member.name}
              {member.verified && (
                <span className="text-blue-500 ml-2">✔</span> // Assuming there's a verified property
              )}
            </h2>
            <p className="text-sm text-gray-500">{member.description || 'No description available'}</p>
            <p className="text-sm text-gray-700 mt-2">
              <strong>Role:</strong> {member.role || 'Not specified'}
            </p>
           
            <p className="text-sm text-gray-700">
              <strong>Followers:</strong> {member.followersCount || 0}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamCard;
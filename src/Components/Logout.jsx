// Logout.jsx
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setIsLoggedIn, setUser }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user state and localStorage if needed
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  }, [setIsLoggedIn, setUser, navigate]);

  return null;
};

export default Logout;

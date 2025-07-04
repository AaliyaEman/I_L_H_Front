import React, { useState } from 'react';
import axios from 'axios';

const SignupForm = ({ onClose }) => {
  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    password: '',
    contact: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/signup', form);
      if (res.data.success) {
        alert('Signup successful!');
        onClose();
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert('Signup failed!');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow w-96">
      <h2 className="text-xl font-bold mb-4 text-green-600 text-center">Sign Up</h2>
      {['name', 'username', 'email', 'password', 'contact'].map((field) => (
        <input
          key={field}
          name={field}
          type={field === 'password' ? 'password' : 'text'}
          placeholder={field[0].toUpperCase() + field.slice(1)}
          value={form[field]}
          onChange={handleChange}
          className="border w-full mb-3 p-2 rounded"
          required
        />
      ))}
      <button className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">Submit</button>
    </form>
  );
};

export default SignupForm;

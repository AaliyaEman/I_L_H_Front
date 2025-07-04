import React, { useState } from 'react';
import axios from 'axios';

const AddInstructorForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    username: '',
    password: '',
    contact_info: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/add-instructor', form);
      if (res.data.success) {
        alert('Instructor added successfully!');
        setForm({ name: '', email: '', username: '', password: '', contact_info: '' });
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert('Error adding instructor');
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded shadow w-full max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4 text-center">Add Instructor</h2>
      <input className="border w-full mb-3 p-2" name="name" placeholder="Name" value={form.name} onChange={handleChange} required />
      <input className="border w-full mb-3 p-2" name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} required />
      <input className="border w-full mb-3 p-2" name="username" placeholder="Username" value={form.username} onChange={handleChange} required />
      <input className="border w-full mb-3 p-2" name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} required />
      <input className="border w-full mb-4 p-2" name="contact_info" placeholder="Contact Info" value={form.contact_info} onChange={handleChange} required />
      <button className="bg-blue-600 text-white w-full py-2 rounded">Add Instructor</button>
    </form>
  );
};

export default AddInstructorForm;

// import React, { useState } from 'react';
// import axios from 'axios';
// import SignupForm from './SignupForm';

// const LoginForm = ({ onLogin }) => {
//   const [form, setForm] = useState({ username: '', password: '' });
//   const [showSignup, setShowSignup] = useState(false);

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/login', form);
//       if (res.data.success) {
//         alert("Login successful!");
//         onLogin(res.data.user);
//       } else {
//         alert(res.data.message);
//       }
//     } catch (err) {
//       alert("Login failed!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80">
//         <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Login</h2>
//         <input className="border w-full mb-3 p-2" placeholder="Username" onChange={e => setForm({ ...form, username: e.target.value })} required />
//         <input className="border w-full mb-4 p-2" placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })} required />
//         <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
//         <p className="text-sm mt-4 text-center text-gray-600">
//           Don't have an account? <span className="text-blue-600 underline cursor-pointer" onClick={() => setShowSignup(true)}>Signup</span>
//         </p>
//       </form>

//       {showSignup && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//           <div className="bg-white p-6 rounded shadow relative">
//             <button onClick={() => setShowSignup(false)} className="absolute top-1 right-3 text-xl">×</button>
//             <SignupForm onClose={() => setShowSignup(false)} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginForm;


// import React, { useState } from 'react';
// import axios from 'axios';
// import SignupForm from './SignupForm';
// import { useNavigate } from 'react-router-dom';

// const LoginForm = ({ onLogin }) => {
//   const [form, setForm] = useState({ username: '', password: '' });
//   const [showSignup, setShowSignup] = useState(false);
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();

//     // Admin shortcut login
//     if (form.username === 'anaya' && form.password === 'anaya') {
//       alert('✅ Welcome Admin!');
//       onLogin({ username: 'anaya' });
//       navigate('/admin-dashboard');
//       return;
//     }

//     try {
//       const res = await axios.post('http://localhost:5000/api/login', form);
//       if (res.data.success) {
//         alert("Login successful!");
//         onLogin(res.data.user);
//       } else {
//         alert(res.data.message);
//       }
//     } catch (err) {
//       alert("Login failed!");
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
//       <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80">
//         <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Login</h2>
//         <input
//           className="border w-full mb-3 p-2"
//           placeholder="Username"
//           onChange={e => setForm({ ...form, username: e.target.value })}
//           required
//         />
//         <input
//           className="border w-full mb-4 p-2"
//           placeholder="Password"
//           type="password"
//           onChange={e => setForm({ ...form, password: e.target.value })}
//           required
//         />
//         <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
//         <p className="text-sm mt-4 text-center text-gray-600">
//           Don't have an account?{' '}
//           <span
//             className="text-blue-600 underline cursor-pointer"
//             onClick={() => setShowSignup(true)}
//           >
//             Signup
//           </span>
//         </p>
//       </form>

//       {showSignup && (
//         <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
//           <div className="bg-white p-6 rounded shadow relative">
//             <button onClick={() => setShowSignup(false)} className="absolute top-1 right-3 text-xl">&times;</button>
//             <SignupForm onClose={() => setShowSignup(false)} />
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default LoginForm;


import React, { useState } from 'react';
import axios from 'axios';
import SignupForm from './SignupForm';

const LoginForm = ({ onLogin }) => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [showSignup, setShowSignup] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/login', form);
      if (res.data.success) {
        alert("Login successful!");
        onLogin(res.data.user);
      } else {
        alert(res.data.message);
      }
    } catch (err) {
      alert("Login failed!");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <form onSubmit={handleLogin} className="bg-white p-6 rounded shadow w-80">
        <h2 className="text-xl font-bold mb-4 text-center text-blue-600">Login</h2>
        <input
          className="border w-full mb-3 p-2"
          placeholder="Username"
          onChange={e => setForm({ ...form, username: e.target.value })}
          required
        />
        <input
          className="border w-full mb-4 p-2"
          placeholder="Password"
          type="password"
          onChange={e => setForm({ ...form, password: e.target.value })}
          required
        />
        <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
        <p className="text-sm mt-4 text-center text-gray-600">
          Don't have an account? <span className="text-blue-600 underline cursor-pointer" onClick={() => setShowSignup(true)}>Signup</span>
        </p>
      </form>

      {showSignup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow relative">
            <button onClick={() => setShowSignup(false)} className="absolute top-1 right-3 text-xl">×</button>
            <SignupForm onClose={() => setShowSignup(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginForm;


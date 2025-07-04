// import React, { useState } from 'react';
// import axios from 'axios';

// const Pop = ({ course, onClose }) => {
//   const [form, setForm] = useState({
//     username: '',
//     trxId: '',
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleEnroll = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:5000/api/enroll', {
//         courseId: course.courseId,
//         ...form,
//       });
//       if (res.data.success) {
//         alert('✅ Enrolled successfully!');
//         onClose();
//       } else {
//         alert(res.data.message || '❌ Enrollment failed!');
//       }
//     } catch (err) {
//       console.error(err);
//       alert('❌ Server error. Please try again.');
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <form onSubmit={handleEnroll} className="bg-white p-6 rounded-lg shadow w-96 relative">
//         <button onClick={onClose} className="absolute top-2 right-3 text-xl">&times;</button>
//         <h2 className="text-xl font-bold mb-4">Enroll in {course.title}</h2>

//         <input
//           className="w-full border p-2 mb-3 rounded"
//           name="username"
//           placeholder="Your Username"
//           value={form.username}
//           onChange={handleChange}
//           required
//         />
//         <input
//           className="w-full border p-2 mb-4 rounded"
//           name="trxId"
//           placeholder="Payment Transaction ID"
//           value={form.trxId}
//           onChange={handleChange}
//           required
//         />
//         <button className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">Enroll</button>
//       </form>
//     </div>
//   );
// };

// export default Pop;

import React, { useState } from 'react';
import axios from 'axios';

const Pop = ({ course, onClose, onEnrolled }) => {
  const [form, setForm] = useState({
    username: '',
    trxId: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleEnroll = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/enroll', {
        courseId: course.courseId,
        ...form,
      });
      if (res.data.success) {
        alert('✅ Enrolled successfully!');
        onEnrolled(course.courseId);
        onClose();
      } else {
        alert(res.data.message || '❌ Enrollment failed!');
      }
    } catch (err) {
      console.error(err);
      alert('❌ Server error. Please try again.');
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <form onSubmit={handleEnroll} className="bg-white p-6 rounded-lg shadow w-96 relative">
        <button type="button" onClick={onClose} className="absolute top-2 right-3 text-xl">&times;</button>
        <h2 className="text-xl font-bold mb-4">Enroll in {course.title}</h2>

        <input
          className="w-full border p-2 mb-3 rounded"
          name="username"
          placeholder="Your Username"
          value={form.username}
          onChange={handleChange}
          required
        />
        <input
          className="w-full border p-2 mb-4 rounded"
          name="trxId"
          placeholder="Payment Transaction ID"
          value={form.trxId}
          onChange={handleChange}
          required
        />
        <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
          Enroll
        </button>
      </form>
    </div>
  );
};

export default Pop;

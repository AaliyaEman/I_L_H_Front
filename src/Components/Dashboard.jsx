
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Sidebar = ({ activeTab, setActiveTab }) => {
//   return (
//     <div className="w-1/4 bg-gray-800 text-white h-screen p-4">
//       <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
//       <ul className="space-y-4">
//         <li
//           className={`cursor-pointer p-2 rounded ${activeTab === 'users' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
//           onClick={() => setActiveTab('users')}
//         >
//           Users
//         </li>
//         <li
//           className={`cursor-pointer p-2 rounded ${activeTab === 'courses' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
//           onClick={() => setActiveTab('courses')}
//         >
//           Courses
//         </li>
//         <li
//           className={`cursor-pointer p-2 rounded ${activeTab === 'instructors' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
//           onClick={() => setActiveTab('instructors')}
//         >
//           Instructors
//         </li>
//       </ul>
//     </div>
//   );
// };

// const Dashboard = () => {
//   const [activeTab, setActiveTab] = useState('users');
//   const [users, setUsers] = useState([]);
//   const [courses, setCourses] = useState([]);
//   const [instructors, setInstructors] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const usersRes = await axios.get('http://localhost:5000/api/users');
//         const coursesRes = await axios.get('http://localhost:5000/api/courses');
//         const instructorsRes = await axios.get('http://localhost:5000/api/team');

//         setUsers([
//           { name: 'Ali Raza', email: 'ali@example.com', username: 'ali123' },
//           { name: 'Fatima Khan', email: 'fatima@example.com', username: 'fatima456' },
//           { name: 'Ahmed Noor', email: 'ahmed@example.com', username: 'ahmed789' },
//           ...usersRes.data,
//         ]);

//         setCourses([
//           { title: 'Web Dev', trainer: 'Ali', price: 5000, duration: '2 months', capacity: 30 },
//           { title: 'Graphic Design', trainer: 'Fatima', price: 4000, duration: '1.5 months', capacity: 25 },
//           ...coursesRes.data,
//         ]);

//         setInstructors([
//           { name: 'Umer Farooq', email: 'umer@example.com', contact: '03001234567' },
//           { name: 'Hira Javed', email: 'hira@example.com', contact: '03019876543' },
//           ...instructorsRes.data,
//         ]);
//       } catch (error) {
//         console.error('❌ Fetch error:', error);
//       }
//     };
//     fetchData();
//   }, []);

//   const renderTable = (headers, data) => (
//     <table className="min-w-full border border-gray-300">
//       <thead className="bg-gray-200">
//         <tr>
//           {headers.map((h) => (
//             <th key={h} className="text-left p-2 border-b">
//               {h}
//             </th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>
//         {data.map((item, idx) => (
//           <tr key={idx} className="hover:bg-gray-100">
//             {Object.values(item).map((val, i) => (
//               <td key={i} className="p-2 border-b">
//                 {val}
//               </td>
//             ))}
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   );

//   return (
//     <div className="flex">
//       <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
//       <div className="w-3/4 p-6">
//         <h2 className="text-2xl font-bold mb-4 capitalize">{activeTab}</h2>
//         {activeTab === 'users' && renderTable(['Name', 'Email', 'Username'], users)}
//         {activeTab === 'courses' &&
//           renderTable(['Title', 'Trainer', 'Price', 'Duration', 'Capacity'], courses)}
//         {activeTab === 'instructors' &&
//           renderTable(['Name', 'Email', 'Contact'], instructors)}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Sidebar = ({ activeTab, setActiveTab }) => {
  return (
    <div className="w-1/4 bg-gray-800 text-white h-screen p-4">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <ul className="space-y-4">
        <li
          className={`cursor-pointer p-2 rounded ${activeTab === 'users' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          onClick={() => setActiveTab('users')}
        >
          Users
        </li>
        <li
          className={`cursor-pointer p-2 rounded ${activeTab === 'courses' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          onClick={() => setActiveTab('courses')}
        >
          Courses
        </li>
        <li
          className={`cursor-pointer p-2 rounded ${activeTab === 'instructors' ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
          onClick={() => setActiveTab('instructors')}
        >
          Instructors
        </li>
      </ul>
    </div>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('users');

  const [users, setUsers] = useState([
    { name: 'Ali Raza', email: 'ali@example.com', username: 'ali123' },
    { name: 'Fatima Khan', email: 'fatima@example.com', username: 'fatima456' },
    { name: 'Ahmed Noor', email: 'ahmed@example.com', username: 'ahmed789' },
  ]);

  const [courses, setCourses] = useState([
    { title: 'Web Dev', trainer: 'Ali', price: 5000, duration: '2 months', capacity: 30 },
    { title: 'Graphic Design', trainer: 'Fatima', price: 4000, duration: '1.5 months', capacity: 25 },
  ]);

  const [instructors, setInstructors] = useState([
    { name: 'Umer Farooq', email: 'umer@example.com', contact: '03001234567' },
    { name: 'Hira Javed', email: 'hira@example.com', contact: '03019876543' },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const usersRes = await axios.get('http://localhost:5000/api/users');
        const coursesRes = await axios.get('http://localhost:5000/api/courses');
        const instructorsRes = await axios.get('http://localhost:5000/api/team');

        setUsers((prev) => [...prev, ...usersRes.data]);
        setCourses((prev) => [...prev, ...coursesRes.data]);
        setInstructors((prev) => [...prev, ...instructorsRes.data]);
      } catch (error) {
        console.error('❌ Fetch error:', error);
      }
    };

    fetchData();
  }, []);

  const renderTable = (headers, data) => (
    <table className="min-w-full border border-gray-300">
      <thead className="bg-gray-200">
        <tr>
          {headers.map((h) => (
            <th key={h} className="text-left p-2 border-b">
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx} className="hover:bg-gray-100">
            {Object.values(item).map((val, i) => (
              <td key={i} className="p-2 border-b">
                {val}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );

  return (
    <div className="flex">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="w-3/4 p-6 overflow-auto">
        <h2 className="text-2xl font-bold mb-4 capitalize">{activeTab}</h2>
        {activeTab === 'users' && renderTable(['Name', 'Email', 'Username'], users)}
        {activeTab === 'courses' && renderTable(['Title', 'Trainer', 'Price', 'Duration', 'Capacity'], courses)}
        {activeTab === 'instructors' && renderTable(['Name', 'Email', 'Contact'], instructors)}
      </div>
    </div>
  );
};

export default Dashboard;





// import React, { useState, useEffect } from 'react';
// import EnrollPopup from './Pop.jsx';

// const CCard = () => {
//   const [courses, setCourses] = useState([]);
//   const [selectedCourse, setSelectedCourse] = useState(null);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await fetch('http://localhost:5000/api/courses');
//         const data = await response.json();
//         setCourses(data);
//       } catch (error) {
//         console.error('Error fetching courses:', error);
//       }
//     };

//     fetchCourses();
//   }, []);

//   return (
//     <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//       {courses.map((course) => (
//         <div key={course._id} className="border rounded-lg shadow p-4">
//           <img src={course.imageUrl} alt={course.title} className="w-full h-40 object-cover rounded" />
//           <h2 className="text-xl font-bold mt-2">{course.title}</h2>
//           <p><strong>Trainer:</strong> {course.trainerName}</p>
//           <p><strong>ID:</strong> {course.courseId}</p>
//           <p><strong>Duration:</strong> {course.duration}</p>
//           <p><strong>Price:</strong> Rs {course.price}</p>
//           <p><strong>Capacity:</strong> {course.capacity}</p>
//           <button
//             className="mt-3 bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700"
//             onClick={() => setSelectedCourse(course)}
//           >
//             Enroll
//           </button>
//         </div>
//       ))}

//       {selectedCourse && (
//         <EnrollPopup
//           course={selectedCourse}
//           onClose={() => setSelectedCourse(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default CCard;

import React, { useEffect, useState } from 'react';
import Pop from './Pop';
import axios from 'axios';

const CCard = () => {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/courses');
        setCourses(res.data);
      } catch (err) {
        console.error('Error fetching courses:', err);
      }
    };
    fetchCourses();
  }, []);

  const handleEnrolled = (courseId) => {
    setEnrolledCourses((prev) => [...prev, courseId]);
  };

  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {courses.map((course) => (
        <div key={course._id} className="border rounded shadow p-4">
          <img src={course.image} alt={course.title} className="w-full h-40 object-cover rounded mb-3" />
          <h2 className="text-lg font-semibold">{course.title}</h2>
          <p className="text-sm text-gray-600">Trainer: {course.trainer}</p>
          <p className="text-sm">Course ID: {course.courseId}</p>
          <p className="text-sm">Duration: {course.duration}</p>
          <p className="text-sm">Price: ${course.price}</p>
          <p className="text-sm mb-2">Capacity: {course.capacity}</p>

          {enrolledCourses.includes(course.courseId) ? (
            <button
              className="bg-green-500 text-white py-1 px-4 rounded cursor-not-allowed w-full"
              disabled
            >
              Enrolled
            </button>
          ) : (
            <button
              className="bg-blue-600 text-white py-1 px-4 rounded w-full hover:bg-blue-700"
              onClick={() => setSelectedCourse(course)}
            >
              Enroll
            </button>
          )}
        </div>
      ))}

      {selectedCourse && (
        <Pop
          course={selectedCourse}
          onClose={() => setSelectedCourse(null)}
          onEnrolled={handleEnrolled}
        />
      )}
    </div>
  );
};

export default CCard;


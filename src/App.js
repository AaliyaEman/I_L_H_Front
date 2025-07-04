
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import LoginForm from './Components/LoginForm';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Team from './Components/Team';
// import Products from './Components/Products';
// import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';

// const App = () => {
//   const [user, setUser] = useState(null);

//   if (!user) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//         <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to I Learn Hub</h2>
//         <LoginForm onLogin={setUser} />
//         {/* ❌ REMOVE SignupForm from here! Already handled as popup in LoginForm */}
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <ConditionalNavbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/team" element={<Team />} />
       
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// const ConditionalNavbar = () => {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith('/admin-dashboard');
//   return !isAdminRoute ? <Navbar /> : null;
// };

// export default App;



// App.jsx
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import LoginForm from './Components/LoginForm';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Team from './Components/Team';
// import Products from './Components/Products';
// import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
// import Logout from './Components/Logout';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [isLoggedIn, setIsLoggedIn] = useState(true);

//   if (!user || !isLoggedIn) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//         <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to I Learn Hub</h2>
//         <LoginForm onLogin={setUser} />
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <ConditionalNavbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// const ConditionalNavbar = () => {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith('/admin-dashboard');
//   return !isAdminRoute ? <Navbar /> : null;
// };

// export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import LoginForm from './Components/LoginForm';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Team from './Components/Team';
// import Products from './Components/Products';
// import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';

// const App = () => {
//   const [user, setUser] = useState(null);

//   if (!user) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//         <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to I Learn Hub</h2>
//         <LoginForm onLogin={setUser} />
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <ConditionalNavbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/team" element={<Team />} />
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// const ConditionalNavbar = () => {
//   const location = useLocation();
//   const isAdminRoute = location.pathname.startsWith('/admin-dashboard');
//   return !isAdminRoute ? <Navbar /> : null;
// };

// export default App;




// App.jsx
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import LoginForm from './Components/LoginForm';
import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';
import Team from './Components/Team';
import Products from './Components/Products';
import Footer from './Components/Footer';
import Navbar from './Components/Navbar';
import Logout from './Components/Logout';
import Dashboard from './Components/Dashboard';
const App = () => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  if (!user || !isLoggedIn) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to I Learn Hub</h2>
        <LoginForm onLogin={setUser} />
      </div>
    );
  }

  return (
    <Router>
      <ConditionalNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/team" element={<Team />} />
         <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/logout" element={<Logout setIsLoggedIn={setIsLoggedIn} setUser={setUser} />} />
      </Routes>
      <Footer />
    </Router>
  );
};

const ConditionalNavbar = () => {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith('/admin-dashboard');
  return !isAdminRoute ? <Navbar /> : null;
};

export default App;




// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import LoginForm from './Components/LoginForm';
// import Home from './Components/Home';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import Team from './Components/Team';
// import Products from './Components/Products';
// import Footer from './Components/Footer';
// import Navbar from './Components/Navbar';
// import Dashboard from './Components/Dashboard'; // ✅ New

// const App = () => {
//   const [user, setUser] = useState(null);

//   if (!user) {
//     return (
//       <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
//         <h2 className="text-2xl font-bold text-blue-600 mb-4">Welcome to I Learn Hub</h2>
//         <LoginForm onLogin={setUser} />
//       </div>
//     );
//   }

//   return (
//     <Router>
//       <ConditionalNavbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//         <Route path="/products" element={<Products />} />
//         <Route path="/team" element={<Team />} />
//         <Route path="/dashboard" element={<Dashboard />} /> {/* ✅ Added */}
//       </Routes>
//       <Footer />
//     </Router>
//   );
// };

// const ConditionalNavbar = () => {
//   const location = useLocation();
//   const isAdminRoute = location.pathname === '/dashboard';
//   return !isAdminRoute ? <Navbar /> : null;
// };

// export default App;

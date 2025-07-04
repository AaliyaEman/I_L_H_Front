
// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import cisnr from '../Assets/cisnr.jpg';
// import { FiMenu, FiX } from 'react-icons/fi';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 768) {
//         setIsMenuOpen(false);
//         setIsDropdownOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);

//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const ctaStyles = {
//     padding: '10px 20px',
//     backgroundColor: '#00b5b8',
//     color: 'white',
//     textDecoration: 'none',
//     fontWeight: '600',
//     borderRadius: '4px',
//   };

//   const ctaHoverStyles = {
//     backgroundColor: '#009c9e',
//   };

//   return (
//     <nav className="py-4 bg-white sticky-top pt-0 pb-0 shadow-md">
//       {/* Navbar Links (Desktop) */}
//       <div className="flex justify-between items-center px-7">
//         <div className="logo">
//           <img src={cisnr} alt="Logo" className=" h-20 w-auto" />
//         </div>

//         <div className="flex items-center space-x-8">
//           {/* Desktop Menu Items */}
//           <div className="flex items-center space-x-6">
//             <Link to="/" className="text-black py-3 hover:text-blue-600 no-underline inline-block align-middle">Home</Link>
//             <div className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//               <Link
//                 to="/products"
//                 className="text-black py-3 hover:text-blue-600 flex items-center no-underline  align-middle"
//               >
//                 Cources<span className="ml-1">&#9660;</span> 
//               </Link>

              
//             </div>
//             <Link to="/team" className="text-black py-3 hover:text-blue-600 no-underline inline-block align-middle">Team</Link>
//             <Link to="/about" className="text-black py-3 hover:text-blue-600 no-underline inline-block align-middle">About Us</Link>
//             <Link to="/contact" className="text-black py-3 hover:text-blue-600 no-underline inline-block align-middle">Contact</Link>
//           </div>

//           {/* Call-to-Action Button */}
//           <div className=" bg-white text-black">
//             <Link
//               to="/login" 
//               style={ctaStyles}
//               className="px-8 py-3"
//               onMouseEnter={(e) => (e.target.style.backgroundColor = ctaHoverStyles.backgroundColor)}
//               onMouseLeave={(e) => (e.target.style.backgroundColor = ctaStyles.backgroundColor)}
//             >
//               Logout
//             </Link>
//           </div>
//         </div>
//       </div>

//       {/* Menu Icon (Mobile) */}
//       <div className="md:hidden">
//         <button onClick={toggleMenu} className="text-black focus:outline-none">
//           {isMenuOpen ? <FiX className="h-8 w-8 fill-current" /> : <FiMenu className="h-8 w-8 fill-current" />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className="fixed top-0 left-0 w-full h-full text-black p-4 bg-white z-50">
//           <div className="flex justify-end">
//             <button onClick={toggleMenu} className="text-black focus:outline-none">
//               <FiX className="h-8 w-8 fill-current" />
//             </button>
//           </div>
//           <div className="mt-4 space-y-4">
//             <Link to="/" onClick={toggleMenu } className="block text-black py-2 hover:text-blue-600">Home</Link>
//             <Link to="/products" onClick={toggleMenu} className="block text-black py-2 hover:text-blue-600">Courcse</Link>
//             <Link to="/team" onClick={toggleMenu} className="block text-black py-2 hover:text-blue-600">Team</Link>
//             <Link to="/about" onClick={toggleMenu} className="block text-black py-2 hover:text-blue-600">About Us</Link>
//             <Link to="/contact" onClick={toggleMenu} className="block text-black py-2 hover:text-blue-600">Contact</Link>
//             <Link to="/login" onClick={toggleMenu} className="block text-black bg-white py-2 hover:text-blue-600"> Logout</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;






// import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
// import cisnr from '../Assets/cisnr.jpg';
// import { FiMenu, FiX } from 'react-icons/fi';

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth > 768) {
//         setIsMenuOpen(false);
//         setIsDropdownOpen(false);
//       }
//     };

//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const toggleDropdown = () => {
//     setIsDropdownOpen(!isDropdownOpen);
//   };

//   const ctaStyles = {
//     padding: '10px 20px',
//     backgroundColor: '#00b5b8',
//     color: 'white',
//     textDecoration: 'none',
//     fontWeight: '600',
//     borderRadius: '4px',
//   };

//   const ctaHoverStyles = {
//     backgroundColor: '#009c9e',
//   };

//   return (
//     <nav className="py-4 bg-white sticky-top pt-0 pb-0 shadow-md">
//       {/* Top Navbar */}
//       <div className="flex justify-between items-center px-7">
//         <div className="logo">
//           <img src={cisnr} alt="Logo" className="h-20 w-auto" />
//         </div>

//         <div className="flex items-center space-x-8">
//           {/* Desktop Links */}
//           <div className="flex items-center space-x-6">
//             <Link to="/" className="text-black py-3 hover:text-blue-600 no-underline">Home</Link>
//             <div className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
//               <Link to="/products" className="text-black py-3 hover:text-blue-600 no-underline flex items-center">
//                 Courses <span className="ml-1">&#9660;</span>
//               </Link>
//             </div>
//             <Link to="/team" className="text-black py-3 hover:text-blue-600 no-underline">Team</Link>
//             <Link to="/about" className="text-black py-3 hover:text-blue-600 no-underline">About Us</Link>
//             <Link to="/contact" className="text-black py-3 hover:text-blue-600 no-underline">Contact</Link>
//           </div>

//           {/* Logout Button */}
//           <div className="bg-white text-black">
//             <Link
//   to="/logout"
//   style={ctaStyles}
//   className="px-8 py-3"
//   onMouseEnter={(e) => (e.target.style.backgroundColor = ctaHoverStyles.backgroundColor)}
//   onMouseLeave={(e) => (e.target.style.backgroundColor = ctaStyles.backgroundColor)}
// >
//   Logout
// </Link>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu Icon */}
//       <div className="md:hidden px-4 py-2">
//         <button onClick={toggleMenu} className="text-black focus:outline-none">
//           {isMenuOpen ? <FiX className="h-8 w-8" /> : <FiMenu className="h-8 w-8" />}
//         </button>
//       </div>

//       {/* Mobile Links */}
//       {isMenuOpen && (
//         <div className="fixed top-0 left-0 w-full h-full bg-white text-black p-4 z-50">
//           <div className="flex justify-end">
//             <button onClick={toggleMenu} className="text-black">
//               <FiX className="h-8 w-8" />
//             </button>
//           </div>
//           <div className="mt-4 space-y-4">
//             <Link to="/" onClick={toggleMenu} className="block text-black py-2 hover:text-blue-600">Home</Link>
//             <Link to="/products" onClick={toggleMenu} className="block text-black py-2 hover:text-blue-600">Courses</Link>
//             <Link to="/team" onClick={toggleMenu} className="block text-black py-2 hover:text-blue-600">Team</Link>
//             <Link to="/about" onClick={toggleMenu} className="block text-black py-2 hover:text-blue-600">About Us</Link>
//             <Link to="/contact" onClick={toggleMenu} className="block text-black py-2 hover:text-blue-600">Contact</Link>
//             <Link to="/logout" onClick={toggleMenu} className="block text-black py-2 hover:text-blue-600">Logout</Link>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;




import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cisnr from '../Assets/cisnr.jpg';
import { FiMenu, FiX } from 'react-icons/fi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  const ctaStyles = {
    padding: '10px 20px',
    backgroundColor: '#00b5b8',
    color: 'white',
    textDecoration: 'none',
    fontWeight: '600',
    borderRadius: '4px',
  };

  const ctaHoverStyles = {
    backgroundColor: '#009c9e',
  };

  return (
    <nav className="py-4 bg-white sticky-top pt-0 pb-0 shadow-md">
      <div className="flex justify-between items-center px-7">
        <div className="logo">
          <img src={cisnr} alt="Logo" className="h-20 w-auto" />
        </div>

        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-black py-3 hover:text-blue-600">Home</Link>
          <Link to="/products" className="text-black py-3 hover:text-blue-600">Courses</Link>
          <Link to="/team" className="text-black py-3 hover:text-blue-600">Team</Link>
          <Link to="/about" className="text-black py-3 hover:text-blue-600">About Us</Link>
          <Link to="/contact" className="text-black py-3 hover:text-blue-600">Contact</Link>
          <Link to="/dashboard" className="text-black py-3 hover:text-blue-600">Dashboard</Link>
          <Link
            to="/"
            style={ctaStyles}
            className="px-4 py-2"
            onMouseEnter={(e) => (e.target.style.backgroundColor = ctaHoverStyles.backgroundColor)}
            onMouseLeave={(e) => (e.target.style.backgroundColor = ctaStyles.backgroundColor)}
          >
            Logout
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-black focus:outline-none">
            {isMenuOpen ? <FiX className="h-8 w-8" /> : <FiMenu className="h-8 w-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-4">
          <div className="flex justify-end">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              <FiX className="h-8 w-8" />
            </button>
          </div>
          <div className="mt-4 space-y-4 text-black">
            <Link to="/" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Home</Link>
            <Link to="/products" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Courses</Link>
            <Link to="/team" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Team</Link>
            <Link to="/about" onClick={toggleMenu} className="block py-2 hover:text-blue-600">About Us</Link>
            <Link to="/contact" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Contact</Link>
            <Link to="/dashboard" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Dashboard</Link>
            <Link to="/" onClick={toggleMenu} className="block py-2 hover:text-blue-600">Logout</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

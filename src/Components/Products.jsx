
// import React, { useEffect, useState } from 'react';
// import axios from 'axios';

// const Products = () => {
//   const [products, setProducts] = useState([]);
//   const [newProduct, setNewProduct] = useState({ name: '', category: '', price: '', description: '', picture: '' });
//   const [showAddProductForm, setShowAddProductForm] = useState(false); // Toggle for showing the add product form
//   const [showProductList, setShowProductList] = useState(false); // Toggle for showing the product list

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const fetchProducts = async () => {
//     try {
//       const response = await axios.get('http://localhost:5000/api/products');
//       setProducts(response.data);
//     } catch (error) {
//       console.error('Error fetching products:', error);
//     }
//   };

//   const addProduct = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post('http://localhost:5000/api/products', newProduct);
//       setProducts([...products, response.data]);
//       setNewProduct({ name: '', category: '', price: '', description: '', picture: '' });
//       setShowAddProductForm(false); // Hide the form after adding
//     } catch (error) {
//       console.error('Error adding product:', error);
//     }
//   };

//   const deleteProduct = async (productId) => {
//     try {
//       await axios.delete(`http://localhost:5000/api/products/${productId}`);
//       setProducts(products.filter(product => product._id !== productId));
//     } catch (error) {
//       console.error('Error deleting product:', error);
//     }
//   };

//   return (
//     <div className="p-4">
//       {/* Header Section */}
//       <div className="bg-gray-900 text-white text-center py-4 mb-4">
//         <h1 className="text-2xl font-bold">Manage Products</h1>
//       </div>

//       {/* Main Content Section */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
//         {/* Products Count Section */}
//         <div className="bg-gray-900 text-white p-4 rounded-lg text-center">
//           <h2 className="text-lg">Total Products</h2>
//           <p className="text-2xl">{products.length}</p>
//         </div>

//         {/* Add Product Section */}
//         <div 
//           className="bg-gray-900 text-white p-4 rounded-lg text-center cursor-pointer"
//           onClick={() => setShowAddProductForm(!showAddProductForm)}
//         >
//           <h2 className="text-lg">Add Product</h2>
//         </div>

//         {/* View Products Section */}
//         <div 
//           className="bg-gray-900 text-white p-4 rounded-lg text-center cursor-pointer"
//           onClick={() => setShowProductList(!showProductList)}
//         >
//           <h2 className="text-lg">View Products</h2>
//         </div>
//       </div>

//       {/* Add Product Form */}
//       {showAddProductForm && (
//         <form onSubmit={addProduct} className="mb-4">
//           <input
//             type="text"
//             placeholder="Product Name"
//             value={newProduct.name}
//             onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
//             className="border border-gray-300 p-2 rounded mr-2"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Category"
//             value={newProduct.category}
//             onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
//             className="border border-gray-300 p-2 rounded mr-2"
//             required
//           />
//           <input
//             type="number"
//             placeholder="Price"
//             value={newProduct.price}
//             onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
//             className="border border-gray-300 p-2 rounded mr-2"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Description"
//             value={newProduct.description}
//             onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
//             className="border border-gray-300 p-2 rounded mr-2"
//             required
//           />
//           <input
//             type="text"
//             placeholder="Picture URL"
//             value={newProduct.picture}
//             onChange={(e) => setNewProduct({ ...newProduct, picture: e.target.value })}
//             className="border border-gray-300 p-2 rounded mr-2"
//             required
//           />
//           <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded">
//             Add Product
//           </button>
//         </form>
//       )}

//       {/* Products List */}
//       {showProductList && (
//         <ul>
//           {products.map(product => (
//             <li key={product._id} className="flex justify-between items-center mb-2 bg-gray-100 p-2 rounded">
//               <span>{product.name} - {product.category} - ${product.price}</span>
//               <button onClick={() => deleteProduct(product._id)} className="text-red-600">Delete</button>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Products;


import React from 'react';
import CCard from './CCard.jsx';
import carouselImage2 from '../Assets/carousel_2.png';
import { Link } from 'react-router-dom'; 

const Team = () => {
  return (
    <div className="w-full">
      <div className="relative w-full">
        {/* Image */}
        <img
          src={carouselImage2}
          alt="Example"
          className="w-full h-80 object-cover"
        />
        {/* Overlay Text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl lg:text-7xl font-bold bg-opacity-50 px-4 py-2 rounded">
            Cources
          </h1>
        </div>

        {/* Breadcrumb */}
        <div className="absolute inset-0 flex items-center pt-24 md:pt-32 justify-center">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb flex space-x-2">
              <li className="breadcrumb-item text-lg md:text-2xl font-bold">
                <Link to="/" className="text-white">Home</Link>
              </li>
              <li className="breadcrumb-item text-lg md:text-2xl text-white font-bold" aria-current="page">
                Cources
              </li>
            </ol>
          </nav>
        </div>
      </div>

    <div>
      <CCard/>
    

      </div>
    </div>
  );
};

export default Team;
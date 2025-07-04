import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const AdminLayout = () => {
  return (
    <div className="flex">
      <aside className="w-1/4 bg-gray-900 text-white h-screen p-6">
        <h2 className="text-2xl font-bold mb-6 underline text-center">Dashboard</h2>
        <ul className="space-y-4">
          <li>
            <Link
              to="/admin-dashboard"
              className="block p-4 bg-white text-gray-900 rounded-lg shadow transition-transform duration-300 hover:bg-gray-300 hover:scale-105 cursor-pointer"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard/clients"
              className="block p-4 bg-white text-gray-900 rounded-lg shadow transition-transform duration-300  hover:bg-gray-300 hover:scale-105 cursor-pointer"
            >
              Clients
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard/team"
              className="block p-4 bg-white text-gray-900 rounded-lg shadow transition-transform duration-300 hover:bg-gray-300 hover:scale-105 cursor-pointer"
            >
              Team Members
            </Link>
          </li>
          <li>
            <Link
              to="/admin-dashboard/products"
              className="block p-4 bg-white text-gray-900 rounded-lg shadow transition-transform duration-300 hover:bg-gray-300 hover:scale-105 cursor-pointer"
            >
              Products
            </Link>
          </li>
        </ul>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
import Link from 'next/link';
import React from 'react';

const NotFound = () => (
  <div className="container mx-auto px-10 mb-8">
    <div className="bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8">
      <div className="relative overflow-hidden shadow-md pb-80 mb-6">
        <img src="/notfound.jpg" alt="Not Found" className="absolute h-80 w-full object-cover  shadow-lg rounded-t-lg lg:rounded-lg" />
      </div>

      <h1 className="transition duration-700 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
        We could not find the category you were looking for.
      </h1>
      <div className="text-center">
        Back To <Link href="/">Home Page</Link>
      </div>
    </div>
  </div>
);

export default NotFound;

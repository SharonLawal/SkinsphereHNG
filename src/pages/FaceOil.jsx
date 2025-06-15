// // src/components/FaceOil.jsx
// import React from "react";
// import ProductCard from "../components/ProductCard";
// import { getProductsByCategory } from "../constants/ProductData"; // Corrected import path
// import { useProductContext } from "../constants/ProductContext"; // Import to use filteredProducts

// const FaceOil = () => {
//   const { allProducts } = useProductContext(); // Get all products from context
//   // Filter allProducts by category
//   const faceOilProducts = allProducts.filter(product => product.category === "Face Oil"); // Ensure category string matches exactly

//   return (
//     <div className="container mx-auto p-4 sm:p-6 lg:p-8 min-h-[calc(100vh-64px)] animate-fade-in">
//       <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">Face Oils</h1>
//       {faceOilProducts.length === 0 ? (
//         <p className="text-center text-xl text-gray-600">No Face Oil products available at the moment.</p>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 animate-slide-up-fade">
//           {faceOilProducts.map((product, index) => (
//             <ProductCard
//               key={product.id}
//               product={product}
//               animationDelay={index * 0.05}
//             />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default FaceOil;

// src/components/Moisturizer.jsx
import React from 'react';
import ProductCard from '../components/ProductCard';
import { getProductsByCategory } from '../constants/ProductData';

const FaceOil = () => {
  const faceOilProducts = getProductsByCategory('Face Oil'); // Ensure the category matches exactly
  return (
    <div className="flex flex-wrap justify-center gap-6 w-full px-4 md:px-8 lg:px-12 py-8">
      {faceOilProducts.map((product, index) => (
        <ProductCard key={product.id} product={product} animationDelay={index * 0.05} />
      ))}
    </div>
  );
};

export default FaceOil;
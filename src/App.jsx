// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './constants/ProductContext';
import Nav from './components/Nav';
import Footer from './sections/Footer'; // Assuming Footer is in src/sections

// Import all your homepage sections
import Hero from './sections/Hero';
import CategoryShowcase from './sections/CategoryShowcase'; // New homepage section
import FeaturedProducts from './sections/FeaturedProducts'; // New homepage section
import PromoBanner from './sections/PromoBanner'; // New homepage section
import AboutTeaser from './sections/AboutTeaser'; // New homepage section

// Import your product display components
import All from './pages/All';
import Cleanser from './pages/Cleanser';
import Serum from './pages/Serum';
import Moisturizer from './pages/Moisturizer';
import FaceOil from './pages/FaceOil';
import ProductDescription from './pages/ProductDescription';
import ProductButton from './components/ProductButton'; // Now used on the /products page

// Import other core application pages
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PaymentInProcess from './pages/PaymentInProcess';
import SearchResults from './pages/SearchResults';

// Import your general pages (assuming they are in src/components/ as per your path)
import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <ProductProvider>
        <Nav />
        <main>
          <Routes>
            {/* The Main Homepage Route */}
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <CategoryShowcase />
                  <FeaturedProducts />
                  <PromoBanner />
                  <AboutTeaser />
                </>
              }
            />

            {/* The Dedicated Products Listing Page */}
            {/* This route now includes the ProductButton for category filtering */}
            <Route
              path="/products"
              element={
                <div className="container mx-auto"> {/* Added a container for consistent padding */}
                  <ProductButton /> {/* Displays the category filter buttons */}
                  <All />           {/* Displays all products by default for /products */}
                </div>
              }
            />

            <Route
              path="/products/Cleanser"
              element={
                <div className="container mx-auto"> {/* Added a container for consistent padding */}
                  <ProductButton /> {/* Displays the category filter buttons */}
                  <Cleanser />           {/* Displays all products by default for /products */}
                </div>
              }
            />

            <Route
              path="/products/Serum"
              element={
                <div className="container mx-auto"> {/* Added a container for consistent padding */}
                  <ProductButton /> {/* Displays the category filter buttons */}
                  <Serum />           {/* Displays all products by default for /products */}
                </div>
              }
            />

            <Route
              path="/products/Moisturizer"
              element={
                <div className="container mx-auto"> {/* Added a container for consistent padding */}
                  <ProductButton /> {/* Displays the category filter buttons */}
                  <Moisturizer />           {/* Displays all products by default for /products */}
                </div>
              }
            />

            <Route
              path="/products/FaceOil"
              element={
                <div className="container mx-auto"> {/* Added a container for consistent padding */}
                  <ProductButton /> {/* Displays the category filter buttons */}
                  <FaceOil />           {/* Displays all products by default for /products */}
                </div>
              }
            />

            {/* Specific Category Product Pages (if you want direct links to them) */}
            {/* Note: ProductButton in '/products' handles dynamic filtering,
                but these routes offer direct access to specific categories if needed. */}
            {/* <Route path="/products/Cleanser" element={<Cleanser />} />
            <Route path="/products/Serum" element={<Serum />} />
            <Route path="/products/Moisturizer" element={<Moisturizer />} />
            <Route path="/products/FaceOil" element={<FaceOil />} /> */} {/* Ensure 'FaceOil' matches the URL path from ProductButtonComponent */}

            {/* Product Details Page */}
            <Route path="/product/:id" element={<ProductDescription />} />

            {/* Cart & Checkout Flow */}
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<PaymentInProcess />} />

            {/* Search Results Page */}
            <Route path="/search" element={<SearchResults />} />

            {/* General Information Pages */}
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />

            {/* Fallback Route for any unmatched paths */}
            <Route path="*" element={<All />} /> {/* Redirects unknown paths to the All Products page */}
          </Routes>
        </main>
        <Footer /> {/* Your footer component */}
      </ProductProvider>
    </Router>
  );
}

export default App;
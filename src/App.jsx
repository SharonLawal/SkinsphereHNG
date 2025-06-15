import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './constants/ProductContext';
import Nav from './components/Nav';
import Footer from './sections/Footer';

import Hero from './sections/Hero';
import CategoryShowcase from './sections/CategoryShowcase';
import FeaturedProducts from './sections/FeaturedProducts';
import PromoBanner from './sections/PromoBanner';
import AboutTeaser from './sections/AboutTeaser';

import All from './pages/All';
import Cleanser from './pages/Cleanser';
import Serum from './pages/Serum';
import Moisturizer from './pages/Moisturizer';
import FaceOil from './pages/FaceOil';
import ProductDescription from './pages/ProductDescription';
import ProductButton from './components/ProductButton';

import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import PaymentInProcess from './pages/PaymentInProcess';
import SearchResults from './pages/SearchResults';

import AboutUs from './pages/AboutUs';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <Router>
      <ProductProvider>
        <Nav />
        <main>
          <Routes>
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

            <Route
              path="/products"
              element={
                <div className="container mx-auto">
                  <ProductButton />
                  <All />
                </div>
              }
            />

            <Route
              path="/products/Cleanser"
              element={
                <div className="container mx-auto">
                  <ProductButton />
                  <Cleanser />
                </div>
              }
            />

            <Route
              path="/products/Serum"
              element={
                <div className="container mx-auto">
                  <ProductButton />
                  <Serum />
                </div>
              }
            />

            <Route
              path="/products/Moisturizer"
              element={
                <div className="container mx-auto">
                  <ProductButton />
                  <Moisturizer />
                </div>
              }
            />

            <Route
              path="/products/FaceOil"
              element={
                <div className="container mx-auto">
                  <ProductButton />
                  <FaceOil />
                </div>
              }
            />

            <Route path="/product/:id" element={<ProductDescription />} />

            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payment" element={<PaymentInProcess />} />

            <Route path="/search" element={<SearchResults />} />

            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />

            <Route path="*" element={<All />} />
          </Routes>
        </main>
        <Footer />
      </ProductProvider>
    </Router>
  );
}

export default App;
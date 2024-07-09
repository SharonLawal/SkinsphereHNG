import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Nav from './components/Nav';
import ProductButton from './components/ProductButton';
import { Footer, Hero, Search } from './sections';
import { All, products } from './components/All';
import Serum from './components/Serum';
import { Cleanser } from './components/Cleanser';
import Moisturizer from './components/Moisturizer';
import FaceOil from './components/FaceOil';
import ProductDescription from './components/ProductDescription';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import PaymentInProcess from './components/PaymentInProcess';
import Links from './constants/links';
import { ProductProvider } from './constants/ProductContext';

const App = () => {
  return (
    <Router>
      <ProductProvider initialProducts={products}>
        <Routes>
          {/* Home Route */}
          <Route
            path="/"
            element={
              <>
                <Nav />
                <Home />
                <Footer />
              </>
            }
          />

          {/* Products Route */}
          <Route
            path="/products/*"
            element={
              <>
                <Nav />
                <Products />
                <Footer />
              </>
            }
          />

          {/* Product Description Route */}
          <Route
            path="/product/:id"
            element={
              <>
                <Nav />
                <ProductDescription />
                <Footer />
              </>
            }
          />

          {/* Cart Route */}
          <Route
            path="/cart"
            element={
              <>
                <Nav />
                <Cart />
                <Footer />
              </>
            }
          />

          {/* Checkout Route */}
          <Route
            path="/checkout"
            element={
              <>
                <Nav />
                <Checkout />
                <Footer />
              </>
            }
          />

          {/* Payment Route */}
          <Route
            path="/payment"
            element={
              <>
                <Nav />
                <PaymentInProcess />
              </>
            }
          />

          {/* Links Route */}
          <Route
            path="/links"
            element={<Links />}
          />
        </Routes>
      </ProductProvider>
    </Router>
  );
};

const Home = () => (
  <>
    <Hero />
    <Search />
    <ProductButton />
    <section>
      <p className="text-left ml-32 pt-32 text-2xl font-semibold py-8">Most Bought Products</p>
      <Routes>
        <Route path="*" element={<All />} />
        <Route path="/products/Serum" element={<Serum />} />
        <Route path="/products/Cleanser" element={<Cleanser />} />
        <Route path="/products/Moisturizer" element={<Moisturizer />} />
        <Route path="/products/Face-Oil" element={<FaceOil />} />
      </Routes>
    </section>
  </>
);

const Products = () => (
  <>
    <Hero />
    <Search />
    <ProductButton />
    <section>
      <p className="text-left ml-32 pt-32 text-2xl font-semibold py-8">All Products</p>
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/Serum" element={<Serum />} />
        <Route path="/Cleanser" element={<Cleanser />} />
        <Route path="/Moisturizer" element={<Moisturizer />} />
        <Route path="/Face-Oil" element={<FaceOil />} />
      </Routes>
    </section>
  </>
);

export default App;

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Category from './components/Category';
// import PrivacyPolicy from './pages/PrivacyPolicy',
import ContactUs from './pages/Contact';
import ShippingReturns from './pages/ShippingReturns';
import WishlistProvider from './contexts/WishlistContext';  // ✅ Wrap Context
import CartProvider from './contexts/CartContext';          // ✅ Wrap Context
import './App.css';
import TermsAndConditions from './pages/TermsAndConditions';

// Lazy-loaded Pages (Improves performance)
const Home = lazy(() => import('./pages/Home'));
const ProductList = lazy(() => import('./pages/ProductList'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Cart = lazy(() => import('./pages/Cart'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Login = lazy(() => import('./pages/Login'));
const Signup = lazy(() => import('./pages/Signup'));
const Wishlist = lazy(() => import('./pages/Wishlist'));
const Orders = lazy(() => import('./pages/Orders'));
const NotFound = lazy(() => import('./pages/NotFound'));
const PrivacyPolicy = lazy(()=> import('./pages/PrivacyPolicy'));

function App() {
  return (
    <CartProvider> {/* ✅ Cart Context */}
      <WishlistProvider> {/* ✅ Wishlist Context */}
        <Router>
          <ToastContainer position="top-right" autoClose={3000} />
          <Navbar />

          <Suspense fallback={<div className="loading-spinner">Loading...</div>}> {/* 🔄 Use a Styled Spinner */}
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<ProductList />} />
              <Route path="/product/:id" element={<ProductDetail />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/wishlist" element={<Wishlist />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/category" element={<Category />} />
              <Route path="/privacypolicy" element={<PrivacyPolicy />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/shippingreturns" element={<ShippingReturns />} />
              <Route path ="/termsandconditions" element={<TermsAndConditions/>}/>
              <Route path="" element={<NotFound />} /> {/* 404 Page */}
            </Routes>
          </Suspense>

          <Footer />
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;

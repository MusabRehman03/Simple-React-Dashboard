import "./App.css";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import SettingsPage from "./pages/SettingsPage";
import ManualProductsPage from "./pages/ManualProductsPage";
import CategoriesPage from "./pages/CategoriesPage";

import { BrowserRouter, Routes, Route } from "react-router-dom"; // Moved BrowserRouter to avoid duplicate imports
import ResponsiveDrawer from "./ResponsiveDrawer";

function App() {
  return (
    <BrowserRouter>
      {/* Sidebar / Navigation Drawer */}
      <ResponsiveDrawer />

      {/* Routes for Page Navigation */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/manualproducts" element={<ManualProductsPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

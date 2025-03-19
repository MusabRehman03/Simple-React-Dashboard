import "./App.css";

import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import ProductsPage from "./pages/ProductsPage";
import ContactPage from "./pages/ContactPage";
import SettingsPage from "./pages/SettingsPage";
import { BrowserRouter } from "react-router-dom";
import Layout from "./pages/Layout";
import ManualProductsPage from "./pages/ManualProductsPage";
import CategoriesPage from "./pages/CategoriesPage";
function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="/About" element={<AboutPage />} />
            <Route path="/Settings" element={<SettingsPage />} />
            <Route path="/Contact" element={<ContactPage />} />
            <Route path="/Products" element={<ProductsPage />} />
            <Route path="/ManualProducts" element={< ManualProductsPage />} />
            <Route path="/Categories" element={< CategoriesPage />} />

          </Route>
        </Routes>
      </BrowserRouter>

      {/* <HomePage/> */}
      {/* <Grid/> */}
      {/* <ProductsPage/> */}
      {/* <HomePage/> */}
    </>
  );
}

export default App;

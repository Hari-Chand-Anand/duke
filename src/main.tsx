import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import App from "./App";
import ProductsPage from "./pages/ProductsPage";
import CustomersPage from "./pages/CustomersPage";
import LockStitchPage from "./pages/machines/LockStitchPage";

import ChainStitchPage from "./pages/machines/ChainStitchPage";
import ButtonStitchPage from "./pages/machines/ButtonStitchPage";
import InterlockPage from "./pages/machines/InterlockPage";
import OverlockPage from "./pages/machines/OverlockPage";
import ButtonHolePage from "./pages/machines/ButtonHolePage";
import AutomaticPage from "./pages/machines/AutomaticPage";
import LeatherPage from "./pages/machines/LeatherPage";
import DecorativePage from "./pages/machines/DecorativePage";
import CuttingFusingPage from "./pages/machines/CuttingFusingPage";
import SpecializedPage from "./pages/machines/SpecializedPage";
import SpareAccessoriesPage from "./pages/machines/SpareAccessoriesPage";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        {/* Home = your existing GSAP scroll page */}
        <Route path="/" element={<App />} />

        {/* Products page */}
        <Route path="/products" element={<ProductsPage />} />
        {/* Our Machines pages */}
        <Route path="/our-machines/lock-stitch" element={<LockStitchPage />} />
        <Route path="/our-machines/chain-stitch" element={<ChainStitchPage />} />
        <Route path="/our-machines/button-stitch" element={<ButtonStitchPage />} />
        <Route path="/our-machines/interlock" element={<InterlockPage />} />
        <Route path="/our-machines/overlock" element={<OverlockPage />} />
        <Route path="/our-machines/button-hole" element={<ButtonHolePage />} />
        <Route path="/our-machines/automatic" element={<AutomaticPage />} />
        <Route path="/our-machines/leather" element={<LeatherPage />} />
        <Route path="/our-machines/decorative" element={<DecorativePage />} />
        <Route path="/our-machines/cutting-fusing" element={<CuttingFusingPage />} />
        <Route path="/our-machines/specialized" element={<SpecializedPage />} />
        <Route path="/our-machines/spare-accessories" element={<SpareAccessoriesPage />} />

        {/* Customers page */}
        <Route path="/customers" element={<CustomersPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

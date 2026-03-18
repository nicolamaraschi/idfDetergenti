import React from 'react';
import { BrowserRouter, Routes, Route, Navigate, Outlet, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import FranchisePage from './pages/FranchisePage';
import ContactPage from './pages/ContactPage';
import MarketingPage from './pages/MarketingPage';
import CertificationsPage from './pages/CertificationsPage';

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

const LangWrapper = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const pathLang = location.pathname.split('/')[1];
  const supportedLangs = ['it', 'en', 'al'];

  React.useEffect(() => {
    if (supportedLangs.includes(pathLang) && i18n.language !== pathLang) {
      i18n.changeLanguage(pathLang);
    }
  }, [pathLang, i18n]);

  return <Outlet />;
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/it/" replace />} />
        <Route path="/:lang" element={<LangWrapper />}>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="prodotti" element={<ProductsPage />} />
            <Route path="apri-negozio" element={<FranchisePage />} />
            <Route path="marketing" element={<MarketingPage />} />
            <Route path="certificazioni" element={<CertificationsPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
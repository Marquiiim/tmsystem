import { Routes, Route, Navigate } from 'react-router-dom';

import Authpage from './pages/auth/authpage';

import ProtectedRoutes from './protectedRoutes'

import Homepage from './pages/home/homepage';
import Profilepage from './pages/profile/profilepage';

import Tipage from './pages/pages-tickets/TI/ti'
import Rhpage from './pages/pages-tickets/RH/rh'
import Admpage from './pages/pages-tickets/ADM/adm'
import Gerpage from './pages/pages-tickets/GER/ger'
import Mppage from './pages/pages-tickets/MP/mp'
import Sapage from './pages/pages-tickets/SA/sa'
import Sesmtpage from './pages/pages-tickets/SESMT/sesmt'
import Suppage from './pages/pages-tickets/SUP/sup'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />

      <Route path="/auth" element={<Authpage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Homepage />} />
        <Route path="/profile" element={<Profilepage />} />

        <Route path="/ti-ticket" element={<Tipage />} />
        <Route path="/administrative-ticket" element={<Admpage />} />
        <Route path="/hr-ticket" element={<Rhpage />} />
        <Route path="/maintenance-ticket" element={<Mppage />} />
        <Route path="/services-ticket" element={<Sapage />} />
        <Route path="/safety-ticket" element={<Sesmtpage />} />
        <Route path="/management-ticket" element={<Gerpage />} />
        <Route path="/supervision-ticket" element={<Suppage />} />

      </Route>
    </Routes>
  );
}

export default App;

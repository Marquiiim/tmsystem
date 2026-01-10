import { Routes, Route, Navigate } from 'react-router-dom';

import Authpage from './pages/auth/authpage';

import ProtectedRoutes from './protectedRoutes'

import Homepage from './pages/home/homepage';
import Profilepage from './pages/profile/profilepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />

      <Route path="/auth" element={<Authpage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<Homepage />} />
        <Route path="/profile" element={<Profilepage />} />
      </Route>
    </Routes>
  );
}

export default App;

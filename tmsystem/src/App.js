import { Routes, Route, Navigate } from 'react-router-dom';

import Authpage from './pages/auth/authpage';
import Homepage from './pages/home/homepage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />
      <Route path="/auth" element={<Authpage />} />
      <Route path="/home" element={<Homepage />} />
    </Routes>
  );
}

export default App;

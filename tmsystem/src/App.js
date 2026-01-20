import { Routes, Route, Navigate } from 'react-router-dom';

import Authpage from './pages/auth/authpage';

import ProtectedRoutes from './protectedRoutes'

import HomePage from './pages/home/homepage';
import ProfilePage from './pages/profile/profilepage';

import ListTicket from './components/list-ticket/listTicket';
import TicketForm from './components/ticket-form/ticketForm'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />

      <Route path="/auth" element={<Authpage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/ticket/:department" element={<ListTicket />} />
        <Route path="/ticket/:department/new" element={<TicketForm />} />
      </Route>
    </Routes>
  );
}

export default App;

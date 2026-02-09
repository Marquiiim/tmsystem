import { Routes, Route, Navigate } from 'react-router-dom';

import Authpage from './pages/auth/authpage';

import ProtectedRoutes from './protectedRoutes'

import HomePage from './pages/home/homepage';
import ProfilePage from './pages/profile/profilepage';
import MyCallings from './pages/mycallings/myCallings';


import ListTicket from './components/list-ticket/listTicket';
import TicketForm from './components/ticket-form/ticketForm'
import DetailsTicket from './components/details-ticket/detailsTicket';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/auth" replace />} />

      <Route path="/auth" element={<Authpage />} />

      <Route element={<ProtectedRoutes />}>
        <Route path="/home" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />

        <Route path="/mycallings" element={<MyCallings />} />
        <Route path="/mycallings/:ticket_id" element={<DetailsTicket />} />

        <Route path="/ticket/:department" element={<ListTicket />} />
        <Route path="/ticket/:department/new" element={<TicketForm />} />
      </Route>
    </Routes>
  );
}

export default App;

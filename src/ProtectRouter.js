import { useContext } from 'react';
import { AuthContext } from './AuthProvider'; // Import created Context
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/super/admin/" replace />; // Redirect to login
  }

  return children;
};

export default ProtectedRoute;
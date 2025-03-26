import { Navigate } from 'react-router-dom';
import { useAuth } from './AuthContext';

const ProtectedRoute = ({ children, role }) => {
    const { user } = useAuth();
    console.log("Utente in ProtectedRoute:", user);
  
    if (!user) {
      return <Navigate to="/login" replace />;
    }
  
    if (user.role !== role.toLowerCase()) { 
      return <Navigate to="/non-autorizzato" replace />;
    }
  
    return children;
  };
export default ProtectedRoute;
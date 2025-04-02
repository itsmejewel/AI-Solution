import { Navigate } from "react-router-dom";
import { useAuth } from "./authcontext.jsx";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/admin" />;
};

export default ProtectedRoute;

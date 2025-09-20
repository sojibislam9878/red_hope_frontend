import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { userData, authLoading } = useAuth();
  const location = useLocation();

  if (authLoading) {
    return (
      <div className="flex justify-center items-center max-h-screen">
        <span className="loading loading-bars loading-xl text-gray-500"></span>
      </div>
    );
  }

  if (userData && userData?.email) {
    return children;
  } else {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  }
};

export default PrivateRoute;

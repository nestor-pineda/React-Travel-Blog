import { useAuthState } from "../Context";
import { Navigate } from "react-router-dom";
import Create from "../Create";

// Comprobamos si es una ruta privada por su configuración y si hay un token presente en el AuthStateContext para determinar qué renderizar al usuario. Si no es así nos devolverá a la página de inicio de sesión. AQUI ENTRAMOS AL HACER LOGIN.

function AppRoutes() {
  const { user } = useAuthState();

  return <>{user ? <Create /> : <Navigate to="/login" />}</>;
}

export default AppRoutes;

import React, { useReducer } from "react";
import { initialState, AuthReducer } from "./reducer";

const AuthStateContext = React.createContext();
//  Este objeto de contexto contendrá el token de autenticación y los detalles del usuario.
const AuthDispatchContext = React.createContext();
// Utilizaremos este objeto de contexto para pasar el método de envío que nos da el useReducer que crearemos más adelante para gestionar el estado. Esto nos facilitará el uso del dispatch a los componentes que lo necesiten.

// Custom Hooks:
export const useAuthState = () => {
  const context = React.useContext(AuthStateContext);
  if (context === undefined) {
    throw new Error("useAuthState debe utilizarse dentro de un AuthProvider");
  }
  return context;
};

export const useAuthDispatch = () => {
  const context = React.useContext(AuthDispatchContext);
  if (context === undefined) {
    throw new Error("useAuthDispatch debe utilizarse dentro de un AuthProvider");
  }
  return context;
};

// Proveedor personalizado.  será nuestra propia "librería de gestión de estado", ya que en la función AuthProvider creamos un medio para mantener/gestionar el estado usando useReducer.
export const AuthProvider = ({ children }) => {
  const [user, dispatch] = useReducer(AuthReducer, initialState);

  return (
    <AuthStateContext.Provider value={user}>
      <AuthDispatchContext.Provider value={dispatch}>{children}</AuthDispatchContext.Provider>
    </AuthStateContext.Provider>
  );
};

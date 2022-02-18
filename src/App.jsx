import Navbar from "./Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import routes from "./Config/routes";
import Carrousel from "./Slider";
import { AuthProvider } from "./Context";
import AppRoutes from "./Components/AppRoute";

// Las credenciales de acceso son:
// nero@admin.com
// admin123

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <Navbar />

          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
            <Route element={<AppRoutes />} path="/create" />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;

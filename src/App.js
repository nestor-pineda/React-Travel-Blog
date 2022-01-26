import Home from "./Home";
import Navbar from "./Navbar";
import Create from "./Create";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogDetails from "./BlogDetail";
import NotFound from "./NotFound";
import Carrousel from "./Slider";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Carrousel />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<Create />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

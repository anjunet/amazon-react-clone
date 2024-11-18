import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigation,
} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

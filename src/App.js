import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import Login from "./Pages/Login/Login";
import Signup from "./Pages/Signup/Signup";
import Blog from "./Pages/Blog/Blog";
import Dashboard from "./Pages/Dashboard/Dashboard";
import New from "./Pages/New/New"

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="products" element={<Products />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<Signup />} />
            <Route path="blog" element={<Blog />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="/products/new" element={<New />}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

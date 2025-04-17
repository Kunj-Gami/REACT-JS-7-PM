import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./home";
import Blog from "./Blog";
import Services from "./Services";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Blog" element={<Blog/>}/>
          <Route path="/Services" element={<Services/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

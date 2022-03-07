import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Header from "./Component/Header";
import Home from "./Component/Home";
import PageEr from "./Component/PageEr";
import Student from "./Component/Student";
import Contact from "./Component/Contact";
import { Studentdesc } from "./Component/Studentdesc";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          {" "}
          {/*/for enclosing route/*/}
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/student" element={<Student />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/studentdesc" element={<Studentdesc />}>
            <Route path=":id" element={<Studentdesc />} />{" "}
            {/* to use navlink this must be inside the nest */}
          </Route>
          <Route path="/*" element={<PageEr />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

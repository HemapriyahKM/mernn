import Frontpage from "./Frontpage.jsx"
import Login from "./Login.jsx";
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import Register from "./Register.jsx";

function App() {
  return(
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Frontpage/>}/>
          <Route exact path="/login" element={<Login/>} />
          <Route path="/frontpage" element={<Frontpage/>} />  {/* Ensure path is correct */}
          <Route path="/Register" element={<Register/>}/>
        </Routes>
      </div>
    </Router>
  );
}
export default App

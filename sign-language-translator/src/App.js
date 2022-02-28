import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Startup from "./views/Startup"
import Profile from "./views/Profile"
import Translation from "./views/Translation"
import NavBar from './components/Navbar/Navbar';
function App() {
 

  return (
    <BrowserRouter>
    <div className="App"> 
      <span> Lost in Translation</span>
      <NavBar></NavBar>
      <Routes>
        <Route path="/"element={<Startup/>}></Route>
        <Route path="/Profile"element={<Profile/>}></Route>
        <Route path="/Translation"element={<Translation/>}></Route>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;

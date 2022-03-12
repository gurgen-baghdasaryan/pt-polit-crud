import { Routes, Route } from "react-router-dom";


import './App.css';
import NavBar from "./components/NavBar/NavBar";
import PoliticList from "./components/PoliticList"
import CreatePolitic from "./components/CreatePolitic"
import Politic from "./components/Politic"

function App() {
  return (
    <div>
    <NavBar />
    <div className="container p-4">
      <Routes>
        <Route exact path="/" element={<PoliticList />} />
        <Route exact path="/CreateProduct" element={<CreatePolitic />} />
        <Route exact path="/edit/:id" element={<CreatePolitic />} />
        <Route exact path="/product/:id" element={<Politic />} />
      </Routes>
    </div>
  </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import PoliticList from "./components/PoliticList/PoliticList";
import CreatePolitic from "./components/CreatePolitic/CreatePolitic";
import Politic from "./components/Politic/Politic";
import Error from "./components/Error/Error";

function App() {
  return (
    <div>
      <NavBar />
      <div className="container p-4">
        <Routes>
          <Route exact path="/" element={<PoliticList />} />
          <Route exact path="/createpolitic/" element={<CreatePolitic />} />
          <Route exact path="/edit/:id" element={<CreatePolitic />} />
          <Route exact path="/politic/:id" element={<Politic />} />
          <Route  path="*" element={<Error />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

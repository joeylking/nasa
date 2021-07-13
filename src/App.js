import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import NASAphoto from "./components/NASAphoto";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route component={Home} path="/" exact />
        <Route component={NASAphoto} path="/nasaphoto" />
      </div>
    </BrowserRouter>
  );
}

export default App;

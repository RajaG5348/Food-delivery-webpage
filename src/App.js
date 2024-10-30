import { BrowserRouter } from "react-router-dom";
import "./App.css";
import RouteComponents from "./Components/RouteComponents";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <RouteComponents />
      </BrowserRouter>
    </div>
  );
}

export default App;

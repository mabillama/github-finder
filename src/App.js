import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar />
        <main className="bg-purple-500">Content</main>
      </div>
    </Router>
  );
}

export default App;

import "./App.css";
import HomeTop from "./components/Home/HomeTop";
import MiddleComponent from "./components/Home/MiddleComponent";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <HomeTop />
      <MiddleComponent />
    </div>
  );
}

export default App;

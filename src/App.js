import "./App.css";
import Clients from "./components/Clients/clients";
import Footer from "./components/Footer/footer";
import Hiring from "./components/Hiring/hiring";
import HomeTop from "./components/Home/HomeTop";
import MiddleComponent from "./components/Home/MiddleComponent";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <HomeTop />
      <MiddleComponent />
      <Clients />
      <Hiring />
      <Footer />
    </div>
  );
}

export default App;

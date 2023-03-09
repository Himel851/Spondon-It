import "./App.scss";
import Main from "./components/Main/Main";
import NavbarHome from "./components/Navbar/NavbarHome";
import Payment from "./components/Payment/Payment";
import Testimonial from "./components/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <div className="bg">
        <NavbarHome />
        <Main />
      </div>
      <Payment />
      <Testimonial />
    </div>
  );
}

export default App;

import NavBar from "./Components/NavBar";
import AboutUs from "./Components/AboutUs";
import Home from "./Home";
import Customers from "./Components/Customers";
import Pricing from "./Components/Pricing";
import Solution from "./Components/Solution";
import BookDemo from "./Components/BookDemo";
import ContactUs from "./Components/ContactUs"
import SignUpBeta from "./Components/SignUpBeta";
import { BrowserRouter , Routes , Route} from "react-router-dom";
const App = () => {
  return (
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/AboutUs" element={<AboutUs/>} />
          <Route path="/Pricing" element={<Pricing/>} />
          <Route path="/Customers" element={<Customers/>} />
          <Route path="/Solution" element={<Solution/>} />
          <Route path="/BookDemo" element={<BookDemo/>} />
          <Route path="/ContactUs" element={<ContactUs/>} />
          <Route path="/SignUpBeta" element={<SignUpBeta/>} />

          





        </Routes>
      </BrowserRouter>
  );
};

export default App;


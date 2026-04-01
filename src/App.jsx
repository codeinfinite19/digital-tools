import './index.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import HeroCard from './Components/herocard/HeroCard';
import Ratting from './Components/herocard/Ratting';
import Steps from './Components/steps/Steps';
import Premium from './Components/premium/Premium';
import Workflow from './Components/workflow/Workflow';
import Products from './Components/products/Products';
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function App() {
 

  return (
    <>
    <NavBar />
    <HeroCard />
    <Ratting />
    <Products />
    <Steps />
    <Premium />
    <Workflow />
    <Footer />
    <ToastContainer />
   
    </>
  )
}

export default App;

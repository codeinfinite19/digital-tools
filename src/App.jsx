import './index.css';
import NavBar from './Components/NavBar/NavBar';
import Footer from './Components/Footer/Footer';
import HeroCard from './Components/herocard/HeroCard';
import Ratting from './Components/herocard/Ratting';
import Steps from './Components/steps/Steps';
import Premium from './Components/premium/Premium';
import Workflow from './Components/workflow/Workflow';


function App() {
 

  return (
    <>
    <NavBar />
    <HeroCard />
    <Ratting />
    <Steps />
    <Premium />
    <Workflow />
    <Footer />
   
    </>
  )
}

export default App;

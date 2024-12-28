import Navbar from './components/Navbar';
import Header from './components/Header';
import Designs from './components/Designs';
import Team from './components/Team';
import WeDo from './components/WeDo';
import Contact from './components/Contact';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Designs/>
      <WeDo/>
      <Team />
      <Contact/>
    </div>
  );
}

export default App;
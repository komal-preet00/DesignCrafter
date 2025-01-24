import Navbar from './components/Navbar';
import Header from './components/Header';
import Designs from './components/Designs';
import Team from './components/Team';
import WeDo from './components/WeDo';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header/>
      <Designs/>
      <WeDo/>
      <Team />
      <Contact/>
      <Footer />
    </div>
  );
}

export default App;
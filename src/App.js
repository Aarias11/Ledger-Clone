
import './App.css';
import Footer from './components/Footer';
import GetStarted from './components/GetStarted';
import Home from './components/Home';
import LedgerLive from './components/LedgerLive';
import NanoChain from './components/NanoChain';
import Navbar from './components/Navbar';
import Products from './components/Products';
import Recommended from './components/Recommended';
import Subscribe from './components/Subscribe';
import TopBanner from './components/TopBanner';

function App() {
  return (
    <div className="App">
      
      <TopBanner />
      <Navbar />
      <Home />
      <Recommended />
      <NanoChain />
      <LedgerLive />
      <Products />
      <GetStarted />
      <Subscribe />
      <Footer />
    </div>
  );
}

export default App;

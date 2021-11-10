import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';
import Contact from './pages/Contact';
import Single from './pages/Single';
import AddIterinary from './pages/AddIterinary';
import NavBar from './components/NavBar';
import TracksContextProvider from './context/TracksContextProvider';
import Footer from './components/Footer';

function App() {
  return (
    <TracksContextProvider>
      <Router>
        <div className="relative max-w-md mt-16 mx-auto">
        <div className="max-w-md mx-auto mt-10 mb-4 relative z-50 bg-white   shadow-xl p-4">
          <NavBar />
          <Switch>
            <Route exact path="/">
              <Index />
            </Route>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/add">
              <AddIterinary />
            </Route>
            <Route exact path="/contact">
              <Contact />
            </Route>
            <Route exact path="/single">
              <Single />
            </Route>
          </Switch>
          <Footer />
        </div>
        <img src="assets/images/shape2.jpg" className="absolute  h-80  z-0 -bottom-16 -left-20" alt="shape" />
        </div>
      </Router>
    </TracksContextProvider>
  );
}

export default App;

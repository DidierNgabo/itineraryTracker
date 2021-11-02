import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Index from './pages/Index';
import About from './pages/About';

function App() {
  return (
    <Router>
      <div className="max-w-md mx-auto mt-10 mb-4  border border-gray-300 p-4">
        <Switch>
          <Route exact path="/">
            <Index />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

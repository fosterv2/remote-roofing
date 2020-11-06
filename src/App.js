import { Fragment } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Home from './containers/Home';
import FAQ from './containers/FAQ';
import Services from './containers/Services';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Fragment>
          <Route exact path="/" component={Home} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/services" component={Services} />
        </Fragment>
      </div>
    </Router>
  );
}

export default App;

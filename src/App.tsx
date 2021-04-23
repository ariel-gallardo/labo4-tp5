import '@css/App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Instrumentos from '@componente/lista';


function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path = "/" component={Instrumentos} />
        </Switch>
      </Router>
    </>
  );
}

export default App;

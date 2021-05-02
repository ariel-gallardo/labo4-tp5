import '@css/App.css';
import {Router, Switch, Route} from 'react-router-dom'
import Instrumentos from '@componente/lista';
import Instrumento from '@componente/detalle';
import Historial from '@componente/historial';


function App() {
  return (
    <>
      <Router history={Historial} >
        <div className="container">
          <Switch>
            <Route exact path="/" component={Instrumentos} />
            <Route exact path="/instrumento/detalle" component={Instrumento}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

import '@css/App.css';
import {Router, Switch, Route} from 'react-router-dom'
import Instrumentos from '@componente/lista';
import Instrumento from '@componente/detalle';
import Historial from '@componente/historial';
import BarraNavegacion from '@componente/BarraNavegacion';
import Index from '@componente/Index';
import Mapa from '@componente/Mapa';

function App() {
  return (
    <>
      <Router history={Historial}>
        <BarraNavegacion/>
        <div className="container Hendrix">
          <Switch>
            <Route exact path="/" component={Index} />
            <Route exact path="/mapa" component={Mapa} />
            <Route exact path="/instrumentos" component={Instrumentos} />
            <Route exact path="/instrumentos/detalle" component={Instrumento}/>
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;

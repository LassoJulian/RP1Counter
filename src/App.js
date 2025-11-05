import './App.css';
import Mensaje from './Mensaje';

/**
 * Componente principal de la aplicación App
 * 
 * CONVENCIÓN IMPORTANTE DE REACT:
 * - Los nombres de componentes SIEMPRE empiezan con MAYÚSCULA (App, Mensaje, etc.)
 * - Esta convención es obligatoria porque React la usa para distinguir entre:
 *   * Componentes personalizados (App, Mensaje) - empiezan con mayúscula
 *   * Elementos HTML nativos (div, h1, p) - empiezan con minúscula
 * 
 * Este componente:
 * - Es un componente funcional (usando arrow function)
 * - Renderiza un div con className "App"
 * - Incluye el componente Mensaje y le pasa las props
 * - Recibe props desde index.js (contador, funciones de control, resultados)
 * - Maneja tres botones: Start, Stop y Results
 */
const App = (props) => {
  return (
    <div className="App">
      {/* Componente que muestra el mensaje principal */}
      <Mensaje nombre="julscode" contador={props.contadorinicial || 0} />
      
      {/* Contenedor de botones de control */}
      <div className="button-container">
        <button 
          className={`btn ${props.isRunning ? 'btn-secondary' : 'btn-success'}`}
          onClick={props.onStart}
          disabled={props.isRunning}
        >
          Start
        </button>
        
        <button 
          className={`btn ${!props.isRunning ? 'btn-secondary' : 'btn-danger'}`}
          onClick={props.onStop}
          disabled={!props.isRunning}
        >
          Stop
        </button>
        
        <button 
          className="btn btn-primary"
          onClick={props.onResults}
        >
          Results
        </button>
      </div>

      {/* Lista de resultados guardados */}
      {props.resultados && props.resultados.length > 0 && (
        <div className="results-container">
          <h3>Resultados Guardados:</h3>
          <ul className="results-list">
            {props.resultados.map((resultado, index) => (
              <li key={index} className="result-item">
                Resultado #{index + 1}: {resultado}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;

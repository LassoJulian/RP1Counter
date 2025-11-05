import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Estilos globales que acabamos de crear
import App from './App'; // Importamos el componente App principal

const root = ReactDOM.createRoot(document.getElementById("root"));

// Variables de estado
let contador = 0;
let intervalId = null;
let isRunning = false;
let resultados = [];

// Función para refrescar y renderizar con el estado actualizado
const refresh = () => {
    root.render(
        <App 
            contadorinicial={contador}
            isRunning={isRunning}
            resultados={resultados}
            onStart={startCounter}
            onStop={stopCounter}
            onResults={saveResult}
        />
    );
}

// Función para iniciar el contador
const startCounter = () => {
    if (!isRunning) {
        isRunning = true;
        intervalId = setInterval(() => {
            contador++;
            refresh();
        }, 1000);
        refresh();
    }
}

// Función para parar el contador
const stopCounter = () => {
    if (isRunning) {
        isRunning = false;
        clearInterval(intervalId);
        intervalId = null;
        refresh();
    }
}

// Función para guardar resultado y resetear
const saveResult = () => {
    // Agregar el resultado actual a la lista
    resultados.push(contador);
    
    // Parar el contador si está corriendo
    stopCounter();
    
    // Resetear contador a 0
    contador = 0;
    
    // Refrescar para mostrar cambios
    refresh();
}

// Renderizado inicial
refresh();

// Iniciar el contador automáticamente al cargar
startCounter();

/**
 * Componente Mensaje
 * 
 * CONVENCIÓN DE NOMENCLATURA:
 * - Nombre del componente: "Mensaje" (primera letra en MAYÚSCULA)
 * - Esta convención es OBLIGATORIA en React
 * 
 * PARÁMETROS (PROPS):
 * - Este componente recibe 'params' como argumento
 * - 'params' es un objeto que contiene todas las props pasadas desde el componente padre
 * - En este caso esperamos recibir las props 'nombre' y 'contador' desde App.js
 * 
 * FUNCIONAMIENTO:
 * - Cuando App.js renderiza <Mensaje nombre="julscode" contador={valor} />
 * - React pasa un objeto params = { nombre: "julscode", contador: valor }
 * - Accedemos a los valores con params.nombre y params.contador
 * 
 * ALTERNATIVAS COMUNES:
 * - Podríamos usar destructuring: const Mensaje = ({ nombre, contador }) => { ... }
 * - O usar props como nombre: const Mensaje = (props) => { ... props.nombre }
 */
const Mensaje = (params) => {
    return <h1>¡Hola, mundo, soy {params.nombre}! Contador: {params.contador}</h1>
}

export default Mensaje;
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'
import FormTarea from "./components/formTarea";

function App() {
 

  return (
    <>
    <Container className="my-5 mainPage">
      <h1 className="display-4 text-center">Lista de Tareas</h1>
      <hr />
     <FormTarea></FormTarea>
     </Container>
     <footer className="bg-dark text-light text-center py-4">
        <p>&copy; Todos los derechos reservados</p>
      </footer>
    </>
  )
}

export default App

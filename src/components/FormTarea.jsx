import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";
import { useState } from "react";

const FormTarea = () => {
  const [tarea, setTarea] = useState("");
  const [tareas, setTareas] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <section className="container">
      <Form onSubmit={handleSubmit}>
        <Form.Group className="d-flex mb-2" controlId="tarea">
          <Form.Control
            type="text"
            placeholder="Ingrese aquí la tarea"
            onChange={(e) => setTarea(e.target.value)}
            value={tarea}
          />
          <Button variant="success" type="submit" className="ms-2">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <ListaTareas></ListaTareas>
    </section>
  );
};

export default FormTarea;

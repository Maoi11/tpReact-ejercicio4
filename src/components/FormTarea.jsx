
import Form  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import ListaTareas from "./ListaTareas";

const FormTarea = () => {
  return (
    <section className="container">
      <Form>
        <Form.Group className="d-flex mb-2" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese aquí la tarea" />
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

import Form  from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const FormTarea = () => {
  return (
    <section className="container">
      <h1 className="text-center my-3">Lista de Tareas</h1>
      <Form>
        <Form.Group className="d-flex mb-2" controlId="tarea">
          <Form.Control type="text" placeholder="Ingrese aquí la tarea" />
          <Button variant="success" type="submit" className="ms-2">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <hr />
    </section>
  );
};

export default FormTarea;

import ListGroup from "react-bootstrap/ListGroup";
import ItemTarea from "./ItemTarea"

const ListaTareas = ({arrayDeTareas, funcionParaBorrar}) => {
    return (
        <ListGroup>
            {arrayDeTareas.map((item, iTarea))}(
                <ItemTarea tarea={item} key={iTarea} borrarItem={funcionParaBorrar}></ItemTarea>
            )
        </ListGroup>
    );
};

export default ListaTareas;
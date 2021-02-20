import {Form, Button} from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext , useState } from "react";

const EditForm = ({thisEmployee}) => {

    const { dispatch } = useContext(EmployeeContext);
    const id = thisEmployee.id;

    const [name, setName] = useState(thisEmployee.name)
    const [email, setEmail] = useState(thisEmployee.email)
    const [address, setAddress] = useState(thisEmployee.address)
    const [phone, setPhone] = useState(thisEmployee.phone)

    const thisUpdateEmployee = { id, name, email, address, phone }

    const handleSubmit = (e) => {
        e.preventDefault();
        // updateEmployee(id, thisUpdateEmployee);

        dispatch({type:"update-employee",id, thisUpdateEmployee})
    }    

    return (
        <Form onSubmit={handleSubmit}>

        <Form.Group>
            <Form.Control
                type="text"
                placeholder="Name *"
                required 
                name="name"
                value={name}
                onChange={(e)=>setName(e.target.value)}
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
                type="email"
                placeholder="Email *"
                required 
                name="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
                as="textarea"
                placeholder="Address *"
                rows={3} 
                name="address"
                value={address}
                onChange={(e)=>setAddress(e.target.value)}
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={(e)=>setPhone(e.target.value)}
            />
        </Form.Group>

        <Button variant="success" type="submit" block>
            Update Employee
        </Button>
    </Form>
    )
}

export default EditForm;
import {Form, Button} from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import { useContext , useState } from "react";

const AddForm = () => {

    const { dispatch } = useContext(EmployeeContext)

    const [newEmployee, setNewEmployee] = useState({
        name:"", email:"", address:"", phone:"" 
    })

    const{name, email, address, phone} = newEmployee;

    const handleSubmit = (e) =>{
        e.preventDefault();
        // addEmployee(name, email, address, phone )
        dispatch({  type:"add-employee",
                    employee : {
                        name, email, address, phone
                    }})
        }

    const onInputChange = (e) =>{
        setNewEmployee({...newEmployee, [e.target.name]: e.target.value })
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
                onChange={e=>onInputChange(e)}
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
                type="email"
                placeholder="Email *"
                required 
                name="email"
                value={email}
                onChange={e=>onInputChange(e)}
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
                as="textarea"
                placeholder="Address *"
                rows={3} 
                name="address"
                value={address}
                onChange={e=>onInputChange(e)}
            />
        </Form.Group>

        <Form.Group>
            <Form.Control
                type="text"
                placeholder="Phone"
                name="phone"
                value={phone}
                onChange={e=>onInputChange(e)}
            />
        </Form.Group>

        <Button variant="success" type="submit" block>
            Add New Employee
        </Button>
    </Form>
    )
}

export default AddForm;
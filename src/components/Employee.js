import { useContext, useState, useEffect } from "react";
import { Modal, Button } from "react-bootstrap";
import { EmployeeContext } from "../contexts/EmployeeContext";
import EditForm from "./EditForm"; 

const Employee = ({ employee }) => {
  const { dispatch } = useContext(EmployeeContext);

  const [show, setShow] = useState(false);

  const handleClose = () =>{
    setShow(false)
  }

  const handleShow = () =>{
    setShow(true)
  }

  useEffect(() => {
    handleClose();
  }, [employee])

  return (
    <>
      <td>{employee.name}</td>
      <td>{employee.email}</td>
      <td>{employee.address}</td>
      <td>{employee.phone}</td>
      <td className="d-flex">
        <button className="btn text-warning" data-toggle="modal" onClick={handleShow}>
          <i className="material-icons" data-toggle="tooltip" title="Edit">
            &#xE254;
          </i>
        </button>
        <button
          onClick={() => dispatch({type:"remove-employee", id :employee.id})}
          className="btn text-danger"
          data-toggle="modal"
        >
          <i className="material-icons" data-toggle="tooltip" title="Delete">
            &#xE872;
          </i>
        </button>
      </td>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Employee</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <EditForm thisEmployee={employee}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Employee;

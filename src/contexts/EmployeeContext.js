import {createContext, useReducer} from "react"
import { v4 as uuidv4 } from 'uuid';

export const EmployeeContext = createContext();

const EmployeeContextProvider = (props) =>{

    // const [employees, setEmployee] = useState([
    //     {id:uuidv4(), name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222'},
    //     {id:uuidv4(), name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735'},
    //     {id:uuidv4(), name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931'},
    //     {id:uuidv4(), name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731'},
    //     {id:uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097'}
    //   ])

    const reducer = (employees, action) =>{
        switch (action.type) {
            case "add-employee":
                return [...employees,{
                    id:uuidv4(),
                    name: action.employee.name,
                    email: action.employee.email,
                    address: action.employee.address ,
                    phone: action.employee.phone
                }];
            case "remove-employee":
                return employees.filter(x => x.id !== action.id)
            case "update-employee":
                return employees.map((x) => (x.id === action.id ? action.updateEmployee : x))
            default:
                return employees;
        }
    }

    const [employees, dispatch] = useReducer(reducer, [
        {id:uuidv4(), name: 'Thomas Hardy', email: 'thomashardy@mail.com', address: '89 Chiaroscuro Rd, Portland, USA', phone: '(171) 555-2222'},
        {id:uuidv4(), name: 'Dominique Perrier', email: 'dominiqueperrier@mail.com', address: 'Obere Str. 57, Berlin, Germany', phone: '(313) 555-5735'},
        {id:uuidv4(), name: 'Maria Anders', email: 'mariaanders@mail.com', address: '25, rue Lauriston, Paris, France', phone: '(503) 555-9931'},
        {id:uuidv4(), name: 'Fran Wilson', email: 'franwilson@mail.com', address: 'C/ Araquil, 67, Madrid, Spain', phone: '(204) 619-5731'},
        {id:uuidv4(), name: 'Martin Blank', email: 'martinblank@mail.com', address: 'Via Monte Bianco 34, Turin, Italy', phone: '(480) 631-2097'}
        ])

    // const addEmployee = (name, email, address, phone) => {
    //     setEmployee([...employees, {id:uuidv4(), name, email, address, phone}])
    // }

    // const deleteEmployee = (id) => {
    //     setEmployee(employees.filter(x => x.id !== id))
    // }
    
    // const updateEmployee = (id, updateEmployee) =>{
    //     setEmployee(employees.map((x) => (x.id === id ? updateEmployee : x)))
    // }

    return(
        <EmployeeContext.Provider value={{employees, dispatch}}>
            {props.children}
        </EmployeeContext.Provider>
    )
}
export default EmployeeContextProvider;
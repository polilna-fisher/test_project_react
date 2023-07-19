import './employees-list.css'
import EmployeesListItem from "../employees-list-item/employees-list-item";

const EmployeesList = ({ deleteItem, employeeList, increaseSalary, riseSalary }) => {
    const items = employeeList.map(el => {
        return <EmployeesListItem
            name={el.name}
            salary={el.salary}
            id={el.id}
            increase={el.increase}
            onDelete={deleteItem}
            increaseSalary={increaseSalary}
            riseSalary={riseSalary}
            rise={el.rise}
            key={el.id}/>
    })
    return(
        <ul className='app-list list-group'>
            {items}
        </ul>
    )
}
export default EmployeesList
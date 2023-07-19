import {Component} from "react";
import './employees-list-item.css'

class EmployeesListItem extends Component {
    // constructor(props) {
    //     super(props);
    //
    // }




    render() {

        const {name, salary, onDelete, id, increase, rise, increaseSalary, riseSalary} = this.props

        const employeesItemCls = [
            'list-group-item justify-content-between d-flex',
            increase ? 'increase' : '',
            rise ? 'like' : ''
        ]

        return (
            <li className={employeesItemCls.join(' ')}
                >
                <span
                    className="list-group-item-label"
                    onClick={() => {riseSalary(id)}}
                    style={{fontSize: 25}}
                >{name}</span>
                <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
                <div className='d-flex justify-content-center align-items-center'>
                    <button type="button"
                            onClick={() => {
                                increaseSalary(id)
                            }}
                            className="btn-cookie btn-sm "
                    >
                        <i className="fas fa-cookie"></i>
                    </button>

                    <button type="button"
                            className="btn-trash btn-sm "
                            onClick={() => {
                                onDelete(id)
                            }}
                    >
                        <i className="fas fa-trash"></i>
                    </button>
                    <i className="fas fa-star"></i>
                </div>
            </li>
        )
    }
}

export default EmployeesListItem
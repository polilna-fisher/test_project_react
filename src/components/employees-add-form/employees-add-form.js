import {Component} from "react";
// import './employees-add-form.css'
import './employees_add_form.scss'
import Input from "../input/input";

class EmployeesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            salary: '',
            errors: {
                name: '',
                salary: ''
            }
        }
    }

    getInputValue = (e) => {
        this.setState((state) => {
            return ({
                [e.target.name]: e.target.value,
                errors: {
                    ...state.errors,
                    [e.target.name]: '',
                }
            })
        })
    }

    createItem = (e) => {
        e.preventDefault()
        const item = {
            name: this.state.name,
            salary: this.state.salary,
            id: new Date().getTime(),
            increase: false,
            rise: false
        }
        const isValid = this.validation(item)

        if (isValid) {
            this.props.addEmployee(item)
        }
    }

    validation = (item) => {
        let isValid = true
        if (!item.name) {
            this.setState(state => ({
                errors: {
                    ...state.errors,
                    name: 'Заполните поле',
                }
            }))
            isValid = false
        }
        if (!item.salary) {
            this.setState(state => ({
                errors: {
                    ...state.errors,
                    salary: 'Заполните поле'
                }
            }))
            isValid = false
        }

        return isValid
    }


    render() {
        return (
            <div className="app-add-form">
                <h3>Добавьте нового сотрудника</h3>
                <form
                    className="add-form d-flex"
                >
                    <Input type="text"
                           placeholder="Как его зовут?"
                           name='name'
                           error={this.state.errors.name}
                           onChange={this.getInputValue}/>
                    <Input
                        type="number"
                        placeholder="З/П в $?"
                        name='salary'
                        error={this.state.errors.salary}
                        onChange={this.getInputValue}/>

                    <button type="submit"
                            className="btn btn-outline-light"
                            onClick={this.createItem}>Добавить
                    </button>
                </form>
            </div>
        )
    }
}

export default EmployeesAddForm
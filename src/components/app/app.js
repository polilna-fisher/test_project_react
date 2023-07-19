import {Component} from "react";
import './app.css'
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import EmployeesList from "../employees-list/employees-list";
import EmployeesAddForm from "../employees-add-form/employees-add-form";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: 'Alex', salary: '1000', id: 1, increase: false, rise: true},
                {name: 'Max', salary: '6000', id: 2, increase: true, rise: true},
                {name: 'Anna', salary: '500', id: 3, increase: false, rise: false}
            ],
            term: '',
            filter: 'all'
        }
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            return ({
                data: data.filter(el => el.id !== id)
            })
        })
    }

    increaseSalary = (id) => {
        this.setState(({data}) => {
            return ({
                data: data.map(el => {
                    if (el.id === id) {
                        return {...el, increase: !el.increase}
                    }
                    return el
                })
            })
        })
    }

    riseSalary = (id) => {
        this.setState(({data}) => {
            return ({
                data: data.map(el => {
                    if (el.id === id) {
                        return {...el, rise: !el.rise}
                    }
                    return el
                })
            })
        })
    }

    salaryCount = () => {
        const count = this.state.data.filter(el => el.increase === true).length
        return count
    }

    addEmployee = (item) => {
        this.setState(({data}) => ({
            data: [...data, item]
        }))
    }

    showFilteredList = (items, term) => {
        if (term.length === 0){
            return items
        }return items.filter(item => {
            return item.name.indexOf(term) > 1
        })
    }

    updateTerm = (term) => {
        this.setState({term: term})
    }

    FilterBy = (items, filter) => {
        switch (filter){
            case 'increase':
                return items.filter(item => Number(item.salary) > 1000)
            case 'rise':
                return items.filter(item => item.rise === true)
            default:
                return items
        }
    }

    onSelectFilter = (filterName) => {
        this.setState({filter: filterName})
    }


    render() {
        const{data, term, filter} = this.state
        const filteredData = this.FilterBy(this.showFilteredList(data, term), filter)
        return (

            <div className='app'>
                <AppInfo employeeCount={data.length}
                         salaryCount={this.salaryCount}/>
                <div className='search-panel'>
                    <SearchPanel updateTerm={this.updateTerm}/>
                    <AppFilter filter={filter} onSelectFilter={this.onSelectFilter}/>
                </div>
                <EmployeesList employeeList={filteredData} deleteItem={this.deleteItem}
                               increaseSalary={this.increaseSalary}
                               riseSalary={this.riseSalary}

                />
                <EmployeesAddForm addEmployee={this.addEmployee}
                                    />
            </div>
        )
    }
}

export default App
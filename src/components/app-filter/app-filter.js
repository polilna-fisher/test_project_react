import {Component} from "react";
import './app-filter.css'


class AppFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {onSelectFilter, filter} = this.props
        const buttonsData = [
            {name: 'all', label: 'Все сотрудники'},
            {name: 'rise', label: 'Сотрудники на повышение'},
            {name: 'increase', label: 'ЗП больше 1000$'},
        ]

        const button = buttonsData.map(({name, label}) => {
            const activeButton = filter === name
            return <button
                        className={activeButton ? 'btn btn-light' : 'btn btn-outline-light'}
                        type='button'
                        key={name}
                        onClick={() => {onSelectFilter(name)}}>
                        {label}
                    </button>
        })


        return (
            <div className='btn-group'>
                {button}
            </div>
        )
    }

}

export default AppFilter
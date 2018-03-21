import * as React from 'react';
import { employees, IEmployees } from '../../assets/mocks/mock';
import './Employees.scss';

export interface IEmployeesState {
    employees: IEmployees[];
}

export default class Employees extends React.Component<{}, IEmployeesState> {
    constructor(props) {
        super(props);

        this.state = {
            employees
        };
        this.filteredEmployees = this.filteredEmployees.bind(this);
    }

    public render() {
        const list = this.state.employees.map(employee => (
            <tr>
                <td>{employee.name}</td>
                <td>{employee.lastName}</td>
                <td>{employee.salary}</td>
                <td>{employee.birth}</td>
                <td>{employee.position}</td>
                <td>{employee.sex}</td>
            </tr>
        ));
        return (
            <table>
                <thead>
                    <tr>
                        <td onClick={this.filteredEmployees('salary')}>Name</td>
                        <td>Last Name</td>
                        <td>Salary</td>
                        <td>Birth</td>
                        <td>Position</td>
                        <td>Sex</td>
                    </tr>
                </thead>
                {list}
            </table>
        );
    }

    private filteredEmployees: any = (filteredBy: string) => {
        const filteredEmployees: IEmployees[] = this.state.employees.sort((a: IEmployees, b: IEmployees) => {
            if (a[filteredBy] > b[filteredBy]) {
                return 1;
            } else if (a[filteredBy] < b[filteredBy]) {
                return -1;
            } else {
                return 0;
            }
        });
        this.setState({ employees: filteredEmployees });
    };
}

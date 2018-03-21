import * as React from 'react';
import { employees, IEmployees } from '../../assets/mocks/mock';
import './Employees.scss';

interface IEmployeesState {
    employee: IEmployees;
}

const Employees: React.SFC<{}> = () => {
    const filterByName = (): IEmployees[] => {
        const filteredEmployees = employees.sort((a: IEmployees, b: IEmployees) => {
            if (a.salary > b.salary) {
                return 1;
            } else if (a.salary < b.salary) {
                return -1;
            } else {
                return 0;
            }
        });
        console.log(filteredEmployees);
        return filteredEmployees;
    };

    const employeesList = employees.map(employee => (
        <tr>
            <td>{employee.name}</td>
            <td>{employee.lastName}</td>
            <td>{employee.birth}</td>
            <td>{employee.salary}</td>
            <td>{employee.position}</td>
            <td>{employee.sex}</td>
        </tr>
    ));
    return (
        <table>
            <thead>
                <tr>
                    <th onClick={filterByName}>Name</th>
                    <th>Last name</th>
                    <th>Birth</th>
                    <th>Salary</th>
                    <th>Position</th>
                    <th>Sex</th>
                </tr>
            </thead>

            {employeesList}
        </table>
    );
};

export default Employees;

import * as React from 'react';
import './../assets/scss/App.scss';
import Employees from './EmployeesList/EmployeesList';

const App = (props: {}) => (
    <div className="app">
        <h1>Hello World!!</h1>
        <Employees />
    </div>
);

export default App;

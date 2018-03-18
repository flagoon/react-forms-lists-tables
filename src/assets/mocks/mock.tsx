import * as React from 'react';

export interface IEmployees {
    name: string;
    lastName: string;
    birth: string;
    salary: number;
    // can only be male or female.
    sex: 'male' | 'female';
    position: string;
}

export const employees: IEmployees[] = [
    {
        name: 'Paweł',
        lastName: 'Kochanek',
        birth: '1980-03-16',
        salary: 5000,
        sex: 'male',
        position: 'Junior Developer'
    },
    {
        name: 'Katarzyna',
        lastName: 'Kochanek',
        birth: '1984-05-10',
        salary: 4800,
        sex: 'female',
        position: 'Admin Assistant'
    },
    {
        name: 'Zuzia',
        lastName: 'Kochanek',
        birth: '2013-09-06',
        salary: 1000,
        sex: 'female',
        position: 'daughter'
    },
    {
        name: 'Michał',
        lastName: 'Kochanek',
        birth: '2016-05-20',
        salary: 800,
        sex: 'male',
        position: 'son'
    }
];

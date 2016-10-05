import { Employee } from './employee.model'; // fix imports

export class Team {
    name: string;
    employees: Employee[];
    active: boolean;
}
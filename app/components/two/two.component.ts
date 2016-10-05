import {Component, OnInit} from '@angular/core';
import {Employee} from "../../shared/models/employee.model";
import {EmployeesService} from "../../shared/services/employees.service";
import {TeamsService} from "../../shared/services/teams.service";

@Component({
    selector: 'two',
    templateUrl: 'app/components/two/two.component.html',
})
export class TwoComponent implements OnInit {
    employees: Employee[];
    foundEmployees: Employee[];
    selectedEmployee: Employee;
    teams: any;
    input: string;
    feedback:{text:string, name:string} = {text: '', name: ''};

    constructor(private EmployeesService: EmployeesService, private TeamsService: TeamsService) {
    }

    ngOnInit(): void {
        this.EmployeesService.getEmployees().then((employees) => {
            this.employees = employees;
            this.foundEmployees = employees.slice(0, 20);
            this.teams = this.TeamsService.teams;
        })
    }

    selectEmployee(employee: Employee) {
        if(this.selectedEmployee === employee){
            this.selectedEmployee = null;
        }else{
            this.selectedEmployee = employee;
        }
    }

    searchForEmployees() {
        let query = new RegExp(this.input, 'ig');
        this.foundEmployees = this.employees.filter((employee) => {
            return (query.test(employee.name) || query.test(employee.grade) || query.test(employee.age.toString()) || query.test(employee.job));
        }).slice(0, 20);
    }

    toggleToSelectedTeam(employee, $event) {
        $event.stopPropagation();

        if (this.teams.selectedTeam) {
            if (!this.selectedTeamContains(employee.id)) {
                this.TeamsService.addEmployeeToTeam(employee, this.teams.selectedTeam);
            }
            else {
                this.TeamsService.deleteEmployeeFromTeam(employee, this.teams.selectedTeam);
            }
        }
        else {
            $event.preventDefault();
        }
    }

    selectedTeamContains(id) {
        if (this.teams && this.teams.selectedTeam) {
            return !!this.teams.selectedTeam.employees.filter(function (employee) {
                return employee.id === id;
            }).length;
        }
        return false;
    }


    addFeedback(employee) {
        this.EmployeesService.addFeedback(employee, this.feedback);
        this.feedback = {text: '', name: ''};
    }
}
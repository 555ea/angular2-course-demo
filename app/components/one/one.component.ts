import {Component, OnInit} from '@angular/core';
import {EmployeesService} from "../../shared/services/employees.service";
import {Employee} from "../../shared/models/employee.model";
import {TeamsService} from "../../shared/services/teams.service";
import {Observable} from "rxjs";

@Component({
    selector: 'one',
    templateUrl: 'app/components/one/one.component.html',
})
export class OneComponent implements OnInit {
    employees: Employee[];
    teams: any;
    input: String;
    employeeSource: Observable<any>;

    constructor(private  employeesService: EmployeesService, private teamsService: TeamsService) {
        this.employeeSource = Observable.create((observer:any) => {
            // Runs on every search
            observer.next(this.input);
        }).mergeMap((token:string) => this.getEmployeesAsObservable(token));
    }

    public getEmployeesAsObservable(token:string):Observable<any> {
        let query = new RegExp(token, 'ig');

        return Observable.of(
            this.employees.filter((employee) => {
                return this.teams.selectedTeamCopy.employees.indexOf(employee) == -1  &&
                    (query.test(employee.name) || query.test(employee.grade) || query.test(employee.age.toString()) || query.test(employee.job));
            })
        );
    }

    ngOnInit(): void {
        this.employeesService.getEmployees().then((employees)=> {
            this.employees = employees;
            this.teams = this.teamsService.teams;
        });
    }

    refresh(){
        var team = this.teams.selectedTeam;
        if (team){
            this.teamsService.syncTeams();
        }
        else{
            throw new Error('no team selected');
        }
    }

    typeaheadOnSelect(event) {
        var employee = event.item;
        this.teams.selectedTeamCopy.employees.push(employee);
        this.input = '';
    }

    removeEmployeeFromSelectedEmployees(employee: Employee){
        this.teams.selectedTeamCopy.employees.splice(this.teams.selectedTeamCopy.employees.indexOf(employee), 1);
    }
}
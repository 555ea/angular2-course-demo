import {Injectable} from '@angular/core';
import {Team} from "../models/team.model";

@Injectable()
export class TeamsService {

    teams: {array: Team[], selectedTeam: Team, selectedTeamCopy: Team}
        = {array: [], selectedTeam: null, selectedTeamCopy: null}

    addTeam(name) {
        var team = new Team();
        team.name = name;
        team.employees = [];
        team.active = true;
        this.teams.array.push(team);
        return team;
    }

    syncTeams() {
        this.teams.selectedTeam.employees = this.teams.selectedTeamCopy.employees;
        this.selectTeam(this.teams.selectedTeam);
    }

    selectTeam(team) {
        this.teams.selectedTeam = team;
        this.teams.selectedTeamCopy = JSON.parse(JSON.stringify(team));
    }

    deleteTeam(team) {
        this.teams.array.splice(this.teams.array.indexOf((team)), 1);
    }

    addEmployeeToTeam(employee, team) {
        team.employees.push(employee);
    }

    deleteEmployeeFromTeam(employee, team) {
        team.employees.splice(team.employees.indexOf(employee), 1);
        this.selectTeam(this.teams.selectedTeam);
    }
}

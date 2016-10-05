import {Component, OnInit} from '@angular/core';
import {Team} from "../../models/team.model";
import {TeamsService} from "../../services/teams.service";

@Component({
    selector: 'team-list',
    templateUrl: 'app/shared/components/team-list/team-list.component.html',
})
export class TeamListComponent implements OnInit {
    constructor(private TeamsService: TeamsService) {
    }

    ngOnInit(): void {
        this.teams = this.TeamsService.teams.array;
    }

    teams: Team[];
    newTeamName: string;

    addNewTeam() {
        var name = this.newTeamName;
        var team = this.TeamsService.addTeam(name);
        this.selectTeam(team);
        this.newTeamName = '';
    }

    enterTeam($event) {
        if ($event.keyCode == 13) {
            this.addNewTeam();
        }
    };

    selectTeam(team, event?) {
        if (team.active) {
            if (event) {
                event.stopImmediatePropagation();
                event.preventDefault();
            }
        }
        this.TeamsService.selectTeam(team);
    };

    deleteTeam(team) {
        this.TeamsService.deleteTeam(team);
    }

    deleteEmployeeFromTeam(employee, team) {
        this.TeamsService.deleteEmployeeFromTeam(employee, team);
    }
}
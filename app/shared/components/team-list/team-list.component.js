"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var teams_service_1 = require("../../services/teams.service");
var TeamListComponent = (function () {
    function TeamListComponent(TeamsService) {
        this.TeamsService = TeamsService;
    }
    TeamListComponent.prototype.ngOnInit = function () {
        this.teams = this.TeamsService.teams.array;
    };
    TeamListComponent.prototype.addNewTeam = function () {
        var name = this.newTeamName;
        var team = this.TeamsService.addTeam(name);
        this.selectTeam(team);
        this.newTeamName = '';
    };
    TeamListComponent.prototype.enterTeam = function ($event) {
        if ($event.keyCode == 13) {
            this.addNewTeam();
        }
    };
    ;
    TeamListComponent.prototype.selectTeam = function (team, event) {
        if (team.active) {
            if (event) {
                event.stopImmediatePropagation();
                event.preventDefault();
            }
        }
        this.TeamsService.selectTeam(team);
    };
    ;
    TeamListComponent.prototype.deleteTeam = function (team) {
        this.TeamsService.deleteTeam(team);
    };
    TeamListComponent.prototype.deleteEmployeeFromTeam = function (employee, team) {
        this.TeamsService.deleteEmployeeFromTeam(employee, team);
    };
    TeamListComponent = __decorate([
        core_1.Component({
            selector: 'team-list',
            templateUrl: 'app/shared/components/team-list/team-list.component.html',
        }), 
        __metadata('design:paramtypes', [teams_service_1.TeamsService])
    ], TeamListComponent);
    return TeamListComponent;
}());
exports.TeamListComponent = TeamListComponent;
//# sourceMappingURL=team-list.component.js.map
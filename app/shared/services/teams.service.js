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
var team_model_1 = require("../models/team.model");
var TeamsService = (function () {
    function TeamsService() {
        this.teams = { array: [], selectedTeam: null, selectedTeamCopy: null };
    }
    TeamsService.prototype.addTeam = function (name) {
        var team = new team_model_1.Team();
        team.name = name;
        team.employees = [];
        team.active = true;
        this.teams.array.push(team);
        return team;
    };
    TeamsService.prototype.syncTeams = function () {
        this.teams.selectedTeam.employees = this.teams.selectedTeamCopy.employees;
        this.selectTeam(this.teams.selectedTeam);
    };
    TeamsService.prototype.selectTeam = function (team) {
        this.teams.selectedTeam = team;
        this.teams.selectedTeamCopy = JSON.parse(JSON.stringify(team));
    };
    TeamsService.prototype.deleteTeam = function (team) {
        this.teams.array.splice(this.teams.array.indexOf((team)), 1);
    };
    TeamsService.prototype.addEmployeeToTeam = function (employee, team) {
        team.employees.push(employee);
    };
    TeamsService.prototype.deleteEmployeeFromTeam = function (employee, team) {
        team.employees.splice(team.employees.indexOf(employee), 1);
        this.selectTeam(this.teams.selectedTeam);
    };
    TeamsService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], TeamsService);
    return TeamsService;
}());
exports.TeamsService = TeamsService;
//# sourceMappingURL=teams.service.js.map